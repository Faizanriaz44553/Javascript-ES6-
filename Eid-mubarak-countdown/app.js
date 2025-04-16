let count1 = document.querySelector("#count1")
let count2 = document.querySelector("#count2")
let count3 = document.querySelector("#count3")
let count4 = document.querySelector("#count4")
function countmines() {
    let EidDate = new Date("2025-2-27 04:02:30")
    console.log(EidDate);
    
    let currentDate = new Date()
    console.log("current date " , currentDate);
    
    let differace = EidDate - currentDate;
    console.log('dono me diffrence' + differace);

    
    let sec = Math.floor(differace / 1000)
    console.log(`second${sec}`);
    
    let min = Math.floor(differace / (1000 * 60))
    let hour =Math.floor(differace / (1000 * 60 * 60))
    let days = Math.floor(differace / (1000 * 60 * 60 * 24))
    if (sec <=0 && hour <= 0 && days <= 0 && min <= 0) {
        count1.innerHTML = (`mubarak ho `)
        count2.innerHTML = (`mubarak ho `)
        count3.innerHTML = (`mubarak ho `)
        count4.innerHTML = (`mubarak ho `)
    }
    count1.innerHTML = (`Second : ${sec}`)
    count2.innerHTML = (`Minutes : ${min}`)
    count3.innerHTML = (`Hour : ${hour}`)
    count4.innerHTML = (`Days : ${days}`)
}

 setInterval(countmines, 1000)

// console.log(cal3);
// console.log(cal4);