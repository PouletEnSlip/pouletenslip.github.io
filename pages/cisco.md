---
layout: default
---

### Memento Cisco : Switch & Routeur
#### [Retour](../index.md)

#### Commandes : 
- **En mettant ``do`` devant la commande on peut "bypass" les différents modes** 
- Mode "privilégié" : ``en`` ou ``enable``
- Mode configuration : ``configure terminal`` ou ``conf t``
- Changer le nom d'un routeur ou d'un switch (en mode conf t): ``hostname nom`` 
- Afficher la configuration actuelle (en mode privilégié): ``show run``
- Redémarrage (Switch&Routeur) en mode privilégié: ``reload``  
- Ajouter un mot de passe pour se connecter au switch (config-line avec ``line con 0``): ``password mdp``
- Ajouter un mot de passe pour se connecter en mode privilégié (config) : ``enable secret mdp``
	- enable secret mdp => mdp pour le mode privilégié
	- password mdp => mdp pour se connecter au switch
- Enregistrer une configuration dans mémoire non volatile (NVRAM): ``write memory`` ou ``write mem``
- Retirer la recheche DNS : ``no ip domain lookup``

### Enregistrer dans un fichier de configuration : 
- **startup-config** : configuration *utilisée* au démarrage du switch.
- **running-config** : configuration *courante* utilisée par le switch. 
- **Enregistrement** de la **config courante** dans la config de **démarrage du switch/routeur** : `copy running-config startup-config` ou `co ru st`

### Désactivation d'un service : 
- Passer le service ``password-encryption`` en OFF (en mode config) : ``no password-encryption`` 

### Configurer un accès ssh switch & routeur :
- Modifier le nom (cf plus haut)
- Vérification de l'état du service (#) : ``show ip ssh``
- Application d'un nom de domaine (config):
	- ``conf t``
	- ``ip domain-name mondomaine.local`` (ex : *ip domaine-name had.local*)
	- Génération de la clé en config : 
		-   ``crypto key generate rsa general-keys modulus 1024``
	- Création d'un utilisateur avec mdp (en secret 5) :
		- username : had & password secret : test 
		-   ``username had secret test``
 	- Autorsation du nombre de machines : 
		-   ``line vty 0 4`` : on accorde 5 connexions SSH 
		-   ``login-local`` : Cherche les utilisateurs dans la configuration ssh