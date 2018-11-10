function addToCart() {
    var selectedQuantity = inputGroupSelect04.options[inputGroupSelect04.selectedIndex].value;
    window.console.log("selectedQuantity: ", selectedQuantity);
    if (selectedQuantity==1 || selectedQuantity==2 || selectedQuantity==3) {
        document.getElementById("textbox").innerHTML = [selectedQuantity.toString() + " kg cake added to cart!"]; 
    } else {
        document.getElementById("textbox").innerHTML = ""; 
    }
    
  }