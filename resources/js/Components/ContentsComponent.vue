 <!-- Componente para mostrar el contenido de la documentación -->
<template>
  <div class="text-lg">
    <h1 class="text-5xl strong" v-if="content.title">{{ content.title }}</h1>
    <hr class="bg-gray-800 my-4" v-if="content.hr">
    <h1 class="text-4xl pt-2">{{ content.subTitle }}</h1>
    <p class="text-gray-300 pt-2" v-html="content.description"></p>

    <p class="text-gray-300 pt-2 pb-2" v-if="content.uri">Request </p>

    <div class="bg-customGray flex h-auto md:flex-row-reverse" @mouseenter="showCopyIconRequest = true" @mouseleave="resetIcon(`btn-${index+1}`)" v-if="content.uri">
      <div>
        <button :class="`border-2 border-gray-600 h-7 w-6 mt-2 mr-2 btn-${index+1} ${!showCopyIconRequest ? 'block md:hidden' : 'block'}`" @click="copyCode(content.uri, `btn-${index+1}`)" title="Copiar contenido">
          <i class="fa-regular fa-copy text-gray-600"></i>
        </button>
      </div>

      <pre :class="{'h-20': content.style, 'whitespace-pre flex-grow flex justify-start items-center': true}"><code class="language-json">{{ content.uri }}</code></pre>
    </div>

    <p class="text-gray-300 pt-2 pb-2" v-if="content.code">Response: </p>

    <div class="bg-customGray pb-4 flex md:flex-row-reverse" @mouseenter="showCopyIconCode = true" @mouseleave="resetIcon(`btn-${index+100}`)" v-if="content.code">
      <button :class="`border-2 border-gray-600 h-7 w-6 mt-2 mr-2 btn-${index+100} ${!showCopyIconCode ? 'block md:hidden' : 'block'}`" @click="copyCode(content.code,`btn-${index+100}`)" title="Copiar contenido">
        <i class="fa-regular fa-copy text-gray-600"></i>
      </button>

      <pre class="whitespace-pre flex-grow">
        <code class="language-json">
              {{ content.code }}
        </code>
      </pre>
    </div>

    <div class="p-4 mt-4 border-l-2 pl-2" v-if="content.note">
      {{ content.note }}
    </div>

    <div class="pt-4" v-if="content.extra" v-html="content.extra">
     
    </div>
  </div>
</template>

<script>
//importamos los componentes que necesitamos
import '@fortawesome/fontawesome-free/css/all.css'

export default {
  // Pasamos el contenido como una prop
  props: ['content', 'index'],
  //mounted se ejecuta cuando el componente se ha montado en el DOM
  mounted() {
    //console.log(this.index);
  },
  //methods sirve para definir métodos que se pueden usar en este componente
  methods: {
    async copyCode(code, btnClass) {
      const element = document.querySelector(`.${btnClass}`);
        if (element) {
          element.innerHTML = '<i class="fa-solid fa-check text-green-400"></i>' ;
        }
      try {
        await navigator.clipboard.writeText(code);
        this.copied = true;
        setTimeout(() => {
          this.copied = false;
          element.innerHTML = '<i class="fa-regular fa-copy text-gray-600"></i>';
        }, 1000);
      } catch (err) {
        console.error('Error al copiar el código: ', err);
      }
    },
    resetIcon(btnClass) {
      this.showCopyIconCode = false;
      this.showCopyIconRequest = false;
      this.copied = false;
      const element = document.querySelector(`.${btnClass}`);
        if (element) {
          element.innerHTML = '<i class="fa-regular fa-copy text-gray-600"></i>' ;
        }
    },
    show(copied, btnClass) {
      
      this.$nextTick(() => {
        const element = document.querySelector(`.${btnClass}`);
        if (element) {
          element.innerHTML = "Copiado";
        }
      });
      
    },
  },
  //data sirve para definir datos que se pueden usar en este componente
  data() {
    return {
      copied: false,
      showCopyIconRequest: false,
      showCopyIconCode: false,
    };
  },
};

</script>