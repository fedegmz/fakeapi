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
                                    <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded  dark:text-white"
                                        aria-current="page">Home</a>
                                </li>
                                <li>
                                    <a href="#"
                                        class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white">About</a>
                                </li>
                                <li>
                                    <a href="#"
                                        class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white">Services</a>
                                </li>
                                <li>
                                    <a href="#"
                                        class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white">Pricing</a>
                                </li>
                                <li>
                                    <a href="#"
                                        class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
        </div>
    </div>
    <pre>
        <code class="language-json">
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
            ]
    </code></pre>

</template>

<script>
//   import Prism from 'vue-prismjs'
// import 'prismjs/themes/prism-funky.css'  
// import 'prismjs/themes/prism.css'
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css'; // Cambia el tema según tus preferencias
import 'prismjs/components/prism-json.js'; // Importa el idioma JSON

  
export default {
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
  }

};

</script>
