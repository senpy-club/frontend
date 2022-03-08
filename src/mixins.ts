import { Options, Vue } from 'vue-class-component';

@Options({})
export default class APIExtendableLanguage extends Vue {
  isLoading = true;

  images: any;

  language = '';

  languages: any;

  random: any;

  private baseUrl = 'https://senpy-club-api-worker.fuwn.workers.dev/v1';

  async fetchImages(): Promise<void> {
    fetch(`${this.baseUrl}/language/${this.language}`, {
      method: 'GET',
      mode: 'no-cors',
    })
      .then((response) => response.json())
      .then((response) => {
        this.images = response;
        this.isLoading = false;
      });
  }

  async fetchLanguages(): Promise<void> {
    fetch(`${this.baseUrl}/languages`, {
      method: 'GET',
      mode: 'no-cors',
    })
      .then((response) => response.json())
      .then((response) => {
        this.languages = response;
        this.isLoading = false;
      });
  }

  async fetchRandom(): Promise<void> {
    fetch(`${this.baseUrl}/random`, {
      method: 'GET',
      mode: 'no-cors',
    })
      .then((response) => response.json())
      .then((response) => {
        this.random = response;
        this.isLoading = false;
      });
  }
}
