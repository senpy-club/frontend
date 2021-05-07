<template>
  <div class="home">
    <h1>home</h1>

    <div v-if="!isLoading" id="random-image">
      <a :href="random.image">
        <img :src="random.image">
      </a>
    </div>
    <p v-else>
      fetching image...
    </p>

    <p style="white-space: pre-wrap;">hi there, this site is still under construction. if you would
      like to help with anything, feel
      free to!
      <ul>
        <li><a href="https://github.com/senpy-club/api">api</a></li>
        <li><a href="https://github.com/senpy-club/frontend">frontend</a></li>
      </ul>
    </p>
  </div>
</template>

<script>
import { mixins, Options } from 'vue-class-component';
import APIExtendableLanguage from '../mixins';

@Options({})
export default class Language extends mixins(APIExtendableLanguage) {
  async mounted() { await this.fetchRandom(); }
}
</script>
