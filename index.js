/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-btn")
let lengthConversion = document.getElementById("length-conversion")
let volumeConversion = document.getElementById("volume-conversion")
let massConversion = document.getElementById("mass-conversion")



convertBtn.addEventListener("click", function() {
    const unitNumber = parseInt(document.getElementById("unit-number").value)
    const metersToFeet = unitNumber * 3.281
    const feetToMeters = unitNumber / 3.281
    const litersToGallons = unitNumber * 0.264
    const gallonsToLiters = unitNumber / 0.264
    const kilosToPounds = unitNumber * 2.204
    const poundsToKilos = unitNumber / 2.204
    lengthConversion.innerHTML = `${unitNumber} meters = ${metersToFeet.toFixed(3)} feet | ${unitNumber} feet = ${feetToMeters.toFixed(3)} meters`
    volumeConversion.innerHTML = `${unitNumber} meters = ${litersToGallons.toFixed(3)} feet | ${unitNumber} feet = ${gallonsToLiters.toFixed(3)} meters`
    massConversion.innerHTML = `${unitNumber} meters = ${kilosToPounds.toFixed(3)} feet | ${unitNumber} feet = ${poundsToKilos.toFixed(3)} meters`    
})