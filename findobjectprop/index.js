// create object
const myObj = {
    "synth": "moog",
    "guitar": "fender",
    "drums": "ludwig"
}
// Create funciton using hasOwnProperty method to locate property 
function findObjectProp(locateProp) {

    if (myObj.hasOwnProperty(locateProp)) {
        return myObj[locateProp]
    } else {
        return "Not Found!"
    }
}
// Print value of found property/key
console.log(findObjectProp("synth"))
console.log(findObjectProp('drums'))
console.log(findObjectProp("Ukelele"))