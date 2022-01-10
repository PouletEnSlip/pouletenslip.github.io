---
layout: default
---

### MySQL Memento

#### [Retour](../index.md)


### Connexion au service :
`````bash
mysql -u [username] -p;
`````

### Lister les BDD :
````bash
show databases;
````

### Sélectionner une BDD :
````bash
select database();
````

### Afficher toutes les tables d'une BDD :
````bash
show tables;
````

### Lister les index d'une table :
````bash
show index from [table];
````
[Source](https://gist.github.com/hofmannsven/9164408)