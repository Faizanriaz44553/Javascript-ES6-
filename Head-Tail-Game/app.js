function HeadTailGame() {
    let para = document.querySelector("#para")
    let para2 = document.querySelector("#para-2")
    let user = document.querySelector("#user")

    let userValue = user.value.toLowerCase()
    let value = ["head" , "tail"]
    let remdomValue = Math.random() * value.length;
    let removeExtraNumber = Math.floor(remdomValue)
    let result = value[removeExtraNumber]

if (userValue === result) {
    para.innerHTML = ("You Win 🤩");
    para2.innerHTML = (`"${result}"`);
    console.log(`You Win ${result}`);
} else if (userValue === "") {
    para.innerHTML = ("Pleas Enter Head & Tail")
    console.log = ("Pleas Enter Head & Tail")
} else {
    para.innerHTML = ("You Lose 😭" );
    para2.innerHTML = (`"${result}"`);
    console.log(`You Lose ${result}`);
}
}