// Selectors of HTML elements

const charRange = document.getElementById('cAR');
const charNumber = document.getElementById('cAN');
const button = document.getElementById('btn');
const form = document.getElementById('passwordGenForm');
const lowerCase = lowToHigh(97, 122);
const upperCase = lowToHigh(65, 90);
const numbers = lowToHigh(48, 57);
const symbols = lowToHigh(33, 47
    ).concat(lowToHigh(58, 64
        ).concat(lowToHigh(91, 96
            ).concat(lowToHigh(123, 126))));
const includeUpperCase = document.getElementById('includeUppercase');
const includeLowerCase = document.getElementById('includeLowercase');
const includeSymbols = document.getElementById('includeSymbols');
const includeNumbers = document.getElementById('includeNumbers');
const passwordDisplay = document.getElementById('passdisplay');




function lowToHigh(low, high){
    const arry = [];
    for (i = low; i <= high; i++){
        arry.push(i);

    } return arry;
}

charNumber.addEventListener('input', ()=>{
    charRange.value = charNumber.value;
})

charRange.addEventListener('input', ()=>{
    charNumber.value = charRange.value;
})

function generatePassword(){
    var compPass = "";

    for (i= compPass.length;i < charNumber.value; i++){
        if (includeNumbers.checked){
            if (compPass.length < charNumber.value){
                console.log("Numbers", compPass.length, includeNumbers.checked)
                compPass += stringFromCharCode(numbers)
            }}



        if(includeLowerCase.checked){
            if (compPass.length < charNumber.value){
                console.log("Lower", compPass.length)
                compPass += stringFromCharCode(lowerCase)

            }
        }
        if (includeUpperCase.checked){
            if (compPass.length < charNumber.value){
                console.log("Upper", compPass.length)
                compPass += stringFromCharCode(upperCase)
            }

            }
        if (includeSymbols.checked){
            if (compPass.length < charNumber.value){
                console.log("Symbol", compPass.length)
                compPass += stringFromCharCode(symbols)
            }
        

            }}return compPass;
        

    };

button.addEventListener('click', e => {
    e.preventDefault();
    console.log(includeNumbers.checked)
    const newPass = generatePassword();
    console.log(newPass)
    passwordDisplay.innerText = newPass;

    
})

function stringFromCharCode(choiceOfChar){
    return String.fromCharCode(choiceOfChar[Math.floor(Math.random() * choiceOfChar.length)]);
}
