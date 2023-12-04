export default [
  {
    title: 'Archivos',
    hr: true,
    subTitle: 'Subir Archivo',
    description: 'Puedes subir un archivo utilizando el endpoint /files/upload, pero en el encabezado el Content-Type debe ser multipart/form-data.',
    uri: `[POST] http://127.0.0.1:8001/api/v1/files/upload
# Encabezados
{
  "Content-Type": "multipart/form-data"
}

# Cuerpo
{
  "file": "<Archivo Binario>"
}`,
code: `
{
  "originalname": "Djhv7NO - Imgur.png",
  "filename": "f3a5.png",
  "location": "http://127.0.0.1:8001/api/v1/files/f3a5.png"
}`
  },
  {
    subTitle: 'Obtener un Archivo',
    description: 'Puedes obtener un archivo único agregando el nombre del archivo como parámetro: /files/{nombreDelArchivo}',
    uri: '[GET] http://127.0.0.1:8001/api/v1/files/f3a5.png'
  }
];
