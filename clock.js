// var hour = document.querySelector(".hours")
// var minute = document.querySelector(".minutes")
// var second = document.querySelector(".seconds")
// console.log(hour);
// console.log(minute);
// console.log(second);
function analog() {
    // console.log("hello");
    // Date  = new Date();
    // hr = Date.getHours();
    // min = Date.getMinutes();
    // sec = Date.getSeconds(); 
    console.log("hello");
    date  = new Date();
    console.log(date)
    hr = date.getHours();
    min = date.getMinutes();
    sec = date.getSeconds(); 

    hr_rotation = (30 * hr) + (min / 2); //converting current time
    min_rotation = 6 * min;
    sec_rotation = 6 * sec;

    document.querySelector(".hours").style.transform = `rotate(${hr_rotation}deg)`;
    document.querySelector(".minutes").style.transform = `rotate(${min_rotation}deg)`;
    document.querySelector(".seconds").style.transform = `rotate(${sec_rotation}deg)`;
}
setInterval(analog,1000);
// analog();

// *********************************************************************************
// setInterval(() => {
//     d = new Date(); //object of date()
//     hr = d.getHours();
//     min = d.getMinutes();
//     sec = d.getSeconds();
//     hr_rotation = 30 * hr + min / 2; //converting current time
//     min_rotation = 6 * min;
//     sec_rotation = 6 * sec;
 
//     hours.style.transform = `rotate(${hr_rotation}deg)`;
//     minutes.style.transform = `rotate(${min_rotation}deg)`;
//     seconds.style.transform = `rotate(${sec_rotation}deg)`;
// }, 1000);