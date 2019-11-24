window.onload = () => {
    document.getElementById("decryptForm").addEventListener("submit", processForm);
}

function processForm(e) {
    e.preventDefault();
    hideErrorBox();

    var validate = validateForm();
    if (!validate.ok) {
        showErrorBox(validate.message);
        return false;
    }
    console.log(validate);

    var file = document.getElementById("decryptFormFile").files[0];
    if (file) {
        if (file.size > 64 * 1024 * 1024) {
            showErrorBox("File is larger than the 64&nbsp;MiB maximum.");
            return false;
        }

        var reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onload = processArrayBuffer;
        reader.onerror = function (e) {
            showErrorBox("Unknown error while reading file.");
        };
    }

    return false;
}

function validateForm() {
    var hexAlphabet = "0123456789ABCDEF";

    var iv = document.getElementById("decryptFormIV").value.toUpperCase();
    var key = document.getElementById("decryptFormKey").value.toUpperCase();

    if (iv.length === 0 && key.length === 0)
        return {
            ok: true,
            encrypted: false
        };

    if (iv.length !== 32)
        return {
            ok: false,
            message: "Invalid IV length"
        };
    for (var i = 0; i < iv.length; i++) {
        if (hexAlphabet.indexOf(iv[i]) === -1)
            return {
                ok: false,
                message: "Invalid character at index " + (i + 1) + " in IV."
            };
    }

    if (key.length !== 32 && key.length !== 48 && key.length !== 64)
        return {
            ok: false,
            message: "Invalid key length"
        };
    for (var i = 0; i < key.length; i++) {
        if (hexAlphabet.indexOf(key[i]) === -1)
            return {
                ok: false,
                message: "Invalid character at index " + (i + 1) + " in key."
            };
    }

    // decode IV and key
    var map = {
        "0": 0, "1": 1, "2": 2, "3": 3,
        "4": 4, "5": 5, "6": 6, "7": 7,
        "8": 8, "9": 9, "A": 10, "B": 11,
        "C": 12, "D": 13, "E": 14, "F": 16
    };

    var decodedIV = [];
    for (var i = 0; i < iv.length; i += 8) {
        var val = 0;
        for (var j = 0; j < 8; j++)
            val |= map[iv[i + j]] << (32 - 4 - (j * 4));
        decodedIV.push(val);
    }

    return {
        ok: true,
        encrypted: true,
        iv: decodeHexString(iv),
        key: decodeHexString(key)
    };
}

function decodeHexString(str) {
    var map = {
        "0": 0, "1": 1, "2": 2, "3": 3,
        "4": 4, "5": 5, "6": 6, "7": 7,
        "8": 8, "9": 9, "A": 10, "B": 11,
        "C": 12, "D": 13, "E": 14, "F": 16
    };

    var decoded = [];
    for (var i = 0; i < str.length; i += 8) {
        var val = 0;
        for (var j = 0; j < 8; j++)
            val |= map[str[i + j]] << (32 - 4 - (j * 4));
        decoded.push(val);
    }

    return decoded;
}

function showOutputDiv() {
    var elem = document.getElementById("output");
    // return if d-none class doesn't exist
    if (elem.className.indexOf("d-none") === -1)
        return;
    elem.className = elem.className.replace("d-none", "");
}

function clearAndHideOutputDiv() {
    var elem = document.getElementById("output");
    // don't add class if it already exists
    if (elem.className.indexOf("d-none") !== -1)
        return;
    elem.className += " d-none";
    elem.innerHTML = "";
}

function showErrorBox(message) {
    var elem = document.getElementById("decryptError");
    // return if d-none class doesn't exist
    if (elem.className.indexOf("d-none") === -1)
        return;
    elem.className = elem.className.replace("d-none", "");
    elem.innerHTML = message;
}

function hideErrorBox(message) {
    var elem = document.getElementById("decryptError");
    // don't add class if it already exists
    if (elem.className.indexOf("d-none") !== -1)
        return;
    elem.className += " d-none";
    elem.innerHTML = message;
}

function detectFileType(file) {
    var magic = toInt32BE(file, 0);
    if (magic === 0x38393030)
        return "8900";
    if (magic === 0x32676d49)
        return "Img2";
    if (magic === 0x33676d49)
        return "Img3";
    return magic;
}

function processArrayBuffer(e) {
    var fileContents = new Uint8Array(e.target.result);
    var fileType = detectFileType(fileContents);

    if (fileType === "8900") {
        process8900(fileContents);
    } else if (fileType === "Img2") {
        processImg2(fileContents);
    } else if (fileType === "Img3") {
        processImg3(fileContents);
    } else {
        showErrorBox("Unknown file type: " + fileType);
    }
}

function process8900(file) {
    if (file[4] !== 0x31 || file[5] !== 0x2e || file[6] !== 0x30) {
        showErrorBox("Unknown 8900 version. Expected 1.0.");
        return;
    }

    var encrypted = (file[7] === 1 || file[7] === 3);

    var payloadLength = toInt32LE(file, 0xC);
    if (payloadLength < 0) {
        showErrorBox("Payload cannot have a zero or negative size.");
        return;
    }

    if (file.byteLength < 0x800 + payloadLength) {
        showErrorBox("File too small for specified payload size.");
        return;
    }

    var payload = file.slice(0x800, 0x800 + payloadLength);

    if (encrypted) {
        // TODO: decrypt payload
    }

    // FIXME: assume this is an unencrypted IMG2
    processImg2(payload);
    // detect if this is an IMG2, DMG, or kernelcache and process accordingly
    // IMG2 will have 2gmI at 0x800
    // DMG will have ???
    // KCache will have comp at 0x800
}

function processImg2(file) {
    // strings are stored in the file as little endian
    var handlers = {
        "ogol": processIBootImage, // AppleLogo
        "Cbat": processIBootImage, // BatteryCharging
        "lbat": processIBootImage, // BatteryLow[0]
        "Lbat": processIBootImage, // BatteryLow1
        "ertd": processDeviceTree, // DeviceTree
        "tobi": processIBoot, // iBoot
        "zbll": processLlb, // LLB
        "vrsn": processIBootImage, // NeedService
        "mcer": processIBootImage, // RecoveryMode
        // iBSS?
        // WTF?
    };

    var imageType = toInt32LE(file, 4);
    console.log(imageType);

    var payloadLength = toInt32LE(file, 0x14);
    if (payloadLength < 0) {
        showErrorBox("Payload cannot have a zero or negative size.");
        return;
    }
    if (file.byteLength < 0x400 + payloadLength) {
        showErrorBox("File too small for specified payload size.");
        return;
    }

    var payload = file.slice(0x400, 0x400 + payloadLength);
    // TODO: use `handlers`
    processIBootImage(payload);
}

function processIBootImage(file) {
    // magic hasn't been verified; check here
    if (toInt32BE(file, 0) !== 0x69426f6f || toInt32BE(file, 4) !== 0x74496d00) {
        showErrorBox("Container claims this is an iBootImage, but it's not.");
        return;
    }

    if (toInt32LE(file, 0xC) !== 0x6c7a7373) {
        showErrorBox("Unknown iBootImage compression. Only lzss is supported.");
        return;
    }

    var colorType = toInt32LE(file, 0x10);
    if (colorType === 0x61726762) {
        colorType = "argb";
    } else if (colorType == 0x67726579) {
        colorType = "gray";
    } else {
        showErrorBox("Unknown iBootImage color type. Only gray and ARGB are supported.");
        return;
    }

    var width = toInt16LE(file, 0x14);
    var height = toInt16LE(file, 0x16);
    if (width < 0 || height < 0) {
        showErrorBox("Invalid iBootImage dimensions.");
        return;
    }

    var decompressedLength = 0;
    if (colorType === "gray")
        decompressedLength = 2 * width * height;
    else // argb
        decompressedLength = 4 * width * height;

    var compressedPayload = file.slice(0x40, file.byteLength);
    var decompressedPayload = new Array(decompressedLength);

    var decompressedBytes = decompressLzss(decompressedPayload, compressedPayload);
    if (decompressedLength !== decompressedBytes) {
        showErrorBox("Error decompressing iBootImage.");
        return;
    }

    // set canvas properties
    showOutputDiv();
    var canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    document.getElementById("output").appendChild(canvas);

    var ctx = canvas.getContext("2d");
    var imageData = ctx.getImageData(0, 0, width, height);
    var data = imageData.data;

    var payloadOffset = 0;
    var dataOffset = 0;
    if (colorType === "gray") {
        for (var y = 0; y < height; y++) {
            for (var x = 0; x < width; x++) {
                var pixel = decompressedPayload[payloadOffset];
                data[dataOffset] = pixel;
                data[dataOffset + 1] = pixel;
                data[dataOffset + 2] = pixel;
                data[dataOffset + 3] = 255 - decompressedPayload[payloadOffset + 1];
                payloadOffset += 2;
                dataOffset += 4;
            }
        }
    } else { // argb
        for (var y = 0; y < height; y++) {
            for (var x = 0; x < width; x++) {
                data[dataOffset] = decompressedPayload[payloadOffset + 1];
                data[dataOffset + 1] = decompressedPayload[payloadOffset + 2];
                data[dataOffset + 2] = decompressedPayload[payloadOffset + 3];
                data[dataOffset + 3] = 255 - decompressedPayload[payloadOffset];
                payloadOffset += 4;
                dataOffset += 4;
            }
        }
    }
    console.log(decompressedPayload);

    // push the updated canvas to the page
    ctx.putImageData(imageData, 0, 0);
}

function processDeviceTree(file) {

}

function processIBoot(file) {

}

function processLlb(file) {

}

function processImg3(file) {
    // TODO
    showErrorBox("IMG3 files not implemented.");
}

function toInt32BE(file, index) {
    return (file[index] << 24) | (file[index + 1] << 16) |
        (file[index + 2] << 8) | file[index + 3];
}

function toInt32LE(file, index) {
    return (file[index + 3] << 24) | (file[index + 2] << 16) |
        (file[index + 1] << 8) | file[index];
}

function toInt16BE(file, index) {
    return (file[index] << 8) | file[index + 1];
}

function toInt16LE(file, index) {
    return (file[index + 1] << 8) | file[index];
}