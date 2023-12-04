 <!-- Componente para mostrar el contenido de la documentación -->
<template>
  <div class="text-lg">
    <h1 class="text-5xl strong" v-if="content.title">{{ content.title }}</h1>
    <hr class="bg-gray-800 my-4" v-if="content.hr">
    <h1 class="text-4xl pt-2">{{ content.subTitle }}</h1>
    <p class="text-gray-300 pt-2" v-html="content.description"></p>

    <p class="text-gray-300 pt-2 pb-2" v-if="content.uri">Request </p>

    <div class="bg-customGray flex flex-row-reverse h-auto" @mouseover="showCopyIconRequest = true" @mouseout="resetIcon" v-if="content.uri">
      <div>
        <button v-show="showCopyIconRequest" class="border-2 border-gray-600 h-7 w-6 mt-2 mr-2" @click="copyCode(content.uri)" title="Copiar contenido">
          <i v-if="copied" class="fa-solid fa-check text-green-400"></i>
          <i v-else class="fa-regular fa-copy text-gray-600"></i>
        </button>
      </div>

      <pre :class="{'h-20': content.style, 'whitespace-pre flex-grow flex justify-start items-center': true}"><code class="language-json">{{ content.uri }}</code></pre>
    </div>

    <p class="text-gray-300 pt-2 pb-2" v-if="content.code">Response: </p>

    <div class="bg-customGray pb-4 flex flex-row-reverse" @mouseover="showCopyIconCode = true" @mouseout="resetIcon" v-if="content.code">
      <button v-show="showCopyIconCode" class="border-2 border-gray-600 h-7 w-6 mt-2 mr-2" @click="copyCode(content.code)" title="Copiar contenido">
        <i v-if="copied" class="fa-solid fa-check text-green-400"></i>
        <i v-else class="fa-regular fa-copy text-gray-600"></i>
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
  props: ['content'],
  //mounted se ejecuta cuando el componente se ha montado en el DOM
  mounted() {
    console.log(this.content.code);
  },
  //methods sirve para definir métodos que se pueden usar en este componente
  methods: {
    async copyCode(code) {
      try {
        await navigator.clipboard.writeText(code);
        this.copied = true;
        setTimeout(() => {
          this.copied = false;
        }, 1000);
      } catch (err) {
        console.error('Error al copiar el código: ', err);
      }
    },
    resetIcon() {
      this.showCopyIconCode = false;
      this.showCopyIconRequest = false;
      this.copied = false;
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