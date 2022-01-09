<head>
  <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico">
  <link href="assets/css/style.css" type="text/css" rel="stylesheet" media="screen,projection">
</head>

<div class="progress-container">
    <div class="progress-bar" id="myBar"></div>
</div> 
  
## My projects

#### [My Minecraft resource pack](pages/cotcotpack.md)

#### [My Windows Optimization Guide (in French)](pages/opti.md)

#### [My Calculator App](https://github.com/PouletEnSlip/Calculator)

#### [My Chronometer App](https://github.com/PouletEnSlip/Chronometer)

#### [My Snake Game](https://github.com/PouletEnSlip/Snake)

<script>
// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
</script>
