let form = document.getElementById("form")
let age = document.getElementById("age").value;

let display = document.getElementById("display")
let result = document.getElementById("result")
let reset = document.getElementById("reset") 
let gender = document.getElementById("gender").value
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let height = (document.getElementById("height").value)/100;
    let weight = document.getElementById("weight").value
    let bmi = height && weight ? parseFloat(weight / (height * height)).toFixed(2) : 0;
    if (bmi < 16) {
        bmi += ' ' + "Severe Thinness";
    } else if (bmi >= 16 && bmi < 17) {
        bmi += ' ' + "Moderate Thinness";
    }else if (bmi >= 17 && bmi <18.5) {
        bmi += ' ' + "Mild Thinness";
    }else if (bmi >= 18.5 && bmi <25) {
        bmi += ' ' + "Normal";
    }
    else if (bmi >= 25 && bmi <30) {
        bmi += ' ' + "Overweight";
    }
    else if (bmi >= 30 && bmi <35) {
        bmi += ' ' + "Obese class 1";
    }else if (bmi >= 35 && bmi <40) {
        bmi += ' ' + "Obese class 11";
    }else if (bmi >= 40) {
        bmi += ' ' + "Obese class 111";
    }
    result.innerHTML="Result"
    display.innerHTML=bmi
})

reset.addEventListener("click", () => {
    age = "";
    height = "";
    weight = "";
    display.innerHTML = "";
    result.innerHTML = "";
    gender=""
})


