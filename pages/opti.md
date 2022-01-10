---
layout: default
---

Voici des optimisations simples et saines pour un PC sous Windows 10/11. Ces manipulations permettent d'avoir un ordinateur plus rapide, fluide et performant pour la bureautique ou les jeux. Ces optimisations ne sont pas "magiques", je ne promets pas un gain incroyable, la principale optimisation étant d'acheter des composants plus performants.

## Optimisations rapides (à répéter 1 fois par mois environ)

* Supprimer tous les fichiers temporaires (Clic droit sur un disque - Propriétés - Nettoyage)
* Optimiser tous les lecteurs (Clic droit sur un disque - Propriétés - Outils - Optimiser)
* Réparer les fichiers système : `sfc /scannow` (Commande à rentrer dans le Terminal Windows)
* Vider le cache DNS : `ipconfig /flushdns`
* Réparer l’image de Windows : `Dism /Online /Cleanup-Image /RestoreHealth`
* Vérifier que Windows est à jour et qu’il n’y a pas de malware avec [Malwarebytes](https://fr.malwarebytes.com/)
* Mettre le BIOS et les drivers à jour via le site de la carte mère, utiliser [DDU](https://www.guru3d.com/files-details/display-driver-uninstaller-download.html) pour réinstaller proprement les [drivers Nvidia](https://www.nvidia.fr/Download/index.aspx?lang=fr)/[AMD](https://www.amd.com/en/support)

## Optimisations avancées

* Vérifier que votre compte est administrateur, qu’il n’y a pas de caractère spécial dans le nom d’utilisateur (é, à... certains logiciels peuvent mal fonctionner)

* Supprimer les applications Windows que vous n’utilisez pas via [GeekUninstaller](https://geekuninstaller.com/download)

* Désactiver un maximum de programmes qui se lancent au démarrage de Windows (`Ctrl + Maj + Esc` - onglet Démarrage)

* Désactiver l’amélioration de la précision du pointeur de la souris pour être plus précis (Panneau de configuration - Matériels - Souris - Options du pointeur)

* Désactiver la mise en veille prolongée pour libérer de la place sur le lecteur (~3Go) : `powercfg -h off`

* Activer le TRIM pour augmenter la durée de vie du SSD en répartissant les données sur toutes les puces du lecteur, ainsi elles s’abîment moins vite et toutes à la même vitesse : `fsutil behavior set DisableDeleteNotify 0`

* Réduire les ressources CPU réservées pour certains processus Windows : `REG ADD "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\WindowsNT\CurrentVersion\Multimedia\SystemProfile" /v SystemResponsiveness /t REG_DWORD /d 00000010 /f`

* Activer la planification de processeur graphique à accélération matérielle et la fréquence de rafraichissement variable dans les paramètres d’affichage Windows (paramètres activés par défaut sur Windows 11)

* Décocher toutes les cases de l’onglet Confidentialité dans les paramètres Windows pour empêcher Microsoft de collecter vos données personnelles (localisation, contacts...)

* Installer **toutes** les versions de [Visual C++](https://www.techpowerup.com/download/visual-c-redistributable-runtime-package-all-in-one/) pour améliorer la compatibilité des programmes et éviter les erreurs de DLLs manquantes

* Désactiver la Xbox Game Bar et activer le mode jeu dans les paramètres Windows pour allouer plus de ressources matérielles à vos jeux

* Interdire aux applications Windows de tourner en arrière-plan : `REG ADD "HKEY_CURRENT_USER\SOFTWARE\Policies\Microsoft\Windows\AppPrivacy" /v LetAppsRunInBackground /t REG_DWORD /d 00000002 /f`

* Désactiver les résultats Bing dans la Recherche Windows : `REG ADD "HKEY_CURRENT_USER\SOFTWARE\Policies\Microsoft\Windows\Explorer" /v DisableSearchBoxSuggestions /t REG_DWORD /d 00000001 /f`

* Modifier les Options d’alimentation dans le Panneau de configuration : Choisir performances optimales (`powercfg -duplicatescheme
e9a42b02-d5df-448d-aa00-03f14749eb61` pour l’afficher), dans les Paramètres avancés : Arrêter le disque dur après **0min** (jamais), désactiver la suspension sélective USB, état minimal du processeur à 100%

Les deux derniers points sont utiles pour le Gaming uniquement :

* Activer le mode [MSI](https://www.mediafire.com/file/ewpy1p0rr132thk/MSI_util_v3.zip/file) **uniquement** pour la carte graphique et le mettre en *High* pour réduire la latence (il faudra le réactiver après chaque mise à jour des drivers de la carte graphique)

* Modifications du panneau Nvidia (options AMD similaires) : Utiliser les paramètres d’images 3D avancés, activer le mode faible latence, privilégier les performances maximales, activer G-SYNC + V-SYNC + limiter les IPS à 2 en dessous de la fréquence de rafraîchissement de l’écran pour éviter les déchirures d’images, choisir la plage dynamique complète dans les Paramètres des couleurs vidéo avancés

## Optionnel

* [Réinstaller Windows](https://www.youtube.com/watch?v=uHOP4UbEGug) complètement (via clé USB) avant d’appliquer ces optimisations pour partir sur une base saine
* Activer le mode sombre et l’éclairage nocturne le soir pour prévenir la fatigue visuelle dans les paramètres Windows
* Privilégier l’Ethernet au Wi-Fi pour une meilleure connexion Internet et moins de latence
* Préférer [Firefox](https://www.mozilla.org/fr/firefox/new/) à Chrome pour le respect de la vie privée et la personnalisation de l'interface, extension [uBlock Origin](https://addons.mozilla.org/fr/firefox/addon/ublock-origin/) recommandée pour le blocage des publicités et pisteurs
* Désinstaller le lecteur Windows Media et installer [VLC](https://www.videolan.org/index.fr.html) (compatible avec plus de fichiers)
* Utiliser [OpenRGB](https://openrgb.org/releases.html) pour contrôler tout votre matériel RGB compatible via un seul logiciel
* Installer [EqualizerAPO](https://sourceforge.net/projects/equalizerapo/) pour améliorer le rendu sonore, booster les basses et les aigus

## Conclusion

Félicitation ! Votre PC devrait être plus rapide et performant, je recommande une réinstallation de Windows tous les 6 mois en prennant le soin de faire des backups. Je déconseille d'autres manipulations venant d'autres sites qui pourrait endommager le système (désactivation d'anti-virus, HPET, Windows Custom, scripts...).

Made by **PouletEnSlip** © 2022 - All Rights Reserved
