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
  },
  {
    subTitle: 'Paginación',
    description: `<p>Las API que utilizan paginación basada en desplazamiento utilizan los parámetros de consulta de desplazamiento y límite para paginar los elementos de una colección.</p>
                  <p class="pt-2">La paginación basada en desplazamiento se utiliza a menudo cuando la lista de elementos tiene una longitud fija y predeterminada.</p>
                  <p class="pt-2"> Para recuperar la primera página de entradas de una colección, se debe llamar a la API con el desplazamiento establecido en 0 y limitar los productos que desea en la respuesta.</p>`,
    uri: '[GET] http://127.0.0.1:8001/api/v1/products?offset=0&limit=10',
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
      },
      //.. and 9 items more
    ]`,
    extra: `<p> Para recuperar la siguiente página de entradas, se debe llamar a la API con un parámetro de compensación que sea igual a la suma del valor de compensación anterior y el límite devuelto al resultado anterior.</p>

            <p class="pt-2">Para obtener la siguiente página de entradas, utilice un parámetro de compensación igual a la suma del valor de compensación anterior y el límite devuelto al resultado anterior, previous_offset + previous_limit.</p>

      <div class="bg-customGray">
        <pre class="whitespace-pre"><code class="language-json">[GET] https://api.escuelajs.co/api/v1/products?offset=10&limit=10</code></pre>
      </div>

      <div class="p-4 mt-4 border-l-2 pl-2" v-if="content.note">
      Tenga en cuenta que el desplazamiento debe aumentarse según el límite anterior y no según el tamaño de las entradas en la matriz de respuesta, ya que este puede ser menor que el límite. Generalmente, recomendamos utilizar el valor del límite en el objeto de respuesta para aumentar el valor de compensación.
    </div>

    <div class="relative overflow-x-auto shadow-md sm:rounded-lg pt-4">
      <table class="border-collapse  border border-slate-800 text-lg">
        <caption class="caption-top">
          Por ejemplo, para una paginación con 10 elementos por página, se ve así:
        </caption>
        <thead>
          <tr>
            <th class="border border-slate-600">Petición</th>
            <th class="border border-slate-600">Respuesta</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-slate-600">GET /products?<strong>offset=0&limit=10</strong></td>
            <td class="border border-slate-600">Devuelve los primeros 10 productos</td>
          </tr>

          <tr class="bg-customGray">
            <td class="border border-slate-600">GET /products?<strong>offset=10&limit=10<strong></td>
            <td class="border border-slate-600">Devolución de productos del 10 al 20</td>
          </tr>

          <tr>
            <td class="border border-slate-600">GET /products?<strong>offset=20&limit=10<strong></td>
            <td class="border border-slate-600">Devolución de productos del 20 al 30</td>
          </tr>

        </tbody>
      <table>
    </div>

    <div class="relative overflow-x-auto shadow-md sm:rounded-lg pt-4">
      <table class="border-collapse border border-slate-800 text-lg">
        <caption class="caption-top">
          Por ejemplo, para una paginación con 20 elementos por página, se ve así:
        </caption>
        <thead>
          <tr>
            <th class="border border-slate-600">Petición</th>
            <th class="border border-slate-600">Respuesta</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-slate-600">GET /products?<strong>offset=0&limit=20</strong></td>
            <td class="border border-slate-600">Devuelve los primeros 20 productos</td>
          </tr>

          <tr class="bg-customGray">
            <td class="border border-slate-600">GET /products?<strong>offset=20&limit=20</strong></td>
            <td class="border border-slate-600">Devuelve los productos del 20 al 40</td>
          </tr>

          <tr>
            <td class="border border-slate-600">GET /products?<strong>offset=40&limit=20</strong></td>
            <td class="border border-slate-600">Devuelve los productos del 40 al 60</td>
          </tr>

        </tbody>
      </table>
    </div>

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
            <td class="border border-slate-600">El id del producto</td>
          </tr>

          <tr class="bg-customGray">
            <td class="border border-slate-600">title</td>
            <td class="border border-slate-600">string</td>
            <td class="border border-slate-600">El nombre del producto</td>
          </tr>

          <tr>
            <td class="border border-slate-600">price</td>
            <td class="border border-slate-600">number</td>
            <td class="border border-slate-600">Precio del producto</td>
          </tr>

          <tr class="bg-customGray">
            <td class="border border-slate-600">description</td>
            <td class="border border-slate-600">string</td>
            <td class="border border-slate-600">Descripción del producto</td>
          </tr>

          <tr>
            <td class="border border-slate-600">category</td>
            <td class="border border-slate-600">number</td>
            <td class="border border-slate-600">Objeto de categoría</td>
          </tr>

          <tr class="bg-customGray">
            <td class="border border-slate-600">images</td>
            <td class="border border-slate-600">string[]</td>
            <td class="border border-slate-600">Lista de imágenes como URLs</td>
          </tr>

        </tbody>
      </table>
    </div>
    `
  }

]