export default [
  {
    title: 'Productos',
    hr: true,
    subTitle: 'Obtener todos los productos',
    description: 'Puedes acceder a la lista de 200 productos con el endpoint /products',
    style:true,
    uri: '[GET] http://127.0.0.1:8001/api/v1/products',
    code: `
        [
          {
            "id": 4,
            "title": "Handmade Fresh Table",
            "price": 687,
            "description": "Andy shoes are designed to keeping in...",
            "category": {
              "id": 5,
              "name": "Others",
              "image": "https://placeimg.com/640/480/any?r=0.591926261873231"
            },
            "images": [
              "https://placeimg.com/640/480/any?r=0.9178516507833767",
              "https://placeimg.com/640/480/any?r=0.9300320592588625",
              "https://placeimg.com/640/480/any?r=0.8807778235430017"
            ]
          }
          // ...
        ]`
  },
  {
    subTitle: 'Obtener un producto',
    description: 'Puedes acceder a un producto con el endpoint /products/{id}',
    style:true,
    uri: '[GET] http://127.0.0.1:8001/api/v1/products/4',
    code: `
      {
        "id": 4,
        "title": "Handmade Fresh Table",
        "price": 687,
        "description": "Andy shoes are designed to keeping in...",
        "category": {
          "id": 5,
          "name": "Others",
          "image": "https://placeimg.com/640/480/any?r=0.591926261873231"
        },
        "images": [
          "https://placeimg.com/640/480/any?r=0.9178516507833767",
          "https://placeimg.com/640/480/any?r=0.9300320592588625",
          "https://placeimg.com/640/480/any?r=0.8807778235430017"
        ]
      }`
  },
  {
    subTitle: 'Crear un producto',
    description: 'Puedes crear un producto con el endpoint /products',
    uri: `
    [POST] http://127.0.0.1:8001/api/v1/products
    # Body
    {
      "title": "New Product",
      "price": 10,
      "description": "A description",
      "categoryId": 1,
      "images": ["https://placeimg.com/640/480/any"]
    }
    `,
    code: `
    {
      "title": "New Product",
      "price": 10,
      "description": "A description",
      "images": ["https://placeimg.com/640/480/any"],
      "category": {
        "id": 1,
        "name": "Clothes",
        "image": "https://api.lorem.space/image/fashion?w=640&h=480&r=4278",
        "creationAt": "2023-01-03T15:58:58.000Z",
        "updatedAt": "2023-01-03T15:58:58.000Z"
      },
      "id": 210,
      "creationAt": "2023-01-03T16:51:33.000Z",
      "updatedAt": "2023-01-03T16:51:33.000Z"
    }
    `,
    note: 'Ten en cuenta que el campo id de categoría debe ser un ID que exista en /categorías y las imágenes son una matriz con URL.'
  },
  {
    subTitle: 'Actualizar un producto',
    description: 'Puedes actualizar un producto con el endpoint /products/{id}',
    uri: `
    [PUT] http://127.0.0.1:8001/api/v1/products
    # Body
    {
      "title": "Change title",
      "price": 100
    }`,
    code: `
    {
      "id": 1,
      "title": "Change title",
      "price": 100,
      "description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
      "images": ["https://placeimg.com/640/480/any"],
      "creationAt": "2023-01-03T15:58:58.000Z",
      "updatedAt": "2023-01-03T16:54:02.000Z",
      "category": {
        "id": 4,
        "name": "Shoes",
        "image": "https://api.lorem.space/image/shoes?w=640&h=480&r=4508",
        "creationAt": "2023-01-03T15:58:58.000Z",
        "updatedAt": "2023-01-03T15:58:58.000Z"
      }
    }
    `,
    note: 'Tenga en cuenta que no es necesario enviar todos los atributos del producto, sólo envíe los que desea actualizar.'
  },
  {
    subTitle: 'Eliminar un producto',
    description: 'Puedes eliminar un producto con el endpoint /products/{id}',
    uri: '[DELETE] http://127.0.0.1:8001/api/v1/products/1',
    code: `
    {
      "message": "Product deleted successfully"
    }
    `
  }

]