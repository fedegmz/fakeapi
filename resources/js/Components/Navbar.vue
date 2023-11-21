

<template>
    <div class="font-sans text-gray-900 dark:text-gray-100 antialiased">
        <div class="pt-4 bg-gray-100 dark:bg-gray-900">
            <div class="min-h-screen pt-6 sm:pt-0">

                <nav class="bg-white border-gray-200 dark:bg-gray-900">
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
                        <a href="https://flowbite.com/" class="flex items-center">
                            <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
                            <span
                                class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                        </a>

                        <div :class="{ 'hidden': !showMenu }" class="w-full" id="navbar-default">
                            <ul
                                class="font-medium flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50  dark:bg-gray-800  dark:border-gray-700">
                                <li>
                                    <NavLink :href="route('introduction')"
                                        class="block w-full py-2 pl-3 pr-4 text-white bg-blue-700 rounded  dark:text-white text-sm">
                                        Introducción
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink :href="route('products')"
                                        class="block w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white">
                                        Productos
                                    </NavLink>

                                </li>
                                <li>
                                    <NavLink :href="route('hi')"
                                        class="block w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white">
                                        Filtro de Productos
                                    </NavLink>

                                </li>
                                <li>
                                    <NavLink :href="route('hi')"
                                        class="block w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white">
                                        Categorias
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink :href="route('hi')"
                                        class="block w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white">
                                        Usuarios
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink :href="route('hi')"
                                        class="block w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white">
                                        Auth JWT
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink :href="route('hi')"
                                        class="block w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white">
                                        Files
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <!-- <div class="content max-w-screen-xl mx-auto p-4" v-html="content"> -->
                <div class="content max-w-screen-xl mx-auto p-4">
                    <ContentComponent v-for="content in contents" :key="content.id" :content="content" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavLink from '@/Components/NavLink.vue';
//   import Prism from 'vue-prismjs'
// import 'prismjs/themes/prism-funky.css'  
// import 'prismjs/themes/prism.css'
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css'; // Cambia el tema según tus preferencias
import 'prismjs/components/prism-json.js'; // Importa el idioma JSON
import ContentComponent from '@/Components/ContentsComponent.vue';



export default {

    props: {
        contents: Array,
    },

    data() {
        return {
            showMenu: false,
            code: 'npm install vue-prismjs --save'
        };
    },
    methods: {
        toggleMenu() {
            this.showMenu = !this.showMenu;
        }
    },

    mounted() {
        window.Prism = window.Prism || {};
        window.Prism.manual = true;
        Prism.highlightAll(); // highlight your code on mount
    },
    components: {
        NavLink,
        ContentComponent
    }
};

</script>
