


//greeting and name input

var username = prompt("Name", "Enter your name ")
var greet = document.getElementById("greeting")
greet.innerHTML = "Welcome " + " " + username


var source = 0
var question1 = document.getElementById("Q1")
var question2 = document.getElementById("Q2")
var question3 = document.getElementById("Q3")
var result = document.getElementById("result")

function check()
{
    var q1 = document.getElementById('1b-c')
    if (q1.checked == 1)
    {
        question1.className+=" green"
        source++
    }
    else
    {
        question1.className+=" red"
    }
    var q1 = document.getElementById('2a-c')
    if (q1.checked == 1)
    {
        question2.className+=" green"
        source++
    }
    else
    {
        question2.className+=" red"
    }
    var q1 = document.getElementById('3d-c')
    if (q1.checked == 1)
    {
        question3.className+=" green"
        source++
    }
    else
    {
        question3.className+=" red"
    }

    result.innerHTML= "Result : " + " " + source + "/3"
}