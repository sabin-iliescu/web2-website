$(document).ready(function () {
    var html = `<!-- navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top" id="nav-top">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
    
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="contact.html">Contact</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="carousel.html">carousel</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="products.html">Products</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="cake.html">Cakes</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="faq.html">FAQ</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        Dropdown
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#">Disabled</a>
                </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    </nav>
    <!-- navbar ends here -->`;
    $('#navbar').append(html);
});

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

function addToCart() {
    var selectedQuantity = inputGroupSelect04.options[inputGroupSelect04.selectedIndex].value;
    window.console.log("selectedQuantity: ", selectedQuantity);
    if (selectedQuantity == 1 || selectedQuantity == 2 || selectedQuantity == 3) {
        document.getElementById("textbox").innerHTML = [selectedQuantity.toString(), " kg cake added to cart!"];
    } else {
        document.getElementById("textbox").innerHTML = "";
    }

}
