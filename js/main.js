// include .html files in markup via <div include-html="./file-path"></div>
(function includeHTML() {

    // loop through a collection of all HTML elements:
    const htmlElementsCollection = document.getElementsByTagName("*");
    for (let i = 0; i < htmlElementsCollection.length; i++) {
        const element = htmlElementsCollection[i];

        // search for elements with a certain atrribute to get its value as the .html file to be included:
        const htmlFile = element.getAttribute("include-html");

        if (htmlFile) {
            const xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) { // 4: request finished and response is ready
                    if (this.status == 200) { element.innerHTML = this.responseText; }
                    if (this.status == 404) { element.innerHTML = "Page not found."; }
                    // remove the attribute, and call this function once more:
                    element.removeAttribute("include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", htmlFile, true);
            xhttp.send();
            return;
        }
    }
})();

// animate navigation-bar's background on scroll event
const toggleNavBackground = function () {
    const nav = document.getElementById('nav-top');
    if (window.scrollY > nav.scrollHeight) {
        nav.classList.add('scrolling');
    } else {
        nav.classList.remove('scrolling');
    }
};

function addToggle() {
    document.addEventListener('scroll', toggleNavBackground);
}

document.addEventListener('DOMContentLoaded', addToggle);

// Shopping cart functionality
function addToCart() {
    var selectedQuantity = inputGroupSelect04.options[inputGroupSelect04.selectedIndex].value;
    window.console.log("selectedQuantity: ", selectedQuantity);
    if (selectedQuantity == 1 || selectedQuantity == 2 || selectedQuantity == 3) {
        document.getElementById("textbox").innerHTML = [selectedQuantity.toString(), " kg cake added to cart!"];
    } else {
        document.getElementById("textbox").innerHTML = "";
    }

}

//  Form validation methods
function validateName() {
    var name = document.getElementById("inputNume").value;
    console.log(name);
    if ((name.length <= 2) || (name.length > 10)) {
        console.log("eroare");
    }
    var pesteZece = document.getElementsByClassName("eroare-peste-10");
    if (name.length > 10) {
        pesteZece[0].classList.remove("d-none");
    } else {
        pesteZece[0].classList.add("d-none")
    }

}

// Bootstrap's validator function for .needs-validation class elements
(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            console.log(form);
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();