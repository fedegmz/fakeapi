
<script setup>
//importamos los componentes que necesitamos
import JwtContents from '@/Components/JwtContents';
import Navbar from '@/Components/Navbar.vue';
import { Head } from '@inertiajs/vue3';

defineProps({
  policy: String,
});
</script>

<!--  Pasamos los componentes como props -->
<template>
  <!--  Pasamos el título como una prop -->
  <Head title="Auth Jwt" />
  <!--  Pasamos el contenido como una prop -->
  <Navbar :contents="contents" /> <!-- Pasamos HTML como una prop -->
</template>

<script>
//importamos los componentes que necesitamos
export default {

  // Pasamos el contenido como una prop
  data() {
    return {
      contents: JwtContents,
    };
  }
};
</script>