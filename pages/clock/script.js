let clock = document.getElementById('clock');
let dateActuelle = document.getElementById('date');

setInterval(function() {
    let date = new Date();

    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var milli = date.getMilliseconds();
    var ampm = "AM";
    
    if (h == 0) {
        h = 12;
    }
    
    if (h > 12) {
        h = h - 12;
        ampm = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    if (milli < 10) {
        milli = "00" + milli;
    }

    if (milli < 100) {
        milli = "0" + milli;
    }

    clock.innerHTML = h + ":" + m + ":" + s + " " + milli + " " + ampm;

    var day = date.getUTCDate();
    var year = date.getUTCFullYear();

    const jour = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let jourActuel = jour[date.getDay()];

    const mois = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let moisActuel = mois[date.getMonth()];

    dateActuelle.innerHTML = jourActuel + " " + day + " " + moisActuel + " " + year;
})
