# El Rincón del Carmen

Proyecto web desarrollado como plataforma de reservas para un hotel turístico inspirado en interfaces modernas tipo Airbnb.  
La aplicación permite visualizar habitaciones, registrarse, iniciar sesión, agregar favoritos y realizar reservas de manera dinámica utilizando JavaScript y almacenamiento local.

---

# Descripción del proyecto

El proyecto consiste en una página web interactiva para un hotel llamado **El Rincón del Carmen**, donde los usuarios pueden:

- Visualizar habitaciones disponibles.
- Buscar habitaciones por ciudad o nombre.
- Registrarse e iniciar sesión.
- Agregar habitaciones a favoritos.
- Reservar habitaciones.
- Cancelar reservas.
- Ver información de contacto del hotel.
- Acceder a un panel administrativo.
- Gestionar habitaciones del hotel.
- Gestionar reservas de clientes.

Toda la información se administra mediante archivos JSON y `localStorage`, simulando el funcionamiento de una base de datos.

---

# Mockup del proyecto

[Ver mockup en Figma](https://www.figma.com/proto/EPgYkmWFWSIQNpXoxyVz2t/Mockup-Proyecto-JavaScript?node-id=1-844&t=p71IG0A4wGHC26pN-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1)

---

# Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- JSON
- LocalStorage
- Font Awesome

---

# Estructura del proyecto

```bash
proyecto-hotel
│
├── assets
│   ├── data
│   │   ├── habitaciones.json
│   │   └── usuarios.json
│   │
│   └── img
│
├── css
│   └── style.css
│
├── js
│   ├── admin.js
│   ├── auth.js
│   ├── contacto.js
│   ├── database.js
│   ├── favoritos.js
│   ├── index.js
│   ├── navbar.js
│   └── reservas.js
│
├── admin.html
├── contacto.html
├── index.html
├── login.html
├── register.html
└── reservas.html
```

---

# Funcionalidades principales

## Sistema de autenticación

- Registro de usuarios.
- Inicio de sesión.
- Persistencia de sesión con `localStorage`.
- Validaciones en el formulario de registro.
- Restricción de nombres y contraseñas repetidas.

### Validaciones implementadas

- Teléfono mínimo de 10 caracteres.
- Identificación mínima de 10 caracteres.
- Contraseña mínima de 3 caracteres.
- No se permiten correos repetidos.
- No se permiten nombres repetidos.
- No se permiten contraseñas repetidas.

---

## Sistema de favoritos

- Los usuarios pueden guardar habitaciones favoritas.
- Los favoritos se almacenan por usuario mediante `localStorage`.

---

## Sistema de reservas

- Reserva de habitaciones disponibles.
- Cancelación de reservas.
- Validación para permitir una sola reserva activa por usuario.
- Redirección automática desde recomendaciones a la habitación seleccionada.

---

## Panel administrativo

El sistema cuenta con un panel administrativo especial accesible mediante el usuario administrador.

### Funciones del administrador

- Visualizar habitaciones registradas.
- Editar:
  - Precio
  - Cantidad de camas
  - Cantidad máxima de personas
  - Servicios incluidos
- Visualizar reservas activas.
- Cancelar reservas de clientes.

---

## Buscador dinámico

- Filtrado de habitaciones por:
  - Nombre
  - Ciudad

---

## Diseño responsive

El proyecto es compatible con:

- Computadores
- Tablets
- Teléfonos móviles

Incluye:

- Navbar responsive.
- Carruseles adaptables.
- Cards dinámicas responsive.
- Diseño adaptable para formularios y panel administrativo.

---

# Manejo de datos

## habitaciones.json

Contiene:

- Nombre de la habitación.
- Precio.
- Ciudad.
- Servicios.
- Fechas disponibles.
- Imágenes.
- Estado de reserva.
- Cantidad de camas.
- Capacidad máxima de personas.

---

## usuarios.json

Archivo destinado al almacenamiento inicial de usuarios.

Incluye:

- Nombre
- Identificación
- Nacionalidad
- Teléfono
- Correo
- Contraseña
- Favoritos
- Reservas

---

# Diseño e interfaz

La interfaz fue desarrollada con un diseño moderno inspirado en plataformas de reservas como Airbnb, utilizando:

- Cards dinámicas.
- Carruseles de imágenes.
- Navbar responsive.
- Hero banner.
- Formularios estilizados.
- Scroll personalizado.
- Panel administrativo visual.
- Sombras y efectos hover.
- Diseño adaptable a móviles.

---

# Cómo ejecutar el proyecto

1. Descargar o clonar el repositorio.
2. Abrir la carpeta del proyecto en Visual Studio Code.
3. Ejecutar el proyecto con una extensión como **Live Server**.
4. Abrir `index.html` en el navegador.

---

# Páginas del proyecto

## Inicio

Muestra habitaciones recomendadas aleatoriamente y acceso rápido a reservas.

Características:

- Carrusel de imágenes.
- Banner principal.
- Recomendaciones dinámicas.
- Redirección automática a reservas.

---

## Reservas

Catálogo completo de habitaciones con:

- Buscador dinámico.
- Sistema de reservas.
- Favoritos.
- Carruseles de imágenes.

---

## Login

Inicio de sesión de usuarios registrados.

Incluye:

- Validación de credenciales.
- Redirección automática.

---

## Registro

Creación de nuevos usuarios.

Incluye validaciones de:

- Teléfono
- Identificación
- Contraseña
- Usuarios duplicados

---

## Contacto

Información del hotel:

- Dirección
- Número de WhatsApp
- Correo electrónico
- Horarios de atención
- Ubicación mediante mapa

---

## Panel Administrador

Permite:

- Gestionar habitaciones.
- Gestionar reservas.
- Editar información de habitaciones.
- Cancelar reservas.

---

# Persistencia de datos

El proyecto utiliza `localStorage` para:

- Guardar usuarios registrados.
- Mantener sesiones activas.
- Guardar favoritos.
- Administrar reservas.
- Mantener cambios realizados por el administrador.

---

# Usuario administrador

El sistema cuenta con un usuario administrador por defecto.

Correo:
admin@gmail.com

Contraseña:
admin123

Este usuario puede acceder al panel administrativo automáticamente al iniciar sesión.

---

# Autor

**Keynner Sanchez**  
**Santiago Morantes**

Estudiantes de programación y desarrollo de software.

---

# Estado del proyecto

✅ Proyecto funcional  
✅ Responsive  
✅ Manejo dinámico de datos  
✅ Sistema de autenticación  
✅ Sistema de reservas  
✅ Sistema de favoritos  
✅ Panel administrativo  
✅ Persistencia local de información  
✅ Validaciones de formularios  
✅ Compatible con dispositivos móviles