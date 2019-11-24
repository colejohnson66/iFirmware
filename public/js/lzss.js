// Based off of Haruhiko Okumura's LZSS.C which is in the public domain
// Assumes `dest` is big enough, and returns the number of bytes decompressed
function decompressLzss(dest, src) {
    var N = 4096;
    var F = 18;
    var THRESHOLD = 2;

    var textBuf = new Array(N + F + 1);
    var srcPos = 0;
    var dstPos = 0;
    var r = N - F;

    for (var i = 0; i < r; i++)
        textBuf[i] = 0x20;

    var c; // current byte
    var flags = 0;

    while (true) {
        if (((flags >>= 1) & 0x100) === 0) {
            if (srcPos < src.length)
                c = src[srcPos++];
            else
                break;
            flags = c | 0xFF00;
        }

        if ((flags & 1) !== 0) {
            if (srcPos < src.length)
                c = src[srcPos++];
            else
                break;
            dest[dstPos++] = c;
            textBuf[r++] = c;
            r &= N - 1;
        } else {
            var i, j;
            if (srcPos < src.length)
                i = src[srcPos++];
            else
                break;

            if (srcPos < src.length)
                j = src[srcPos++];
            else
                break;

            i |= (j & 0xF0) << 4;
            j = (j & 0x0F) + THRESHOLD;

            for (var k = 0; k <= j; k++) {
                c = textBuf[(i + k) & (N - 1)];
                dest[dstPos++] = c;
                textBuf[r++] = c;
                r &= N - 1;
            }
        }
    }

    return dstPos;
}