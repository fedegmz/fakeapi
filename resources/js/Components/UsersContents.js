export default [
  {
    title: 'Usuarios',
    hr: true,
    subTitle: 'Obtener todos los usuarios',
    uri: '[GET] http://127.0.0.1:8001/api/v1/users',
    code: `
    {
      "success": true,
      "status": 200,
      "message": "Users listed successfully",
      "data": [
        {
          "id": 1,
          "name": "hihihi",
          "email": "test@gmail.com",
          "profile_photo_url": "https://ui-avatars.com/api/?name=h&color=7F9CF5&background=EBF4FF"
        },
        // ...
      ]
    }`
  },
  {
    subTitle: 'Obtener un usuario',
    description: 'Puedes obtener un usuario individual agregando el id como parámetro: /users/{id}',
    uri: '[GET] http://127.0.0.1:8001/api/v1/users/1',
    code: `
    {
      "success": true,
      "status": 200,
      "message": "User retrieved successfully",
      "data": {
        "id": 1,
        "name": "hihihi",
        "email": "test@gmail.com",
        "profile_photo_url": "https://ui-avatars.com/api/?name=h&color=7F9CF5&background=EBF4FF"
      }
    }`
  },
  {
    subTitle: 'Crear un usuario',
    description: 'Puedes crear un nuevo usuario enviando un objeto como el siguiente a /users/',
    uri: `
    [POST] http://127.0.0.1:8001/api/v1/users/
    # Cuerpo
    {
      "name": "Nicolas",
      "email": "nico@gmail.com",
      "password": "1234@10129",
      "password_confirmation":"1234@10129",
      "profile_photo_path": "https://picsum.photos/800"
    }`,
    code: `
    {
      "success": true,
      "status": 201,
      "message": "User created successfully",
      "data": {
        "id": 18,
        "name": "Nicolas",
        "email": "nico@gmail.com",
        "profile_photo_url": "http://localhost/storage/https://picsum.photos/800"
      }
    }
    `
  },
  {
    subTitle: 'Actualizar un usuario',
    description: 'Puedes actualizar un usuario existente enviando un objeto como el siguiente y agregando el id como parámetro: /users/{id}',
    uri: `
    [PUT] http://127.0.0.1:8001/api/v1/users/1
    # Cuerpo
    {
      "email": "john@mail.com",
      "name": "Cambiar nombre"
    }`,
    code: `
    {
      "success": true,
      "status": 200,
      "message": "User updated successfully",
      "data": {
        "id": 18,
        "name": "Cambiar nombre",
        "email": "john@mail.com",
        "profile_photo_url": "http://localhost/storage/https://picsum.photos/800"
      }
    }`
  },
  {
    subTitle: 'Verificar el email',
    description: 'Puedes verificar si un email ya está registrado en la API.',
    uri: `
    [POST] http://127.0.0.1:8001/api/v1/users/is-available
    # Cuerpo
    {
      "email": "john@mail.com"
    }`,
    code: `
    {
      "success": false,
      "status": 400,
      "message": "The email has already been taken."
    }
    `
  },
  {
    subTitle: 'Esquema de Usuario',
    extra: `
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg pt-4">
    <table class="border-collapse border border-slate-800 text-lg">
      <caption class="caption-top">
        Esquema del Producto
      </caption>
      <thead>
        <tr>
          <th class="border border-slate-600">Atributo</th>
          <th class="border border-slate-600">Tipo</th>
          <th class="border border-slate-600">Descripción</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border border-slate-600">id</td>
          <td class="border border-slate-600">number</td>
          <td class="border border-slate-600">El id del usuario</td>
        </tr>

        <tr class="bg-customGray">
          <td class="border border-slate-600">name</td>
          <td class="border border-slate-600">string</td>
          <td class="border border-slate-600">El nombre del usuario</td>
        </tr>

        <tr>
          <td class="border border-slate-600">email</td>
          <td class="border border-slate-600">string</td>
          <td class="border border-slate-600">Es el email correspondiente al usuario</td>
        </tr>

        <tr class="bg-customGray">
          <td class="border border-slate-600">password</td>
          <td class="border border-slate-600">string</td>
          <td class="border border-slate-600">Es la contraseña con la que el usuario iniciara sesión</td>
        </tr>
        
        <tr>
          <td class="border border-slate-600">profile photo url</td>
          <td class="border border-slate-600">string</td>
          <td class="border border-slate-600">Url asociado al perfil de usuario</td>
        </tr>

      </tbody>
    </table>
  </div>
    `
  }
];
