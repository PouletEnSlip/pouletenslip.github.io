<html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Race Registration</title>
    <link rel="stylesheet" href="style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
    <center><div><b><font color="#300070" size="30" face="Arial">Race Registration</font></b>
    <form action="traitement/" method="POST">
        <p> 
            <b><u><font color="#300070" face="Arial">Please fill in these fields :</u></b><br><br></font>
            <font color="#007000" face="Arial">
            Name : <input class="label" type="text" name="nom" id="champ" style="width: 150px;" pattern="[^0-9]*" required><br><br>
            Firstname : <input class="label" type="text" name="prenom" id="champ" style="width: 150px;" pattern="[^0-9]*" required><br><br>
            Birth : <input class="label" type="date" name="DateEmprunt" required="required" style="width: 150px;" max="<?= date('Y-m-d'); ?>"><br><br>
            License number : <input class="label" type="text" name="licence" placeholder="ex : 59AJc" required pattern="[0-9]{2}[A-Z]{2}[a-z]{1}" style="width: 90px;"><br><br></font>
            <input type="radio" name="radio" value="homme" checked><font color="#5050FF" face="Arial" size="6">♂️
            <input type="radio" name="radio" value="femme">♀️</font>
        </p>
        <br><input type="submit" value="Submit" class="bouton"> <input type="reset" value="Reset" class="bouton"><br><br>
        <a href="./tableau/"><font face="Arial">Table of participants</a></font>
    </form></div>
</body>
</html>
