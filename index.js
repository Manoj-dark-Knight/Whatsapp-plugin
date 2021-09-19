var date = new Date();
document.querySelector('span').innerHTML = date;

document.querySelector("button").addEventListener("click", function () {
  var a = document.querySelector("#textbox").value;

  if ( a === "") {
    alert("please enter a number!")
  }else if (a.match(/[a-z,A-Z,!@#$%^&*()_+]/g)) {
    alert("please enter only numeral characters")
    console.log(a.match(/[a-z,A-Z,!@#$%^&*()_+]/g));
  }else if (a.length > 10 | a.length < 10) {
    alert("please enter only 10 numbers")
  }else {
    document.getElementById("buttonAnchor").setAttribute("href", "https://wa.me/91" + a)
  }


})
