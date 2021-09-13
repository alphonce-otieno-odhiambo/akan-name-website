//create a function and call it 

function getAkanName() {
    let yearOfBirh = document.getElementById("yearOfBirh");
    let monthOfBirth = number.getElementById("monthOfBirth").value;
    let dateOfBirth = number.getElementById("dateOfBirth").value;

}
//validating the  function 

function yearValidator() {
    if (yearOfBirh < 1980 || yearOfBirh > 2021) {
        return false;
    } else {
        return true;
    }
}
//month validator
function monthValidator() {
    if (monthOfBirth < 1 || monthOfBirth > 12) {
        return false;
    } else {
        return true;

    }
}
//valiting the Day 
function dayValidator() {
    if (monthOfBirth === 2 && dateOfBirth > 29) {
        return false
    } else if (monthOfBirth === 2 && yearOfBirh % 4 || dateOfBirth > 28) {
        return false
    } else if (monthOfBirth === 2 && dateOfBirth < 1 || dateOfBirth > 29) {
        return false
    } else if (dateOfBirth < 1 || dateOfBirth > 31) {
        return false
    } else {
        return true
    }
}
const yearBirth = yearValidator();
const monthBirth = monthValidator();
const dayBirh = dayValidator();




//accessing the radio box
var genders = document.getElementsByName('gender');
var gender_value;
for (var i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
        gender_value = ganders[i].value;
    }
}
console.log(genders);

document.getElementById('btn').addEventListener("click", getAkanName());




let yGenderAkanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
let xGenderAkanNames = ["Akosua", "Adwoa", "Abena", "Akua", "Yaa", "Afua", "Ama"]
let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

if (gender_value == 'male' && yearBirth && monthBirth && dayBirh) {
    document.getElementById('results').textContent = "you were born on a" + daysOfWeek + "and your Akan name is" + yGenderAkanNames;
    document.getElementById('display-names').textContent = "and your Akan name is:";
    return false;
} else if (gender_value == 'female' && yearBirth && monthBirth && dayBirh) {
    document.getElementById('results').textContent = "you were born on a" + daysOfWeek + "and your Akan name is" + xGenderAkanNames;
    document.getElementById('display-names').textContent = "and your Akan name is:";
    return false;
} else {
    alert("you entered an invalid day or monnth or year, please retry");
}