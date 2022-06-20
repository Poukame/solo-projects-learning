const inputValue = document.getElementById('input-value');
inputValue.addEventListener('input', convertion);

// length variable
const lengthOut = document.getElementById('length-output');
const feetToMeter = 0.3048;
const meterToFeet = 3.2808;

// volume variable
const volumeOut = document.getElementById('volume-output');
const literToGal = 3.785;
const galToliter = 0.2642;

// mass variable
const massOut = document.getElementById('mass-output');
const lbsToKg = 0.4536;
const kgToLbs = 2.205;

convertion();

function convertion() {
    const lengthMeter = (inputValue.value * feetToMeter).toFixed(3);
    const lengthFeet = (inputValue.value * meterToFeet).toFixed(3);
    lengthOut.innerHTML = `${inputValue.value} meters = ${lengthFeet} feet | ${inputValue.value} feet = ${lengthMeter} meters`;

    const volumeLiter = (inputValue.value * galToliter).toFixed(3);
    const volumeGallon = (inputValue.value * literToGal).toFixed(3);
    volumeOut.innerHTML = `${inputValue.value} liters = ${volumeLiter} gallons | ${inputValue.value} gallons = ${volumeGallon} liters`;

    const massKilo = (inputValue.value * lbsToKg).toFixed(3);
    const massLbs = (inputValue.value * kgToLbs).toFixed(3);
    massOut.innerHTML = `${inputValue.value} kilos = ${massLbs} pounds | ${inputValue.value} pounds = ${massKilo} kilos`;
}
