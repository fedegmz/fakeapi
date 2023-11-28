export default [
  {
    title: 'Categorías',
    hr: true,
    subTitle: 'Obtener todas las categorías',
    uri: '[GET] http://127.0.0.1:8001/api/v1/categories',
    code: `
    {
      "success": true,
      "status": 200,
      "message": "Categories listed successfully",
      "data": [
        {
          "id": 1,
          "name": "hihihi",
          "image": "https://via.placeholder.com/640x480.png/000088?text=et"
        },
        ...
      ]
    }
    `
  },
  {
    subTitle: 'Obtener una categoría',
    description: 'Puedes obtener una categoría individual agregando el id como parámetro: /categories/<id>',
    uri: '[GET] http://127.0.0.1:8001/api/v1/categories/1',
    code: `
    {
      "success": true,
      "status": 200,
      "message": "Category retrieved successfully",
      "data": {
        "id": 1,
        "name": "hihihi",
        "image": "https://via.placeholder.com/640x480.png/000088?text=et"
      }
    }
    `
  },
  {
    subTitle: 'Crear una categoría',
    description: 'Puedes crear una nueva categoría enviando un objeto como el siguiente a /categories/',
    uri: `
      [POST] http://127.0.0.1:8001/api/v1/categories/
      # Cuerpo
      {
        "name": "Nueva Categoría",
        "image": "https://placeimg.com/640/480/any"
      }`,
    code: `
    {
      "success": true,
      "status": 201,
      "message": "Category created successfully",
      "data": {
        "id": 30,
        "name": "Nueva Categoría",
        "image": "https://placeimg.com/640/480/any"
      }
    }
    `
  },
  {
    subTitle: 'Actualizar una categoría',
    description: 'Puedes actualizar una categoría existente enviando un objeto como el siguiente y agregando el id como parámetro: /categories/<id>',
    uri: `
      [PUT] http://127.0.0.1:8001/api/v1/categories/30
      # Cuerpo
      {
        "name": "Cambiar título"
      }`,
    code: `
    {
      "success": true,
      "status": 200,
      "message": "Category updated successfully",
      "data": {
        "id": 30,
        "name": "Cambiar título",
        "image": "https://placeimg.com/640/480/any"
      }
    }`
  },
  {
    subTitle: 'Eliminar una categoría',
    description: 'Puedes eliminar una categoría existente agregando el id como parámetro: /categories/{id}',
    uri: '[DELETE] http://127.0.0.1:8001/api/v1/categories/1',
    code: `
    {
      "success": true,
      "status": 200,
      "message": "Category deleted successfully",
      "data": null
    }
    `
  },
  {
    subTitle: 'Obtener todos los productos por categoría',
    description: 'Puedes obtener los productos por categoría agregando el categoryID como parámetro a /categories/{categoryID}/products',
    uri: '[GET] http://127.0.0.1:8001/api/v1/categories/1/products',
    code: `
    {
      "success": true,
      "status": 200,
      "message": "Products listed successfully",
      "data": [
        {
          "id": 27,
          "title": "aut voluptatem et",
          "price": "76.87",
          "description": "Consectetur est incidunt et repellendus. Modi similique modi architecto minima vero rerum est. Qui hic laborum consectetur fugit aut eum totam ratione. Amet et consequuntur consequatur pariatur est.",
          "category": {
            "id": 1,
            "name": "hihihi",
            "image": "https://via.placeholder.com/640x480.png/000088?text=et",
            "created_at": "2023-11-21T19:41:04.000000Z",
            "updated_at": "2023-11-23T23:25:19.000000Z"
          },
          "images": [
            "https://via.placeholder.com/640x480.png/005555?text=dolorum",
            "https://via.placeholder.com/640x480.png/008866?text=nisi",
            "https://via.placeholder.com/640x480.png/006688?text=et"
          ]
        }
        // ...
      ]
    }`
  },
  {
    subTitle: 'Esquema de Categoría',
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
          <td class="border border-slate-600">El id de la categoria</td>
        </tr>

        <tr class="bg-customGray">
          <td class="border border-slate-600">name</td>
          <td class="border border-slate-600">string</td>
          <td class="border border-slate-600">El nombre del la categoria</td>
        </tr>

        <tr>
          <td class="border border-slate-600">image</td>
          <td class="border border-slate-600">string</td>
          <td class="border border-slate-600">La url de la imagen</td>
        </tr>
        
      </tbody>
    </table>
  </div>
    `
  }
];
