---
layout: opti
---

<p style="text-align:justify;">Bonjour ! Voici des optimisations simples et saines pour un PC fonctionnant sous Windows 10 et 11. Ces manipulations permettent d'avoir un ordinateur plus fluide et performant pour la bureautique, le montage ou les jeux vidéo. Ces manipulations sont sans risque et peuvent résoudre les lenteurs et crashs de votre PC. Votre ordinateur pourra également démarrer plus vite et lancera des tâches plus rapidement. Ces optimisations ne sont pas "magiques", je ne promets pas un gain incroyable, la principale optimisation étant d'acheter des composants plus performants. Lisez le document en entier avant de faire quoi que ce soit.</p>

## Optimisations rapides (à répéter 1 fois par mois environ)

Dans l'ordre :
* Vérifier que vous n'avez pas de virus/malware avec [Malwarebytes](https://fr.malwarebytes.com/)
* Supprimer l'historique, le cache et les cookies du navigateur (il faudra se reconnecter aux sites)
* Mettre le BIOS et les drivers à jour via le site de votre carte mère (évitez CCleaner, Driverscloud, DriverBooster, TousLesDrivers... ces utilitaires peuvent installer des drivers obsolètes ou non compatibles avec vos composants)
* Mettre à jour les drivers de votre carte graphique [Nvidia](https://www.nvidia.fr/Download/index.aspx?lang=fr) ou [AMD](https://www.amd.com/en/support), utiliser [DDU](https://www.guru3d.com/files-details/display-driver-uninstaller-download.html) et [NVCleanstall](https://www.techpowerup.com/download/techpowerup-nvcleanstall/) pour mettre à jour les drivers proprement. DDU est **indispensable** car il permet de corriger de nombreux bugs/crashs sur vos jeux, utilitaire recommandé par Nvidia eux-mêmes. NVCleanstall permet une installation minimale des drivers Nvidia, vous pouvez aussi cocher la case Message Signaled Interrupts **uniquement**, dans les tweaks experts, qui offre une communication du GPU plus efficace (paramètre activé par défaut sur les GPU AMD). Je déconseille d'installer Nvidia GeForce Experience qui utilise des ressources en arrière-plan
* Mettre Windows à jour via Windows Update dans les paramètres (n'installez jamais de mise à jour via un site douteux). N'utilisez pas d'ISO customs, comme Ghost Spectre, qui n'améliorent pas les performances et sont dangereux

Une fois que tout est bien à jour et que le PC a été redémarré :
* Supprimer les fichiers de Windows Update **après chaque mise à jour** (C:/Windows/SoftwareDistribution/Download/ - Supprimer tous les dossiers pour éviter des erreurs lors des prochaines mises à jour)
* Supprimer tous les fichiers temporaires (Touches Windows + R - Taper %temp% - Tout supprimer)
* Réparer les fichiers système : `sfc /scannow`
* Vider le cache DNS : `ipconfig /flushdns`
* Réparer l’image de Windows : `Dism /Online /Cleanup-Image /RestoreHealth`
* Réinitialiser le cache des icônes avec mon [script](https://github.com/PouletEnSlip/ResetIconCache)
* Nettoyer tous les lecteurs (Clic droit sur un lecteur - Propriétés - Nettoyage - Nettoyer les fichiers système - Tout cocher)
* Optimiser tous les lecteurs (Clic droit sur un lecteur - Propriétés - Outils - Optimiser)

Pensez à éteindre votre ordinateur la nuit, ne le mettez pas en veille pour prévenir des bugs du système. Nettoyer aussi régulièrement votre PC de la poussière pour éviter aux composants de trop chauffer et donc de perdre des performances.

## Optimisations avancées (permanentes)
  
<input type="checkbox" class="check-with-label"><label class="label-for-check">Désinstaller un maximum d'applications Windows et logiciels que vous n'utilisez pas (Menu démarrer - Clic droit sur un programme - Désinstaller)</label>

<input type="checkbox" class="check-with-label"><label class="label-for-check">Désactiver un maximum de programmes qui se lancent au démarrage de Windows (Touches Ctrl + Maj + Esc - Démarrage)</label>
  
<input type="checkbox" class="check-with-label"><label class="label-for-check">Désactiver Cortana : `REG ADD "HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows\Windows Search" /v AllowCortana /t REG_DWORD /d 00000000 /f` - Redémarrer le PC | Pour annuler : `REG ADD "HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows\Windows Search" /v AllowCortana /t REG_DWORD /d 00000001 /f`</label>
  
<input type="checkbox" class="check-with-label"><label class="label-for-check">Désactiver les Widgets sur Windows 11 : `REG ADD "HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Dsh" /v AllowNewsAndInterests /t REG_DWORD /d 00000000 /f` - Redémarrer le PC | Pour annuler : `REG DELETE "HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Dsh" /v AllowNewsAndInterests /f`</label>
  
<input type="checkbox" class="check-with-label"><label class="label-for-check">Désactiver l’amélioration de la précision du pointeur de la souris pour être plus précis (Panneau de configuration - Matériels - Souris - Options du pointeur)</label>
  
<input type="checkbox" class="check-with-label"><label class="label-for-check">Désactiver la mise en veille prolongée (hibernation) pour libérer de la place sur le lecteur (~3Go) et faire en sorte que le PC s'éteigne complètement quand vous l'éteignez, avec ces deux commandes : `REG ADD "HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Session Manager\Power" /v HiberbootEnabled /t REG_DWORD /d 00000000 /f` + `powercfg -h off` - Redémarrer le PC | Pour annuler : `REG ADD "HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Session Manager\Power" /v HiberbootEnabled /t REG_DWORD /d 00000001 /f` + `powercfg -h on`</label>
  
<input type="checkbox" class="check-with-label"><label class="label-for-check">Réduire les ressources du processeur réservées pour certains processus Windows : `REG ADD "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\WindowsNT\CurrentVersion\Multimedia\SystemProfile" /v SystemResponsiveness /t REG_DWORD /d 00000010 /f` - Redémarrer le PC | Pour annuler : `REG ADD "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\WindowsNT\CurrentVersion\Multimedia\SystemProfile" /v SystemResponsiveness /t REG_DWORD /d 00000020 /f`</label>
  
<input type="checkbox" class="check-with-label"><label class="label-for-check">Décocher **toutes les cases de chaque onglet** de la section "Confidentialité" dans les paramètres Windows pour limiter la collecte de données personnelles par Microsoft (localisation, contacts...). Notez qu'il est impossible de désactiver totalement la collecte de données. Je déconseille l'utilisation de logiciels comme O&OShutUp ou W10Privacy, ils ne font rien de mieux et peuvent casser le système</label>
  
<input type="checkbox" class="check-with-label"><label class="label-for-check">Installer **toutes** les versions de [Visual C++](https://www.techpowerup.com/download/visual-c-redistributable-runtime-package-all-in-one/) pour améliorer la compatibilité des programmes et éviter les erreurs de DLLs manquantes</label>
  
<input type="checkbox" class="check-with-label"><label class="label-for-check">Désactiver la Xbox Game Bar, avec ces trois commandes : `Get-AppxPackage Microsoft.XboxGamingOverlay | Remove-AppxPackage` + `REG ADD "HKEY_CURRENT_USER\SOFTWARE\Microsoft\Windows\CurrentVersion\GameDVR" /v AppCaptureEnabled /t REG_DWORD /d 00000000 /f` + `REG ADD "HKEY_CURRENT_USER\System\GameConfigStore" /v GameDVR_Enabled /t REG_DWORD /d 00000000 /f` - Redémarrer le PC | Pour annuler : `Get-AppxPackage -allusers *Microsoft.XboxGamingOverlay* | Foreach {Add-AppxPackage -DisableDevelopmentMode -Register “$($_.InstallLocation)\AppXManifest.xml”}` + `REG ADD "HKEY_CURRENT_USER\SOFTWARE\Microsoft\Windows\CurrentVersion\GameDVR" /v AppCaptureEnabled /t REG_DWORD /d 00000001 /f` + `REG ADD "HKEY_CURRENT_USER\System\GameConfigStore" /v GameDVR_Enabled /t REG_DWORD /d 00000001 /f`</label>
  
<input type="checkbox" class="check-with-label"><label class="label-for-check">Désactiver l'optimisation de la distribution dans les paramètres Windows (Paramètres - Windows Update - Options avancées - Optimisation de la distribution)</label>
  
<input type="checkbox" class="check-with-label"><label class="label-for-check">Désactiver les résultats Bing dans la Recherche Windows : `REG ADD "HKEY_CURRENT_USER\SOFTWARE\Policies\Microsoft\Windows\Explorer" /v DisableSearchBoxSuggestions /t REG_DWORD /d 00000001 /f` - Redémarrer le PC | Pour annuler : `REG ADD "HKEY_CURRENT_USER\SOFTWARE\Policies\Microsoft\Windows\Explorer" /v DisableSearchBoxSuggestions /t REG_DWORD /d 00000000 /f`</label>
  
<input type="checkbox" class="check-with-label"><label class="label-for-check">Remettre l'ancien menu du clic droit de Windows 10 sur Windows 11 : `REG ADD "HKCU\Software\Classes\CLSID\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}\InprocServer32" /f /ve` - Redémarrer le PC | Pour annuler : `REG DELETE "HKCU\Software\Classes\CLSID\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}" /f`</label>
  
<input type="checkbox" class="check-with-label"><label class="label-for-check">Désactiver les services "Expériences des utilisateurs connectés et télémétrie" et "Sysmain" **uniquement** (Touche Windows + R - Taper "services.msc")</label>

<input type="checkbox" class="check-with-label"><label class="label-for-check">**Modifier les options d’alimentation dans le panneau de configuration :** CPU Intel → choisir "Performances élevées" | CPU AMD Ryzen 1000, 2000, 3000 et 4000 → choisir "AMD Ryzen Balanced" | CPU AMD Ryzen 5000 → choisir "Utilisation normale". Dans les paramètres avancés : arrêter le disque dur après 0min (jamais) et désactiver la suspension sélective USB</label>

<input type="checkbox" class="check-with-label"><label class="label-for-check">**Modifications du panneau Nvidia (options AMD similaires) :** sélectionner "Utiliser les paramètres d’images 3D avancés", mettre le mode de faible latence sur "On", privilégier les performances maximales, activer G-SYNC + V-SYNC + limiter les IPS à 2 en dessous de la fréquence de rafraîchissement de l’écran pour éviter les déchirures d’images (écran 144Hz → limite à 142FPS). Si vous activez la V-SYNC dans le panneau Nvidia, il faut la désactiver dans les paramètres du jeu. Choisir la plage dynamique complète et choisir 10bpc (ou plus) si possible. Ces paramètres sont les meilleurs pour quelqu'un qui recherche la meilleure qualité d'image possible avec un impact négligeable sur la latence</label>
  
<input type="checkbox" class="check-with-label"><label class="label-for-check">**Overclocker sa carte graphique (Nvidia et AMD) :** l'overclocking permet d'augmenter la fréquence d'horloge de la carte graphique et ainsi avoir plus de performances en jeu. Cependant la température de la carte risque d'augmenter. Personnellement j'utilise [Afterburner](https://www.msi.com/Landing/afterburner/graphics-cards) et [Kombustor](https://msikombustor.com/). Dans [ce tuto](https://www.youtube.com/watch?v=64GJck-GWaM), Unigine Heaven est utilisé, je préfère Kombustor car il permet de scanner le nombre d'artefacts (il faut cocher la case sur l'écran d'accueil et choisir votre résolution native). Un overclocking peut être stable sur Unigine Heaven mais l'ordinateur peut planter sur un jeu plus gourmand en ressources. Un overclocking est considéré comme stable si la température de la carte ne dépasse pas 85°C et que Kombustor ne détecte **aucun** artefact en 10 minutes. Je déconseille l'overclocking du processeur et de la RAM, c'est très fastidieux, le gain est minime et peut déstabiliser la machine</label>

## Optionnel

* [Réinstaller Windows](https://www.youtube.com/watch?v=uHOP4UbEGug) complètement (via une clé USB) avant d’appliquer ces optimisations pour partir sur une base saine. Lors de l'installation de Windows, choisir "Non" pour toutes les options et créer un compte local pour limiter la collecte de données (vous pourrez quand même vous connecter à votre compte Microsoft pour le Store, Office, Xbox ou autres services Microsoft)
* Activer le mode sombre dans les paramètres Windows, l’éclairage nocturne le soir et installer [DarkReader](https://darkreader.org/) pour que tous les sites visités soient en mode sombre pour prévenir la fatigue visuelle
* Privilégier l’Ethernet au Wi-Fi pour une meilleure connexion Internet et moins de latence
* Préférer [Firefox](https://www.mozilla.org/fr/firefox/new/) à Chrome pour le respect de la vie privée et la personnalisation de l'interface, extension [uBlock Origin](https://addons.mozilla.org/fr/firefox/addon/ublock-origin/) recommandée pour le blocage des publicités et pisteurs (je déconseille Adblock qui ne bloque pas toutes les pubs et aucun pisteur). Dans les paramètres de Firefox : toujours demander où enregistrer les fichiers, protection stricte, désactiver la collecte de données, HTTPS uniquement, bloquer les cookies tiers
* Activer Bitlocker sur la version Pro de Windows pour chiffrer les données du lecteur et sécuriser vos fichiers (Clic droit sur un lecteur - Activer Bitlocker). Il est possible d'activer Bitlocker sur la version Famille de Windows, à certaines conditions, tuto disponible [ici](https://lecrabeinfo.net/activer-le-chiffrement-de-lappareil-bitlocker-sur-windows-10-famille.html)
* Désinstaller le lecteur Windows Media et installer [VLC](https://www.videolan.org/) pour de meilleures performances
* Installer [7-Zip](https://www.7-zip.org/) pour compresser les fichiers et pouvoir chiffrer les archives. Je déconseille WinRAR qui n'est pas open source, compresse moins bien et chiffre moins efficacement les archives
* Utiliser [Hat.sh](https://hat.sh/) pour chiffrer vos documents sensibles avec mot de passe côté client
* Si vous souhaitez un VPN gratuit, [ProtonVPN](https://protonvpn.com/fr/) est le meilleur choix. Evitez tous les autres VPN gratuits qui vont voler vos données personnelles
* Utiliser [OpenRGB](https://gitlab.com/CalcProgrammer1/OpenRGB) pour contrôler tous vos composants RGB via un seul logiciel. Ainsi, on évite les logiciels comme Razer Synapse ou Dragon Center qui consomment énormément de ressources en arrière-plan
* Installer [EqualizerAPO](https://sourceforge.net/projects/equalizerapo/) pour améliorer le rendu sonore, booster les basses et les aigus. Il faut choisir SFX/EFX (expérimental) lors de l'installation. En cas de mise à jour des drivers de la carte son, il faudra reconfigurer EqualizerAPO. Ce logiciel n'a quasiment aucun impact sur les performances

## Conclusion

<p style="text-align:justify;">Voilà ! Votre PC devrait être plus rapide et performant. Je recommande une réinstallation de Windows tous les 6 mois en prenant le soin de faire des sauvegardes. Je déconseille d'autres manipulations venant d'autres sites qui pourraient endommager le système (scripts PowerShell, optimiseur de connexion Internet... ce sont très souvent des arnaques).</p>

### Sources
[Discord Entraide Informatique](https://discord.gg/WMsR7dT) | [Piwi](https://github.com/Piwielle) | [BlurBusters](https://blurbusters.com/) | [PrivacyGuides](https://privacyguides.org/)

*Mise à jour : 07/06/2022*
