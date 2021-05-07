<template>
  <h1>{{ $route.params.lang.toLowerCase() }}</h1>

  <template v-if="!isLoading">
    <ul class="image-rack">
      <li v-for="image in images" :key="image" id="image-rack-item">
        <a :href="image"><img :src="image"></a>
      </li>
    </ul>
    <p v-if="images.length == 0">sorry... no images were found for this language...</p>
  </template>
  <p v-else>fetching images...</p>
</template>

<script>
import { mixins, Options } from 'vue-class-component';
import APIExtendableLanguage from '../mixins';

@Options({})
export default class Language extends mixins(APIExtendableLanguage) {
  async mounted() {
    this.language = this.$route.params.lang;
    await this.fetchImages();
  }
}
</script>
