<html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Registration</title>
    <link rel="stylesheet" href="./style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
    <center>
    <div>
        <b><font color="#009000" size="30" face="Comic Sans MS">Registration</font></b><br><br>
        <font face="Arial">
        <?php
            $nom = strip_tags($_POST ["nom"]);
            $nom = ucfirst($nom);
            $prenom = strip_tags($_POST ["prenom"]);
            $prenom = ucfirst($prenom); 
            $jour = $_POST ["jour"];
            $mois = $_POST ["mois"];
            $numeroMois = $_POST ["numeroMois"];
            $annee = $_POST ["annee"];
            $jourActuel = date("d");
            $moisActuel = date("m");
            $anneeActuel = date("Y");
            $dossard = count(file("../tableau/formulaire.csv"));
            $licence = strip_tags($_POST ["licence"]);

            printf ("Name/Firstname : ".$nom." ".$prenom."<br>");
            printf ("Date of birth : ".$jour." ".$mois." ".$annee."<br>");
            printf ("License number : ".$dossard."<br>");
            printf ("Bib number : ".$licence."<br><br><br><br>");
            
            $fichierCSV = fopen ("../tableau/formulaire.csv", "a"); 
            fwrite ($fichierCSV,"\n".$nom.";".$prenom.";".$jour." ".$mois." ".$annee.";".$licence.";".$dossard.";");
            fclose ($fichierCSV);
            echo '<font style="color:#005000; font-size:30; font-family:Impact">'."<p><b>Vous êtes inscrit...<br>Registration completed !</p></b>".'</font>';
        ?>
        </font>
        <a href="../" style="text-decoration:none"><font color="#300070" size="10" face="Comic Sans MS">&#x2190;</font></a></center>
    </div>
</body>
</html>