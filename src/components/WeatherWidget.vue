<template>
    <div>
        <v-card
            class="mx-auto"
            >
            <v-card-text>
                <p class="display-1 text--primary">{{ weatherData.name }}</p>
                <p>Температура: {{ weatherData.main.temp }}</p>
                <p>Ощущается как: {{ weatherData.main.feels_like }}</p>
                <p>Минимальная: {{ weatherData.main.temp_min }}</p>
                <p>Максимальная: {{ weatherData.main.temp_max }}</p>
                <p>Давление: {{ weatherData.main.pressure }}</p>
                <p>Влажность: {{ weatherData.main.humidity }}</p>
                <p>Состояние: {{ weatherData.weather[0].main }}</p>
                <p>Скорость ветра: {{ weatherData.wind.speed }}</p>
                <p>Направление ветра: {{ weatherData.wind.deg }}</p>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>

export default {
    props: ['weatherData']
}
</script>
