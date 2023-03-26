/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-btn")
const valueInput = document.getElementById("value-input")
const lengthOutput = document.getElementById("length-output")
const volumeOutput = document.getElementById("volume-output")
const massOutput = document.getElementById("mass-output")
let unitValue = ""


convertBtn.addEventListener("click", function(){
    unitValue = valueInput.innerHTML
    lengthOutput.textContent = calculateLength()
    volumeOutput.textContent = calculateVolume()
    massOutput.textContent = calculateMass()
})

function calculateLength() {
    let inFeet = unitValue * 3.281
    let inMeters = unitValue / 3.281
    let finalOutput = `${unitValue} meters = ${inFeet.toFixed(3)} feet | ${unitValue} feet = ${inMeters.toFixed(3)} meters`
    return finalOutput
}

function calculateVolume() {
    let inLitres = unitValue * 0.264
    let inGallons = unitValue / 0.264
    let finalOutput = `${unitValue} litres = ${inLitres.toFixed(3)} gallons | ${unitValue} gallons = ${inGallons.toFixed(3)} litres`
    return finalOutput
}

function calculateMass() {
    let inKilos = unitValue * 2.204
    let inPounds = unitValue / 2.204
    let finalOutput = `${unitValue} kilograms = ${inKilos.toFixed(3)} pounds | ${unitValue} pounds = ${inPounds.toFixed(3)} kilograms`
    return finalOutput
}
