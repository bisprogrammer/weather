import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

import ru from 'vuetify/es5/locale/ru'
import en from 'vuetify/es5/locale/en'

let appRu = {
    localeSelectLabel: "Язык",
    citiesSelectLabel: "Список городов",
    cityInputLabel: "Название города",
    noCity: "Нет такого города",
    getCityWeather: "Получить",
    required: "Поле оязательно для заполнения"
}

let appEn = {
    localeSelectLabel: "Language",
    citiesSelectLabel: "List of cities",
    cityInputLabel: "City name",
    noCity: "There is no such city",
    getCityWeather: "Get",
    required: "This field is required"
}

ru.app = appRu;
en.app = appEn;

export default new Vuetify({
    lang: {
        locales: { ru, en },
        current: 'ru',
    },
});
