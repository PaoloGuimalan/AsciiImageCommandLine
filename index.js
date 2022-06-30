const sizeOf = require("image-size")
const Jimp = require("jimp");
const getPixels = require("get-pixels");

const chars = 'Ñ@#W$9876543210?!abc;:+=-,._';
// const imageprev = require("./imgs/imgTest.jpg")

const map = (val, in_min, in_max, out_min, out_max) => {
    return (val - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

Jimp.read("imgs/sala.jpg", (err, image) => {
    for(var j = 0; j < image.getHeight(); j++){
        var arr = []

        for(var i = 0; i < image.getWidth(); i++){
            const pixelIndex = (i + j * image.getWidth()) * 4;
            const r = Jimp.intToRGBA(image.getPixelColor(i, j)).r
            const g = Jimp.intToRGBA(image.getPixelColor(i, j)).g
            const b = Jimp.intToRGBA(image.getPixelColor(i, j)).b

            const avg = (r + g + b) / 3
            const len = chars.length;
            const charIndex = Math.floor(map(avg, 0, 255, len, 0))
            // console.log(chars.charAt(charIndex))
            arr.push(chars.charAt(charIndex))
        }

        console.log(arr.join(""))
    }
})

