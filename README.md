# INSTAFAKE

![alt text](img/redes-sociales-profesionales-1.jpg)

### INDICE :open_file_folder:

- [FRONT STUDIO TATOO WEB](#front-tutatoo-web)

  - [OBJETIVO ](#target-dart)
  - [INDICE ](#index-open_file_folder)
  - [TECNOLOGÍAS ](#stack-wrench)
  - [ACERCA DE LA API ](#about-api-blue_book)
  - [DISEÑO FRONT ](#front-design-computer)
  - [AUTOR ](#author-pencil2)

### OBJETIVO :dart:

El objetivo de este proyecto es diseñar el frontend de una red social en la que podras ver y crear tus posts, asi como los del resto de usuarios de la aplicaion

### STACK :wrench:

<img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" /><img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="NODE.JS" />
<img src="https://camo.githubusercontent.com/6c3957842901e5baa389f3bb8758c8966683333b28493013062fcab5fab645e7/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f52656163742d3230323332413f7374796c653d666f722d7468652d6261646765266c6f676f3d7265616374266c6f676f436f6c6f723d363144414642" alt="React"><img src="https://img.shields.io/badge/DOCKER-2020BF?style=for-the-badge&logo=docker&logoColor=white" alt="Docker"/><img src="https://camo.githubusercontent.com/0f98e0edc3ae47a19fac8a8679ba0a4f678ed9872c18771cb53f493b21ddaf90/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6a61766173636970742d4546443831443f7374796c653d666f722d7468652d6261646765266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d626c61636b" alt="Javascript"/><img src="https://camo.githubusercontent.com/aac74ca85b21ed1ff4fa88dda8712fce9cddbf786bdf807231e6179f70003ac5/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4a57542d626c61636b3f7374796c653d666f722d7468652d6261646765266c6f676f3d4a534f4e253230776562253230746f6b656e73" alt="JWT">

### SOBRE LA API :

Esta API permite crear usuario y loggearse en la aplicacion con las sigueintes funcionalidades

- Registrarte y loggearte como usuario y poder ver los posts generales de la aplicacion.

- Ver y actualizar tu perfil.
- Crear y borrar tus propios posts.
- Dar y quitar likes a los posts.
- Ver un post en detalle.
- El super_admin, puede ver todos los usuarios y posts

### Diseño Front

HOME

![alt text](img/Captura%20Home%20sin%20loggear.JPG)

Vista inicial de la aplicacion sin habernos loggeado aún.

REGISTRO

![alt text](img/Captura%20Register.JPG)

En esta vista podremos registrarlos, requiriendo Nombre, Apellidos, email, nickname y contraseña.

LOGIN

![alt text](img/Captura%20Login.JPG)

En Login, con las credenciales de email y contrseña que hemos introducido en el Login podremos acceder a nuestra pagina personalizada

Credenciales usuario super_admin: - email: fernandocatalamunyoz@gmail.com - contraseña: Aa123456

HOME/LOGGEADO

![alt text](img/Captura%20Home%20Loggeado.JPG)

Vista de nuestro Home ya loggeado en la que podremos ver todos los posts, del mas nuevo al mas antiguo.

PERFIL

![alt text](img/Captura%20Profile.JPG)

En esta vista tenemos los datos del usuario loggeado pudiendo cambiar datoso como nombre , apellido y nickname.

DETALLE

![alt text](img/Captura%20Detalle.JPG)

Vista a la que nos llevara el boton de detalle de un Post en la vista Home(loggeado).

MYPOSTS

![alt text](img/Captura%20MyPosts.JPG)

En esta vista podremos hacer dos cosas:

- Crear un post.
- Ver nuestros posts y poder borrarlos.

ADMIN

![alt text](img/Captura%20Admin.JPG)

En esta vista el usuario con role: super_admin, podra ver todos los posts y todos los usuarios registrados en la aplicacion.

## AUTOR

- Fernando Catalá - Full Stack Developer

- <a href="https://github.com/FernandoCatalaMunyoz">GitHub
- <a href="https://linkedin.com/in/fernando-catalá-muñoz-166b5622b">Linkedin</a>

## FUTURAS MEJORAS

- Añadir la posibilidad de incluir fotos en los posts.
- añadir comentarios en posts.
- Como super_admin, poder borrar usuarios y posts de estos.
- Poder seguir a la gente y que los posts que se vean en Home sean de los usuarios a los que sigues

## BUGS

- Al crear un post no se actualiza la lista de posts automaticamente.
