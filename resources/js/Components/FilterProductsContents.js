//export info
export default [
    {
        title: 'Filtrado de productos',
        hr: true,
        subTitle: 'Filtrar por titulo',
        description: 'Al utilizar el endpoint /products/search y pasar el título como parámetro de consulta, puede filtrar productos por título',
        uri: '[GET] http://127.0.0.1:8001/api/v1/products/search?title=titulo_a_buscar'
    },
    {
        subTitle: 'Filtrar por precio',
        description: 'Al utilizar el endpoint /products/search y pasar el precio como parámetro de consulta, puede filtrar productos por precio.',
        uri: '[GET] http://127.0.0.1:8001/api/v1/products/search?price=262.25'
    },
    {
        subTitle: 'Filtrar por categoría',
        description: 'Al utilizar el endpoint /products/search y pasar la categoría como parámetro de consulta, puede filtrar productos por categoría.',
        uri: '[GET] http://127.0.0.1:8001/api/v1/products/search?categoryId=1'
    },
    {
        subTitle : 'Unión de filtros',
        description: `<p>Puede filtrar productos utilizando todos los parámetros de consulta y fusionarlos todos.</p>
        <p class="pt-4">Por ejemplo: Todos los productos con un precio entre 900 y 1000, con el titulo "example" y categoria con id 2.</p>
        `,
        uri: '[GET] http://127.0.0.1:8001/api/v1/products/search?title=qui et voluptatum&price_min=100&price_max=700&categoryId=2'
    },
    {
        description: `Por ejemplo: Todos los productos con un precio entre 900 y 1000, con el titulo "example" y categoria con id 2, con un limite de 10 productos.`,
        uri: '[GET] http://127.0.0.1:8001/api/v1/products/search?price_min=900&price_max=1000&categoryId=2&offset=1&limit=10'
    },
    {
        description: 'Por ejemplo: Todos los productos con un precio entre 100 y 1000 con un limite de 10 productos.',
        uri: '[GET] http://127.0.0.1:8001/api/v1/products/search?price_min=100&price_max=1000&offset=1&limit=10'
    }
]