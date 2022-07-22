# Linux Commands Cheat Sheet

## Basic Commands

### List Installed Packages
```console
$ apt list --installed
```

### Update Package Database
```console
$ sudo apt update
```

### Upgrade Installed Packages
```console
$ sudo apt upgrade
```

### Install A Package
```console
$ sudo apt install [package-name]
```

### Reinstall A Package
```console
$ sudo apt reinstall [package-name]
```

### Remove A Package
```console
$ sudo apt remove [package-name]
```
OR
```console
$ sudo apt purge [package-name]
```

### Clean Unused Packages
```console
$ sudo apt autoremove
```

### Create A Directory
```console
$ mkdir [folder-name]
```

### Change Directory
```console
$ cd [directory]
```

## SSH Commands

### Install OpenSSH
```console
$ sudo apt install openssh-client
```

### To Log In
```console
$ ssh username@hostname
```

## MQTT Commands

### Install Mosquitto
```console
$ sudo apt-get install mosquitto
```

### Install Mosquitto-clients
```console
$ sudo apt-get install mosquitto-clients
```

### Start Mosquitto
```console
$ sudo service mosquitto start
```

### Stop Mosquitto
```console
$ sudo service mosquitto stop
```

### Subscribe To Topic
```console
$ mosquitto_sub -h brokerIP -t topicName –v
```

### Publish To Topic
```console
$ mosquitto_pub -h brokerIP -t topicName -m "message"
```