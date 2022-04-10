<html>
<html lang="fr">
<head>
	<title>Participants</title>
	<meta charset="UTF-8">
	<link href="tableau.css" rel="stylesheet">
	<meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
	<center>
		<font color="#009000" size="20" face="Arial"><b>Participants of the race</b></font><br><br>
		<font face="Arial">
		<?php
			if (file_exists("formulaire.csv") == true) {
				$fichierCsv = fopen("formulaire.csv","r");
				$entete = fgets($fichierCsv);
				$tab_Ligne = str_getcsv($entete,$delimiter=";");
				$tailleTab = count(file("formulaire.csv"));

				printf("<center><div style=\"overflow-x:auto;\"><table>
						<tr><th>$tab_Ligne[0]</th>
						<th>$tab_Ligne[1]</th>
						<th>$tab_Ligne[2]</th>
						<th>$tab_Ligne[3]</th>
						<th>$tab_Ligne[4]</th></tr>");

				while (feof($fichierCsv) == false) {
					$ligne = fgets($fichierCsv);
					$tabLigne = str_getcsv($ligne, $delimiter=";");
					printf("<tr>");
					for ($i=0; $i<5; $i++)
					{
						printf("<td>$tabLigne[$i]</td>");
					}
					printf ("</tr>");
				}
				printf ("</table></div>");
				fclose($fichierCsv);
			}
			else {
				printf ("No participant");
			}
		?>
		</font><a href="../" style="text-decoration:none"><font color="#AA5500" size="10" face="Comic Sans MS">&#x2190;</font></a></center>
</body>
</html>