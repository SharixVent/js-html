function showText(x) {
    const test = document.getElementById(x)
    test.style.visibility = "visible";
}

function hideText(x) {
    const test = document.getElementById(x)
    test.style.visibility = "hidden";
}

function scrollFunction(x) {
    const element = document.getElementById(x);
    element.scrollIntoView({behavior: "smooth"});
}

function hidePopUp() {
    const element = document.getElementById('popup');
    element.style.display = "none";
}

function showPopUp() {
    const element = document.getElementById('popup');
    element.style.display = "block";
}

function checkForm() {
    const element = document.forms["myForm"];
    if(element['fname'].value == "") {
        alert('Wpisz nazwe');
        return false;
    }
    if(element['smak'].value == "") {
        alert('Wpisz smak');
        return false;
    }
    if(element['email'].value == "") {
        alert('Wpisz email');
        return false;
    }
    alert("Wysłano! Dziękujemy za propozycje! 🐱‍🏍")
}