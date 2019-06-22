module.exports = {
    addNum: (a, b) => {
        if (typeof a === "string")
            a = parseInt(a);
        if (typeof b === "string")
            b = parseInt(b);
        return a + b;
    },

    firmwareItemNameMapper: (fwItemName) => {
        if (fwItemName === "rootFS")
            return "Root Filesystem";
        if (fwItemName === "updateRamdisk")
            return "Update Ramdisk";
        return fwItemName;
    },

    // use "function" syntax so "arguments" works
    toArray: function (...params) {
        return params.slice(0, -1);
    }
};