function fnClick() {
    var flipResult = Math.random();
    if (flipResult < 0.5) {
        coin.className = "flipHead";
        document.getElementById("flip").disabled = true;
    } else {
        coin.className = "flipTail";
        document.getElementById("flip").disabled = true;
    }
}