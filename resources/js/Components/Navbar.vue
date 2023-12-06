 <!-- este es el componente de la barra de navegación -->
<template>
    <div class="font-sans text-gray-900 dark:text-gray-100 antialiased">
        <div class="pt-4 bg-gray-100 dark:bg-gray-900">
            <div class="min-h-screen pt-6 sm:pt-0">

                <nav class="bg-white border-gray-200 dark:bg-gray-900 sticky top-0 w-full z-50">
                    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <button @click="toggleMenu" data-collapse-toggle="navbar-default" type="button"
                            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-default" aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                        <a href="#" class="flex items-center">
                            <img :src="logo" class="h-8 mr-3" alt="logo FDV" />
                        </a>

                        <div :class="{ 'hidden': !showMenu }" class="w-full" id="navbar-default">
                            <ul
                                class="font-medium flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50  dark:bg-gray-800  dark:border-gray-700">
                                <li>
                                    <NavLink :href="route(routes.introduction)" 
                                        :class="getNavLinkClass(routes.introduction)">
                                        Introducción
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink :href="route(routes.products)"
                                        :class="getNavLinkClass(routes.products)">
                                        Productos
                                    </NavLink>

                                </li>
                                <li>
                                    <NavLink :href="route(routes.filterproducts)"
                                        :class="getNavLinkClass(routes.filterproducts)">
                                        Filtro de Productos
                                    </NavLink>

                                </li>
                                <li>
                                    <NavLink :href="route(routes.categories)"
                                        :class="getNavLinkClass(routes.categories)">
                                        Categorias
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink :href="route(routes.users)"
                                        :class="getNavLinkClass(routes.users)">
                                        Usuarios
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink :href="route(routes.authjwt)"
                                        :class="getNavLinkClass(routes.authjwt)">
                                        Auth JWT
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink :href="route(routes.files)"
                                        :class="getNavLinkClass(routes.files)">
                                        Files
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <!-- <div class="content max-w-screen-xl mx-auto p-4" v-html="content"> -->
                <div class="content max-w-screen-xl mx-auto p-4">
                    <!-- aqui se renderiza el contenido de la ruta actual que se pasa como prop desde el 
                    componente padre, ya se AuthJwt.vue, Products.vue, etc... culquier componente que use este componente -->
                    <ContentComponent v-for="(content,index) in contents" :key="content.id" :content="content" :index="index" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// importamos los componentes que necesitamos
import NavLink from '@/Components/NavLink.vue';
//   import Prism from 'vue-prismjs'
// import 'prismjs/themes/prism-funky.css'  
// import 'prismjs/themes/prism.css'
import img from '../../assets/img/logo.png';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css'; // Cambia el tema según tus preferencias
import 'prismjs/components/prism-json.js'; // Importa el idioma JSON
import ContentComponent from '@/Components/ContentsComponent.vue';



export default {

    //props sirve para definir propiedades que se pueden usar en este componente y se pueden pasar desde el componente padre
    props: {
        contents: Array,
    },

    //data sirve para definir datos que se pueden usar en este componente
    data() {
        return {
            logo:img,
            showMenu: false,
            code: 'npm install vue-prismjs --save',
            currentUrl: window.location.href,
            routes: {
                
                    introduction: 'introduction',
                    products: 'products',
                    filterproducts: 'filter-products',
                    categories: 'categories',
                    users: 'users',
                    authjwt: 'auth-jwt',
                    files: 'files',            
                }
        };
    },
    //methods sirve para definir métodos que se pueden usar en este componente
    methods: {
        //metodo para mostrar o ocultar el menu
        toggleMenu() {
            this.showMenu = !this.showMenu;
        },
        //obtener la ruta actual y devolver el nombre de la ruta
        getCurrentUrl() {
            let uris = this.currentUrl.split('/');
            let uri = uris[uris.length - 1];
            return uri == '' ? 'introduction' : uri;
        },
        //comprobar si la ruta actual es la misma que la ruta de la barra de navegación actual y devolver la clase de estilo bg-blue-700 junto con otras clases de estilo
        //esta va ligada con la función getCurrentUrl()
        getNavLinkClass(routeName) {
            return {
                'bg-blue-700': this.getCurrentUrl() === routeName,
                'block w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white': true,
            };
        },
    },

    //mounted() se ejecuta cuando el DOM está listo, por lo que es seguro acceder a él en este punto.
    mounted() {
        window.Prism = window.Prism || {};
        window.Prism.manual = true;
        Prism.highlightAll(); // highlight your code on mount
        //console.log(this.getCurrentUrl());
        console.log(this.logo);
    },
    //components sirve para importar componentes para usarlos en este componente
    components: {
        NavLink,
        ContentComponent
    }
};

</script>