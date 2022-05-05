let clock = document.getElementById('clock');
let dateActuelle = document.getElementById('date');

setInterval(function() {
    let date = new Date();

    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var milli = date.getMilliseconds();
    var ampm = "AM";
    var trucJour = "th";
    
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

    var tempMilli = String(milli).charAt(0);
    var finalMilli = Number(tempMilli);

    clock.innerHTML = h + ":" + m + ":" + s + " " + finalMilli + " " + ampm;

    var day = date.getUTCDate();
    var year = date.getUTCFullYear();

    const jour = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let jourActuel = jour[date.getDay()];

    const mois = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let moisActuel = mois[date.getMonth()];
    
    if (day == 1 || day == 21 || day == 31) {
        trucJour = "st";
    }
    
    if (day == 2 || day == 22) {
        trucJour = "nd";
    }
    
    if (day == 3 || day == 23) {
        trucJour = "rd";
    }

    dateActuelle.innerHTML = jourActuel + ", " + day + trucJour + " " + moisActuel + " " + year;
})
