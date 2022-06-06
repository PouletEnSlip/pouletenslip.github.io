function fnClick() {
    var flipResult = Math.floor(Math.random() * 10);
    if (flipResult < 5) {
        coin.className = "flipHead";
        document.getElementById("flip").disabled = true;
    } else {
        coin.className = "flipTail";
        document.getElementById("flip").disabled = true;
    }
}