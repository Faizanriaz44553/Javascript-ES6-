const change = document.querySelector('#change')
const long = ("change through js to uppercase")
const short = ("change through js to lowercase")
function upercase() {
    change.innerHTML = (long.toUpperCase())
    
}
function lowercase() {
    change.innerHTML = (short.toLowerCase())
    
}
function length() {
    change.innerHTML = (short.length())
    
}
function charAt() {
    change.innerHTML = (short.charAt())
    
}
function charCodeAt() {
    change.innerHTML = (short.charCodeAt())
    
}
function codePointAt() {
    change.innerHTML = (short.codePointAt())
    
}
function concat() {
    change.innerHTML = (short.concat())
    
}
function endsWith() {
    change.innerHTML = (short.endsWith())
    
}
function includes() {
    change.innerHTML = (short.includes())
    
}