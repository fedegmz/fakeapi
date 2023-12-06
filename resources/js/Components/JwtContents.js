export default [
  {
    title: 'Autenticación con JWT',
    hr: true,
    subTitle: 'Autenticación',
    description: 'Puedes iniciar sesión enviando un objeto como el siguiente a /auth/login/',
    uri: `[POST] http://127.0.0.1:8001/api/v1/auth/login
        # Cuerpo
        {
          "email": "nico@gmail.com",
          "password": "1234@10129"
        }`,
    code: `
        {
          "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTY3Mjc2NjAyOCwiZXhwIjoxNjc0NDk0MDI4fQ.kCak9sLJr74frSRVQp0_27BY4iBCgQSmoT3vQVWKzJg",
          "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTY3Mjc2NjAyOCwiZXhwIjoxNjcyODAyMDI4fQ.P1_rB3hJ5afwiG4TWXLq6jOAcVJkvQZ2Z-ZZOnQ1dZw"
        }`,
    note: `Nota: El token de acceso es válido por 20 días, y el token de actualización es válido por 10 horas.`
  },
  {
    subTitle: 'Obtener usuario con sesión',
    description: 'Puedes obtener el perfil del usuario actual con la sesión si en los encabezados incluyes la clave Authorization con el valor Bearer {tu token de acceso} a /auth/profile',
    uri: `[GET] http://127.0.0.1:8001/api/v1/auth/profile
    # Encabezados
    {
      "Authorization": "Bearer {tu token de acceso}"
    }`,
    code: `
    {
      "id": 1,
      "email": "john@mail.com",
      "password": "changeme",
      "name": "Jhon",
      "role": "cliente",
      "avatar": "https://api.lorem.space/image/face?w=640&h=480&r=867"
    }`

  },
  {
    subTitle: 'Obtener un nuevo Token de Acceso con un Token de Actualización',
    uri: `[POST] http://127.0.0.1:8001/api/v1/auth/refresh-token
# Cuerpo
{
  "refresh_token": "{tu token de actualización}"
}`,
    code: `
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTY3Mjc2NjAyOCwiZXhwIjoxNjc0NDk0MDI4fQ.kCak9sLJr74frSRVQp0_27BY4iBCgQSmoT3vQVWKzJg",
  "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTY3Mjc2NjAyOCwiZXhwIjoxNjcyODAyMDI4fQ.P1_rB3hJ5afwiG4TWXLq6jOAcVJkvQZ2Z-ZZOnQ1dZw"
}`,
    note: `
# Nota: El token de acceso es válido por 20 días, y el token de actualización es válido por 10 horas.`

  }
];
