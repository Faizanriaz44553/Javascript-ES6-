let images1 = document.querySelector("#image-1")
let images2 = document.querySelector("#image-2")
let images3 = document.querySelector("#image-3")
let images4 = document.querySelector("#image-4")
let images5 = document.querySelector("#image-5")
let images6 = document.querySelector("#image-6")
let shufal1 = document.querySelector("#images-js-1")

let imageArray1 = [
    "./assets/images/eight-spades-playing-card-isolated_1308-78746.avif",
    "./assets/images/ace-diamonds-playing-card-isolated_1308-78990.avif",
    "./assets/images/three-spades-playing-card-isolated_1308-79269 (1).avif",
    "./assets/images/ace-spades-playing-card-isolated_1308-78560.avif",
    "./assets/images/ace-diamonds-playing-card-isolated_1308-78291.avif",
    "./assets/images/two-hearts-playing-card-isolated_1308-78625.avif"
];

let imageArray2 = [
    "./assets/images/three-spades-playing-card-isolated_1308-79269 (1).avif",
    "./assets/images/eight-spades-playing-card-isolated_1308-78746.avif",
    "./assets/images/two-hearts-playing-card-isolated_1308-78625.avif",
    "./assets/images/ace-diamonds-playing-card-isolated_1308-78291.avif",
    "./assets/images/ace-spades-playing-card-isolated_1308-78560.avif",
    "./assets/images/ace-diamonds-playing-card-isolated_1308-78990.avif"
];

let imageArray3 = [
    "./assets/images/ace-spades-playing-card-isolated_1308-78560.avif",
    "./assets/images/ace-diamonds-playing-card-isolated_1308-78291.avif",
    "./assets/images/two-hearts-playing-card-isolated_1308-78625.avif",
    "./assets/images/ace-diamonds-playing-card-isolated_1308-78990.avif",
    "./assets/images/eight-spades-playing-card-isolated_1308-78746.avif",
    "./assets/images/three-spades-playing-card-isolated_1308-79269 (1).avif"
];

let imageArray4 = [
    "./assets/images/two-hearts-playing-card-isolated_1308-78625.avif",
    "./assets/images/ace-spades-playing-card-isolated_1308-78560.avif",
    "./assets/images/ace-diamonds-playing-card-isolated_1308-78990.avif",
    "./assets/images/eight-spades-playing-card-isolated_1308-78746.avif",
    "./assets/images/three-spades-playing-card-isolated_1308-79269 (1).avif",
    "./assets/images/ace-diamonds-playing-card-isolated_1308-78291.avif"
];

let imageArray5 = [
    "./assets/images/ace-diamonds-playing-card-isolated_1308-78291.avif",
    "./assets/images/two-hearts-playing-card-isolated_1308-78625.avif",
    "./assets/images/eight-spades-playing-card-isolated_1308-78746.avif",
    "./assets/images/ace-diamonds-playing-card-isolated_1308-78990.avif",
    "./assets/images/ace-spades-playing-card-isolated_1308-78560.avif",
    "./assets/images/three-spades-playing-card-isolated_1308-79269 (1).avif"
];

let imageArray6 = [
    "./assets/images/ace-diamonds-playing-card-isolated_1308-78990.avif",
    "./assets/images/three-spades-playing-card-isolated_1308-79269 (1).avif",
    "./assets/images/ace-diamonds-playing-card-isolated_1308-78291.avif",
    "./assets/images/eight-spades-playing-card-isolated_1308-78746.avif",
    "./assets/images/two-hearts-playing-card-isolated_1308-78625.avif",
    "./assets/images/ace-spades-playing-card-isolated_1308-78560.avif"
];

function shufalImages() {
    let store1 = ""
    let store2 = ""
    let store3 = ""
    let store4 = ""
    let store5 = ""
    let store6 = ""
        let remdomimage = Math.floor(Math.random() * imageArray1.length)
       store1 = (imageArray1[remdomimage])
       images1.src = store1

        let remdomimage2 = Math.floor(Math.random() * imageArray2.length)
       store2 = (imageArray2[remdomimage])
       images2.src = store2

        let remdomimage3 = Math.floor(Math.random() * imageArray3.length)
       store3 = (imageArray3[remdomimage])
       images3.src = store3

        let remdomimage4 = Math.floor(Math.random() * imageArray4.length)
       store4 = (imageArray4[remdomimage])
       images4.src = store4

        let remdomimage5 = Math.floor(Math.random() * imageArray5.length)
       store5 = (imageArray5[remdomimage])
       images5.src = store5

        let remdomimage6 = Math.floor(Math.random() * imageArray6.length)
       store6 = (imageArray6[remdomimage])
       images6.src = store6
}