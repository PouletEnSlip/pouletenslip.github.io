---
layout: opti
---

<p style="text-align:justify;">Bonjour ! Voici des optimisations simples et saines pour un PC fonctionnant sous Windows 10 et 11. Ces manipulations permettent d'avoir un ordinateur plus fluide et performant pour la bureautique, le montage ou les jeux vidéo. Ces manipulations sont sans risque et peuvent résoudre les lenteurs et crashs de votre PC. Votre ordinateur pourra également démarrer plus vite et lancera des tâches plus rapidement. Ces optimisations ne sont pas "magiques", je ne promets pas un gain incroyable, la principale optimisation étant d'acheter des composants plus performants. Lisez le document en entier avant de faire quoi que ce soit.</p>

## Optimisations rapides (à répéter 1 fois par mois environ)

* Nettoyer tous les lecteurs (Clic droit sur un disque - Propriétés - Nettoyage - Tout cocher)
* Supprimer tous les fichiers temporaires (`Win + R` - taper %temp% - Tout supprimer)
* Supprimer les fichiers de Windows Update **après chaque mise à jour** (C:/Windows/SoftwareDistribution/Download/ - Supprimer tous les dossiers pour éviter des erreurs lors des prochaines mises à jour et gagner un peu d'espace)
* Optimiser tous les lecteurs (Clic droit sur un disque - Propriétés - Outils - Optimiser)
* Réparer les fichiers système : `sfc /scannow`
* Vider le cache DNS : `ipconfig /flushdns`
* Réparer l’image de Windows : `Dism /Online /Cleanup-Image /RestoreHealth`
* Mettre Windows à jour via Windows Update dans les paramètres (n'installez pas de mise à jour via un site Internet douteux)
* Vérifier que vous n'avez pas de virus/malware avec [Malwarebytes](https://fr.malwarebytes.com/)
* Mettre le BIOS et les drivers à jour via le site de votre carte mère (évitez CCleaner, Driverscloud, DriverBooster, TousLesDrivers... ces utilitaires peuvent installer des drivers obsolètes ou non compatibles avec vos composants)
* Utiliser [DDU](https://www.guru3d.com/files-details/display-driver-uninstaller-download.html) et [NVCleanstall](https://www.techpowerup.com/download/techpowerup-nvcleanstall/) pour réinstaller proprement les [drivers Nvidia](https://www.nvidia.fr/Download/index.aspx?lang=fr)/[AMD](https://www.amd.com/en/support). DDU est **indispensable** car il permet de corriger de nombreux bugs/crashs sur vos jeux, utilitaire recommandé par Nvidia eux-mêmes. NVCleanstall permet une installation minimale des drivers avec la possibilité d'activer le Message Signaled Interrupts, dans les tweaks experts, qui offre une communication du GPU plus efficace (paramètre activé par défaut sur les GPU AMD)

## Optimisations avancées

<label class="container">Utiliser [GeekUninstaller](https://geekuninstaller.com/download) pour désinstaller les applications et logiciels que vous n'utilisez pas. Ne désinstallez **surtout pas** Microsoft Edge, le Store, Xbox Game Bar ou autres applications Windows qui ne peuvent pas être désinstallées de base, cela peut créer de gros problèmes !
<input type="checkbox">
<span class="checkmark"></span>

<label class="container">Désactiver un maximum de programmes qui se lancent au démarrage de Windows (`Ctrl + Maj + Esc` - Démarrage)
<input type="checkbox">
<span class="checkmark"></span>

<label class="container">Désactiver l’amélioration de la précision du pointeur de la souris pour être plus précis (Panneau de configuration - Matériels - Souris - Options du pointeur)
<input type="checkbox">
<span class="checkmark"></span>

<label class="container">Désactiver la mise en veille prolongée pour libérer de la place sur le lecteur (~3Go) : `powercfg -h off`
<input type="checkbox">
<span class="checkmark"></span>

<label class="container">Activer le TRIM pour augmenter la durée de vie du SSD en répartissant les données sur toutes les puces du lecteur, ainsi elles s’abîment moins vite et toutes à la même vitesse : `fsutil behavior set DisableDeleteNotify 0`
<input type="checkbox">
<span class="checkmark"></span>

<label class="container">Réduire les ressources du processeur réservées pour certains processus Windows : `REG ADD "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\WindowsNT\CurrentVersion\Multimedia\SystemProfile" /v SystemResponsiveness /t REG_DWORD /d 00000010 /f`
<input type="checkbox">
<span class="checkmark"></span>

<label class="container">Sur un PC avec un GPU Nvidia ou AMD : activer la planification de processeur graphique à accélération matérielle et la fréquence de rafraichissement variable (Paramètres - Système - Affichage - Graphiques - Paramètres graphiques par défaut)
<input type="checkbox">
<span class="checkmark"></span>

<label class="container">Décocher toutes les cases de l’onglet "Confidentialité" dans les paramètres Windows pour limiter la collecte de données personnelles par Microsoft (localisation, contacts...). Notez qu'il est impossible de désactiver totalement la collecte de données. Je déconseille l'utilisation de logiciels comme O&OShutUp ou W10Privacy, ils sont inutiles et peuvent casser le système
<input type="checkbox">
<span class="checkmark"></span>

<label class="container">Installer **toutes** les versions de [Visual C++](https://www.techpowerup.com/download/visual-c-redistributable-runtime-package-all-in-one/) pour améliorer la compatibilité des programmes et éviter les erreurs de DLLs manquantes
<input type="checkbox">
<span class="checkmark"></span>

<label class="container">Désactiver la Xbox Game Bar et activer le mode jeu dans les paramètres Windows (Paramètres - Jeux)
<input type="checkbox">
<span class="checkmark"></span>

<label class="container">Interdire aux applications Windows de tourner en arrière-plan : `REG ADD "HKEY_CURRENT_USER\SOFTWARE\Policies\Microsoft\Windows\AppPrivacy" /v LetAppsRunInBackground /t REG_DWORD /d 00000002 /f`
<input type="checkbox">
<span class="checkmark"></span>

<label class="container">Désactiver les résultats Bing dans la Recherche Windows : `REG ADD "HKEY_CURRENT_USER\SOFTWARE\Policies\Microsoft\Windows\Explorer" /v DisableSearchBoxSuggestions /t REG_DWORD /d 00000001 /f`
<input type="checkbox">
<span class="checkmark"></span>

<label class="container">Remettre l'ancien menu du clic droit de Windows 10 sur Windows 11 : `REG ADD "HKCU\Software\Classes\CLSID\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}\InprocServer32" /f /ve`
<input type="checkbox">
<span class="checkmark"></span>

<label class="container">Modifier les options d’alimentation dans le panneau de configuration : choisir "Performances optimales" (`powercfg -duplicatescheme
e9a42b02-d5df-448d-aa00-03f14749eb61` pour l’afficher). Dans les paramètres avancés : arrêter le disque dur après 0min (jamais), désactiver la suspension sélective USB, état minimal du processeur à 100%
<input type="checkbox">
<span class="checkmark"></span>

<label class="container">Désactiver les services Assistant Compatibilité des programmes, Expériences des utilisateurs connectés et télémétrie, Serveur, Sysmain, Thèmes et Windows Search si vous ne les utilisez pas (`Win + R + services.msc`). **Ne touchez pas aux autres services !** Certains services vont en désactiver d'autres qui vont casser votre système (ex: désactiver le clavier tactile va casser le terminal, etc...)
<input type="checkbox">
<span class="checkmark"></span>

<label class="container">Modifications du panneau Nvidia (options AMD similaires) : sélectionner "Utiliser les paramètres d’images 3D avancés", mettre le mode de faible latence sur "On", privilégier les performances maximales, activer G-SYNC + V-SYNC + limiter les IPS à 2 en dessous de la fréquence de rafraîchissement de l’écran pour éviter les déchirures d’images (écran 144Hz → limite à 142FPS). Si vous activez la V-SYNC dans le panneau Nvidia, il faut la désactiver dans les paramètres du jeu. Choisir la plage dynamique complète et choisir 10bpc (ou plus) si possible. Ces paramètres sont les meilleurs pour quelqu'un qui recherche la meilleure qualité d'image possible avec un impact minime sur la latence. Plus d'infos [ici](https://blurbusters.com/gsync/gsync101-input-lag-tests-and-settings/14/)
<input type="checkbox">
<span class="checkmark"></span>

<label class="container">Overclocker sa carte graphique (Nvidia et AMD) : l'overclocking permet d'augmenter la fréquence d'horloge de la carte graphique et ainsi avoir plus de performances en jeu. Cependant la température de la carte risque d'augmenter. Personnellement j'utilise [Afterburner](https://www.msi.com/Landing/afterburner/graphics-cards) et [Kombustor](https://msikombustor.com/). Tuto disponible [ici](https://www.youtube.com/watch?v=64GJck-GWaM). Dans ce tuto, Unigine Heaven est utilisé, je préfère Kombustor car il permet de scanner le nombre d'artefacts (il faut cocher la case sur l'écran d'accueil et choisir votre résolution native). Un overclocking peut être stable sur Unigine Heaven mais l'ordinateur peut planter sur un jeu plus gourmand en ressources. Un overclocking est considéré comme stable si la température de la carte ne dépasse pas 85°C et que Kombustor ne détecte **aucun** artefact en 10 minutes. Je déconseille l'overclocking du processeur et de la RAM, c'est très fastidieux, le gain est minime et peut déstabiliser la machine
<input type="checkbox">
<span class="checkmark"></span>

## Optionnel

* [Réinstaller Windows](https://www.youtube.com/watch?v=uHOP4UbEGug) complètement (via une clé USB) avant d’appliquer ces optimisations pour partir sur une base saine. Lors de l'installation de Windows, choisir "Non" pour toutes les options, si possible créer un compte local (vous pourrez quand même vous connecter à votre compte Microsoft pour le Store, Office ou Xbox) pour limiter la collecte des données
* Activer le mode sombre et l’éclairage nocturne le soir pour prévenir la fatigue visuelle
* Privilégier l’Ethernet au Wi-Fi pour une meilleure connexion Internet et moins de latence
* Préférer [Firefox](https://www.mozilla.org/fr/firefox/new/) à Chrome pour le respect de la vie privée et la personnalisation de l'interface, extension [uBlock Origin](https://addons.mozilla.org/fr/firefox/addon/ublock-origin/) recommandée pour le blocage des publicités et pisteurs (je déconseille Adblock qui ne bloque pas toutes les pubs et aucun pisteur). Dans les paramètres de Firefox : toujours demander où enregistrer les fichiers, protection stricte, ne pas pister, désactiver la collecte de données, HTTPS uniquement, bloquer les cookies tiers. Plus d'infos sur la protection de la vie privée [ici](https://privacyguides.org/)
* Activer Bitlocker sur la version Pro de Windows pour chiffrer les données du lecteur et sécuriser vos fichiers (Clic droit sur un lecteur - Activer Bitlocker). Il est possible d'activer Bitlocker même sur la version Famille de Windows, à certaines conditions, tuto [ici](https://lecrabeinfo.net/activer-le-chiffrement-de-lappareil-bitlocker-sur-windows-10-famille.html)
* Désinstaller le lecteur Windows Media et installer [VLC](https://www.videolan.org/) pour de meilleures performances
* Installer [7-Zip](https://www.7-zip.org/) pour compresser les fichiers et pouvoir chiffrer les archives. Je déconseille WinRAR qui n'est pas open source, compresse moins bien et chiffre moins efficacement les archives
* Utiliser [OpenRGB](https://openrgb.org/releases.html) pour contrôler tous vos composants RGB via un seul logiciel. Ainsi, on évite les logiciels comme Razer Synapse ou Dragon Center qui consomment énormément de ressources en arrière-plan
* Installer [EqualizerAPO](https://sourceforge.net/projects/equalizerapo/) pour améliorer le rendu sonore, booster les basses et les aigus. Il faut choisir SFX/EFX (expérimental) lors de l'installation. En cas de mise à jour des drivers de la carte son, il faudra reconfigurer EqualizerAPO. Ce logiciel n'a quasiment aucun impact sur les performances

## Conclusion

<p style="text-align:justify;">Voilà ! Votre PC devrait être plus rapide et performant. Je recommande une réinstallation de Windows tous les 6 mois en prenant le soin de faire des sauvegardes. Je déconseille d'autres manipulations venant d'autres sites qui pourraient endommager le système (désactivation Antivirus/HPET/SMT, ISO Windows Custom, TimerResolution, scripts PowerShell, optimiseur de connexion Internet... ce sont très souvent des arnaques).</p>

*Mise à jour : 13/05/2022*
