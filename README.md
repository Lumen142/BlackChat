
![Logo](https://cdn.discordapp.com/attachments/1361790971138019494/1409091906360840302/Yeni_Proje.png?ex=68ac1e9a&is=68aacd1a&hm=e87babdcde46eb6e8754abdd1de561901545507830bf50158476ca220f972fc0&)

    
# BlackChat

BlackChat is free software that allows you to create private servers via the terminal and engage in private text-based chat.

You can log into servers belonging to people you trust and start chatting right away. Or you can create your own server, share the port with others, and allow them to join your servers. :)




## Usage

#### ClientSide

```javascript
  node client.js
```

It tells you to be careful when accessing other people's servers. It will also ask you a question: “IP & Port? :”.

IP: The IP address of the target server. (Example: 192.168.0.2)
Port: The port address of the target server. (Example: 3000)

Let's write an example answer:

`http://192.168.0.2:3000/` -->> Example.

#### ServerSide

```javascript
  node server.js
```

You will be asked the question “Port?” You can enter the empty ports on your device. If you are not running a website, etc., your port number “3000” should be empty.


  
## Technologies Used

**Client:** socket.io-client

**Server:** express, http, socket.io

  
## FAQ

#### Does it run on Linux?

The software has only been tested on Ubuntu, but it should work on all other Linux distributions.

#### Is it compatible with Windows?

It has not been tested. However, if NodeJS is installed, it should work on your computer.

#### Are you getting an error?

Attention! Please download NodeJS. If you encounter an error, download the technologies used in the project even if they are already installed. :)

  