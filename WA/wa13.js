
function check() {
    console.log('test');
}

function submit() {
    base10 = Math.pow(2,0)*output0.textContent + Math.pow(2,1)*output1.textContent + Math.pow(2,2)*output2.textContent + Math.pow(2,3)*output3.textContent + Math.pow(2,4)*output4.textContent + Math.pow(2,5)*output5.textContent + Math.pow(2,6)*output6.textContent + Math.pow(2,7)*output7.textContent;
    console.log(base10);
    alert('Your volume is now: ' + base10);
}

function reset() {
    bit0 = 0;
    output0.textContent = bit0;
    bit1 = 0;
    output1.textContent = bit1;
    bit2 = 0;
    output2.textContent = bit2;
    bit3 = 0;
    output3.textContent = bit3;
    bit5 = 0;
    output5.textContent = bit5;
    bit7 = 0;
    output7.textContent = bit7;
    bit4 = 0;
    output4.textContent = bit4;
    bit6 = 0;
    output6.textContent = bit6;
}

// function minus() {
//     if (outputInt > 0) {
//     outputInt -=1;
//     output.textContent = outputInt; }
    
// }

// function plus() {
//     if (outputInt < 100) {
//     outputInt +=1;
//     output.textContent = outputInt;
//     }
// }

function random() {
    bit0 = randomNumber(0, 1);
    output0.textContent = bit0;
    bit1 = randomNumber(0, 1);
    output1.textContent = bit1;
    bit2 = randomNumber(0, 1);
    output2.textContent = bit2;
    bit3 = randomNumber(0, 1);
    output3.textContent = bit3;
    bit4 = randomNumber(0, 1);
    output4.textContent = bit4;
    bit5 = randomNumber(0, 1);
    output5.textContent = bit5;
    bit6 = randomNumber(0, 1);
    output6.textContent = bit6;
    bit7 = randomNumber(0, 1);
    output7.textContent = bit7;
}

function randomNumber(min, max) {
    const num = Math.round(Math.random());
    return num;
  }



const output0 = document.querySelector('.output0');
const output1 = document.querySelector('.output1');
const output2 = document.querySelector('.output2');
const output3 = document.querySelector('.output3');
const output4 = document.querySelector('.output4');
const output5 = document.querySelector('.output5');
const output6 = document.querySelector('.output6');
const output7 = document.querySelector('.output7');
let bit0 = parseInt(output0.textContent);
console.log(bit0);
let bit1 = parseInt(output1.textContent);
console.log(bit1);
let bit2 = parseInt(output2.textContent);
console.log(bit2);
let bit3 = parseInt(output3.textContent);
console.log(bit3);
let bit4 = parseInt(output4.textContent);
console.log(bit4);
let bit5 = parseInt(output5.textContent);
console.log(bit5);
let bit6 = parseInt(output6.textContent);
console.log(bit6);
let bit7 = parseInt(output7.textContent);
console.log(bit7);

// const minusButton = document.querySelector('.minus-button').addEventListener('click', minus);
// const plusButton = document.querySelector('.plus-button').addEventListener('click', plus);
const resetButton = document.querySelector('.reset-button').addEventListener('click', reset);
const randomButton = document.querySelector('.random-button').addEventListener('click', random);
const submitButton = document.querySelector('.submit-button').addEventListener('click', submit);


/* const button = document.querySelector('.button');
const output = document.querySelector('.output');
let phone_content = document.querySelector('.phone');

button.addEventListener('click', updateOutput);

function updateOutput() {
    output.textContent = phone_content.value;
    alert(phone_content.value);
}
*/


// var slider = document.getElementById("myRange");
// var sliderSubmit = document.querySelector(".slider-submit-button").addEventListener('click', update);
// var sliderOutput = document.querySelector(".slider-output");


// // Update the current slider value (each time you drag the slider handle)
// function update() {
//   sliderOutput.textContent = slider.value;
// }