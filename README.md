# FRONT TATOO STUDIO WEB

![alt text](img/foto%20tienda.webp)

### INDICE :open_file_folder:

- [FRONT STUDIO TATOO WEB](#front-tutatoo-web)

  - [OBJETIVO ](#target-dart)
  - [INDICE ](#index-open_file_folder)
  - [TECNOLOGÍAS ](#stack-wrench)
  - [ACERCA DE LA API ](#about-api-blue_book)
  - [DIAGRAMA BD ](#db-diagram-clipboard)
  - [DISEÑO FRONT ](#front-design-computer)
  - [AUTOR ](#author-pencil2)

### OBJETIVO :dart:

El objetivo de este proyecto es diseñar el frontend de un estudio de tatuajes en la cual puedes registrarte, ver los ervicios de dicho estudio y pedir citas.

### INDEX :open_file_folder:

- [FRONT TATOO STUDIO WEB](#front-tutatoo-web)
  - [TARGET :dart:](#target-dart)
  - [INDEX :open_file_folder:](#index-open_file_folder)
  - [STACK :wrench:](#stack-wrench)
  - [ABOUT API :blue_book:](#about-api-blue_book)
  - [DB diagram :clipboard:](#db-diagram-clipboard)
  - [HOW TO DOWNLOAD AND RUN IT :mag:](#how-to-download-and-run-it-mag)
  - [FRONT DESIGN :computer:](#front-design-computer)
  - [AUTHOR :pencil2:](#author-pencil2)
  - [POSSIBLE IMPROVEMENTS :heavy_check_mark:](#possible-improvements-heavy_check_mark)
  - [ACKNOWLEDGEMENTS :raised_hands:](#acknowledgements-raised_hands)

### STACK :wrench:

<img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" /><img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="NODE.JS" /><img src="https://camo.githubusercontent.com/e401a9130accddec63964fc1656e5ef2970017dc65ca6540ab19a40bf6c20064/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6d7973716c2d3345364539333f7374796c653d666f722d7468652d6261646765266c6f676f3d6d7973716c266c6f676f436f6c6f723d7768697465" alt="MySql">
<img src="https://camo.githubusercontent.com/6c3957842901e5baa389f3bb8758c8966683333b28493013062fcab5fab645e7/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f52656163742d3230323332413f7374796c653d666f722d7468652d6261646765266c6f676f3d7265616374266c6f676f436f6c6f723d363144414642" alt="React"><img src="https://img.shields.io/badge/DOCKER-2020BF?style=for-the-badge&logo=docker&logoColor=white" alt="Docker"/><img src="https://camo.githubusercontent.com/0f98e0edc3ae47a19fac8a8679ba0a4f678ed9872c18771cb53f493b21ddaf90/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6a61766173636970742d4546443831443f7374796c653d666f722d7468652d6261646765266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d626c61636b" alt="Javascript"/><img src="https://camo.githubusercontent.com/aac74ca85b21ed1ff4fa88dda8712fce9cddbf786bdf807231e6179f70003ac5/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4a57542d626c61636b3f7374796c653d666f722d7468652d6261646765266c6f676f3d4a534f4e253230776562253230746f6b656e73" alt="JWT">

### SOBRE LA API :

Esta API permite crear usuario y loggearse en la tienda online del estudio de tatuajes. Con las sifuientes funcionalidades

- Registrarte y loggearte como usuario y poder ver los servicios del estudio y las citas que tienes.
- Consultar los servicios del estudio
- Ver y actualizar tu perfil
- Pedir cita para cualquiera de los 5 servicios disponibles
- Ver y borrar tus citas
- El super_admin, puede ver todos los usuarios y borrarlos

### Diagrama BD

![alt text](img/Esquema%20BD.JPG)

### Diseño Front

REGISTRO

![alt text](img/Captura%20vista%20Register.JPG)

En esta vista podremos registrarlos, requiriendo Nombre, Apellidos, email y contraseña

LOGIN

![alt text](img/Captura%20vista%20Login.JPG)

En Login, con las credenciales de email y contrseña que hemos introducido en el Login podremos acceder a nuestra pagina personalizada

PERFIL

![alt text](img/Captura%20vista%20perfil.JPG)

En esta vista tenemos los datos del usuario loggeado pudiendo cambiar datoso como nombre y apellido

MIS CITAS

![alt text](img/Captura%20vista%20%20citas%20usuario.JPG)

En esta vista podremos hacer dos cosas:

- Crear un cita: introducimos fecha y hora y despues el codigo del servicio que queremos contratar.
- Ver y borras las citas ya creadas por nosotros.

SERVICIOS

![alt text](img/Captura%20vista%20Services.JPG)

En esta vista podremos ver los diversos servicios que ofrece nuestro estudio.

USUARIOS(super_admin)

![alt text](img/Captura%20vista%20usuarios.JPG)

A esta vista solo podra acceder el usuario que tenga el rol de Super_admin.
En la que podra ver todos los usuarios registrados y puede borrar dchos usuarios.

## AUTOR

- Fernando Catalá - Full Stack Developer

- <a href="https://github.com/FernandoCatalaMunyoz">GitHub
- <a href="https://linkedin.com/in/fernando-catalá-muñoz-166b5622b">Linkedin</a>

## FUTURAS MEJORAS

- Mejora aspecto de todas las listas que se muestran en la pagina
- Convertir a responsive para poder utilizar en distintos dispositivos
- Crear mensajes informativos cuando algo no se pueda hacer u ocurra algun error.
