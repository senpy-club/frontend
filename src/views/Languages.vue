<template>
  <div class="languages">
    <h1>languages</h1>

    <template v-if="!isLoading">
      <ul>
        <li v-for="language in languages" :key="language">
          <a :href="'/language/' + language">{{ language.toLowerCase() }}</a>
        </li>
      </ul>
    </template>
    <p v-else>fetching languages...</p>
  </div>
</template>

<script lang="ts">
import { mixins, Options } from 'vue-class-component';
import APIExtendableLanguage from '../mixins';

@Options({})
export default class Language extends mixins(APIExtendableLanguage) {
  async mounted() { await this.fetchLanguages(); }
}
</script>
