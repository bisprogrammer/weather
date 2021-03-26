<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row>
          <v-col class="col-12">
            <v-select
              v-model="selectedLocale"
              :items="locales"
              :label="$vuetify.lang.t('$vuetify.app.localeSelectLabel')"
            ></v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            cols="4"
            v-if="cities.length"
          >
            <v-select
              v-model="selectedCity"
              :items="cities"
              :label="$vuetify.lang.t('$vuetify.app.citiesSelectLabel')"
              item-text="name"
              item-value="id"
              return-object
            ></v-select>
          </v-col>
          <v-col
            cols="4"
          >
            <v-text-field
              :label="$vuetify.lang.t('$vuetify.app.cityInputLabel')"
              :rules="[rules.required]"
              :error="error"
              :error-messages="error ? $vuetify.lang.t('$vuetify.app.noCity') : ''"
              v-model="city"
            ></v-text-field>
          </v-col>
          <v-col
            cols="4"
          >
            <v-btn color="primary" :disabled="!city" @click="getWeather">{{$vuetify.lang.t('$vuetify.app.getCityWeather')}}</v-btn>
          </v-col>
        </v-row>
        <WeatherWidget v-if="weatherData.name" :weatherData="weatherData" />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import WeatherWidget from "./components/WeatherWidget";

export default {
  name: 'App',
  data() {
    return {
      city: "",
      cities: JSON.parse(localStorage.getItem("cities") || "[]"),
      selectedCity: null,
      rules: {
        required: value => !!value || this.$vuetify.lang.t('$vuetify.app.required')
      },
      weatherData: {},
      error: false,
      locales: ['ru', 'en'],
      selectedLocale: 'ru',
      label: "Язык"
    }
  },

  components: {
    WeatherWidget
  },

  methods: {
    async getWeather() {
      this.error = false;
      this.weatherData = {};
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=84e2a9ad0b2bca1922b23252454cc8a2`;
      const res = await fetch(url);
      if (res.ok) {
        this.weatherData = await res.json();
        if (!this.cities.find(city => city.id === this.weatherData.id)) {
          this.cities.push({
            name: this.city,
            id: this.weatherData.id,
          });
        }
      }
      else {
        this.error = true;
      }
    }
  },

  beforeMount() {
    window.addEventListener('beforeunload', () => {
      localStorage.setItem("cities", JSON.stringify(this.cities));
    });
  },

  watch: {
    selectedCity(newCity) {
      this.city = newCity.name;
    },
    selectedLocale(newLocal) {
      this.$vuetify.lang.current = newLocal;
      console.log(this.$vuetify);
    }
  }
};
</script>
