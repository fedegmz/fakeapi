<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

# FAKEAPISTORE

## Descripción

Este proyecto fue inspirado en la platzi fake api, con la finalidad de aplicar mis conocimientos, en los apartados de creación de api, creando asi sus respectivos endpoint, relaciones tanto a nivel tabla, como a nivel modelo, creación de presentación para el consumo y respuesta del servicio.

## Tecnologías Utilizadas

- PHP 8.1.10
- Node.js v18.17.1
- Laravel x
- Vue.js 3.2.31

## Configuración Inicial

1. **Clonar el Repositorio:**

   ```bash
   git clone https://github.com/tu-usuario/nombre-del-repo.git
   cd nombre-del-repo
2. **Configurar el Entorno::**
    - Copia el archivo .env.example y renómbralo a .env.
    - Modifica el archivo .env:
    
    ```bash
    APP_KEY=base64:ugOu/maJxKNix6PUjuXUqoghkR29KXQ/HZQkzsx3VXM=
    # Agrega al final del archivo
    JWT_SECRET_KEY="TOPSECRET1023"
3. **Base de Datos:**
    - Crea una base de datos con el nombre fakestoreapi.

4. **Instalar Dependencias:**
    ```bash
    composer install   # Instala las dependencias de Laravel
    npm install        # Instala las dependencias de Node.js

5. **Migraciones y Seeder**
    ```bash
    php artisan migrate --seed  # Realiza todas las migraciones y genera los seeder

6. **Compilar recursos de Vue.js:**
    ```bash
    npm run dev   # Compila los archivos Vue.js
7. **Iniciar Servidor de Desarrollo:**
    ```bash
    php artisan serve   # Inicia la aplicación en http://localhost:8000

#### ¡Listo! La aplicación debería estar funcionando. Abre tu navegador y visita la URL proporcionada.