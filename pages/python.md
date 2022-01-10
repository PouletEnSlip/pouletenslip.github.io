---
layout: default
---

### Mes programmes en Python
#### [Retour](../index.md)

##### Nmap Command
```nmap -p 1883 --script mqtt-subscribe ip```

#### Script en python qui fait office de simple client Mqtt, il s'abonne à tous les topics existant sur le broker et vous retourne les informations. (Connexion anonyme, sans mot de passe)

[Iot-MQTT-Exploit-Documentation](https://github.com/Warflop/IOT-MQTT-Exploit)

```python
import paho.mqtt.client as mqtt

# Callback function
def on_connect(client,userdata,flags,rc):
	# Susbscribe on create topic
	client.subscribe('#', qos=1)
	# All Topics :
	# client.subscribe('$SYS/#')
	# Callback function

def on_message(client,userdata,message):
	print(f"Topic : {message.topic}, QOS : {message.qos}, Message : {message.payload}")

	
def main():
	HOST = input("host (default 127.0.0.1) : ")
	PORT = input("port (default 1883) : ")

	# Set default value
	if PORT == "" and HOST == "":
		HOST = "127.0.0.1"
		PORT = 1883
	
		
client = mqtt.Client()
# -- CALL BACK FUNCTIONS -- #
client.on_connect = on_connect
client.on_message = on_message
client.connect(HOST,PORT)

print(f"Listen on {HOST} : {PORT}")

client.loop_forever()

if __name__ == '__main__':
	main()
```

___