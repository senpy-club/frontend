import { Options, Vue } from 'vue-class-component';

@Options({})
export default class APIExtendableLanguage extends Vue {
  isLoading = true;

  images: any;

  language = '';

  languages: any;

  random: any;

  async fetchImages(): Promise<void> {
    fetch(`http://localhost/api/v1/language?lang=${this.language}`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => {
        this.images = response;
        this.isLoading = false;
      });
  }

  async fetchLanguages(): Promise<void> {
    fetch('http://localhost/api/v1/languages', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => {
        this.languages = response;
        this.isLoading = false;
      });
  }

  async fetchRandom(): Promise<void> {
    fetch('http://localhost/api/v1/random', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => {
        this.random = response;
        this.isLoading = false;
      });
  }
}
