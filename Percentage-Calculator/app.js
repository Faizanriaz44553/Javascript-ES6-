function result() {
    let user1 = document.querySelector("#user1")
let user2 = document.querySelector("#user2")
let generate = document.querySelector("#heading")
    generate.innerHTML = ""
let user1value1 = user1.value
let user1value2 = user2.value
if (user1value1 === "" || user1value2 === "") {
    alert("Please enter both numbers")
} else {
    for (let i = 1; i <= user1value1; i++) {
        let result =(`${user1value2} * ${i} = ${user1value2*i}\n`)
        generate.innerHTML += (result)} 
}
}