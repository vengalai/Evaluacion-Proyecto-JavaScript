# Funcionamiento del Proyecto  
# El Rincón del Carmen

Este documento explica cómo funciona internamente el proyecto web **El Rincón del Carmen**, detallando la lógica de programación, manejo de datos, funcionamiento de cada módulo y comunicación entre archivos.

---

# Objetivo del proyecto

El objetivo principal del proyecto es simular una plataforma de reservas hoteleras similar a Airbnb, utilizando únicamente tecnologías frontend:

- HTML
- CSS
- JavaScript
- JSON
- LocalStorage

El sistema permite:

- Registrar usuarios.
- Iniciar sesión.
- Visualizar habitaciones.
- Reservar habitaciones.
- Guardar favoritos.
- Administrar habitaciones y reservas.

---

# Arquitectura general del proyecto

El proyecto está dividido en:

```bash
HTML  -> estructura
CSS   -> diseño visual
JS    -> lógica y funcionalidad
JSON  -> datos simulados
```

---

# Flujo general del sistema

El flujo principal funciona así:

```text
JSON → Database.js → LocalStorage → JavaScript → HTML
```

---

# Explicación de la lógica general

## 1. Archivos JSON

Los archivos JSON funcionan como una base de datos inicial.

### habitaciones.json

Contiene todas las habitaciones del hotel.

Cada habitación tiene:

```json
{
    "id": 1,
    "nombre": "Suite Premium",
    "precio": 350000,
    "personas": 2,
    "camas": 1,
    "ciudad": "Bogotá",
    "servicios": [],
    "imagenes": [],
    "reservada": false
}
```

### usuarios.json

Contiene usuarios iniciales.

Ejemplo:

```json
{
    "nombre": "Administrador",
    "email": "admin@gmail.com",
    "password": "admin123"
}
```

---

# 2. database.js

Este archivo es uno de los más importantes.

## Función principal

Carga los archivos JSON y los guarda en `localStorage`.

---

## ¿Por qué se usa localStorage?

Porque:

- Permite guardar datos localmente.
- Mantiene la sesión activa.
- Guarda reservas y favoritos.
- Simula una base de datos.

---

## Flujo interno

### Paso 1

Verifica si ya existe una database guardada.

```js
const databaseGuardada =
JSON.parse(localStorage.getItem("database"));
```

---

### Paso 2

Si no existe:

- Carga `habitaciones.json`
- Carga `usuarios.json`

mediante `fetch()`.

---

### Paso 3

Guarda toda la información en:

```js
localStorage.setItem("database", ...)
```

---

# 3. Sistema de autenticación

Archivo:

```bash
auth.js
```

---

# Registro de usuarios

## ¿Cómo funciona?

Cuando el usuario llena el formulario:

1. Se capturan los datos.
2. Se validan.
3. Se revisa si el usuario ya existe.
4. Se agrega al array de usuarios.
5. Se actualiza el localStorage.

---

# Validaciones implementadas

## Teléfono

```js
telefono.length < 10
```

Debe tener mínimo 10 caracteres.

---

## Identificación

```js
identificacion.length < 10
```

Debe tener mínimo 10 caracteres.

---

## Contraseña

```js
password.length < 3
```

Debe tener mínimo 3 caracteres.

---

## Validación de correo repetido

```js
database.usuarios.find(...)
```

Busca si el correo ya existe.

---

## Validación de nombre repetido

Evita que dos usuarios tengan el mismo nombre.

---

# Inicio de sesión

## Flujo

1. El usuario escribe correo y contraseña.
2. Se busca el usuario en la database.
3. Si coincide:
   - se guarda en `usuarioActivo`
   - se redirecciona.

---

## Usuario activo

Se guarda así:

```js
localStorage.setItem(
    "usuarioActivo",
    JSON.stringify(usuario)
);
```

---

# 4. Navbar dinámica

Archivo:

```bash
navbar.js
```

---

# ¿Qué hace?

La navbar cambia dependiendo si el usuario:

- está logeado
- no está logeado

---

# Sin iniciar sesión

Muestra:

```text
Login | Register
```

---

# Con sesión iniciada

Muestra:

```text
NombreUsuario | Salir
```

---

# Admin

Si el correo es:

```text
admin@gmail.com
```

el sistema redirige automáticamente a:

```text
admin.html
```

---

# 5. Página de inicio

Archivo:

```bash
index.js
```

---

# ¿Qué hace?

Muestra habitaciones recomendadas aleatorias.

---

# Lógica

## Paso 1

Obtiene habitaciones:

```js
database.habitaciones
```

---

## Paso 2

Las mezcla aleatoriamente:

```js
.sort(() => Math.random() - 0.5)
```

---

## Paso 3

Muestra solo 8:

```js
.slice(0,8)
```

---

# Cards dinámicas

Las cards se generan con:

```js
innerHTML +=
```

Esto crea tarjetas automáticamente.

---

# Redirección a reservas

Cuando se hace click en una card:

```html
href="reservas.html?id=${h.id}"
```

---

# 6. Página de reservas

Archivo:

```bash
reservas.js
```

---

# ¿Qué hace?

Muestra el catálogo completo.

---

# Buscador dinámico

El input escucha:

```js
addEventListener("input")
```

---

# Luego filtra:

```js
filter(...)
```

por:

- nombre
- ciudad

---

# Reservar habitación

## Flujo

### Paso 1

Busca el usuario activo.

---

### Paso 2

Verifica si ya tiene reserva.

---

### Paso 3

Marca:

```js
habitacion.reservada = true
```

---

### Paso 4

Guarda la reserva:

```js
usuario.reserva = habitacion.nombre
```

---

### Paso 5

Actualiza localStorage.

---

# Cancelar reserva

Hace lo contrario:

```js
habitacion.reservada = false
```

---

# 7. Favoritos

Archivo:

```bash
favoritos.js
```

---

# ¿Cómo funciona?

Cada usuario tiene:

```js
favoritos: []
```

---

# Al hacer click:

Se agrega el ID de la habitación.

---

# Ejemplo

```js
usuario.favoritos.push(id)
```

---

# Si ya existe

Lo elimina usando:

```js
filter()
```

---

# 8. Carrusel de imágenes

Cada habitación tiene:

```json
"imagenes": []
```

---

# La lógica

El sistema recorre:

```js
imagenes.map(...)
```

y genera imágenes dinámicamente.

---

# Scroll horizontal

El carrusel usa:

```css
overflow-x: auto;
```

---

# 9. Página de contacto

Archivo:

```bash
contacto.html
```

---

# Contiene

- Dirección
- WhatsApp
- Correo
- Horarios
- Mapa

---

# Responsive

En móviles:

- se reorganiza automáticamente
- evita desbordamientos

---

# 10. Panel administrador

Archivo:

```bash
admin.js
```

---

# Acceso

Solo el admin puede entrar.

---

# Validación

```js
if(usuario.email !== "admin@gmail.com")
```

---

# Funciones del admin

## Editar habitaciones

Puede modificar:

- precio
- camas
- personas
- servicios

---

# Eliminar habitaciones

Filtra el array:

```js
filter()
```

---

# Gestionar reservas

Puede:

- ver reservas
- cancelarlas

---

# Cancelar reservas

El admin cambia:

```js
habitacion.reservada = false
```

y elimina:

```js
usuario.reserva = null
```

---

# 11. Responsive Design

El proyecto usa:

```css
@media
```

---

# Objetivo

Adaptar:

- navbar
- cards
- formularios
- panel admin
- contacto

a celulares y tablets.

---

# 12. Sistema de renderizado dinámico

Gran parte del proyecto funciona usando:

```js
innerHTML
```

---

# ¿Qué significa?

Que las tarjetas NO existen en HTML inicialmente.

JavaScript las crea automáticamente leyendo el JSON.

---

# 13. Relación entre archivos

## HTML

Estructura visual.

---

## CSS

Diseño y responsive.

---

## JS

Toda la lógica.

---

## JSON

Datos iniciales.

---

# 14. Lógica general completa

```text
JSON
 ↓
database.js
 ↓
localStorage
 ↓
JS obtiene datos
 ↓
Renderiza HTML dinámicamente
 ↓
Usuario interactúa
 ↓
JS modifica localStorage
 ↓
La interfaz se actualiza
```

---

# 15. Conclusión

El proyecto implementa una simulación completa de una plataforma hotelera moderna utilizando únicamente tecnologías frontend.

El sistema demuestra:

- Manipulación dinámica del DOM.
- Persistencia de datos.
- Manejo de sesiones.
- Programación orientada a eventos.
- Renderizado dinámico.
- Responsive Design.
- Gestión administrativa.
- Uso avanzado de LocalStorage.

Todo el proyecto funciona sin backend real, simulando una aplicación completa únicamente desde el navegador.