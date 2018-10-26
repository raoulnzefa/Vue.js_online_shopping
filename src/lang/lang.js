import Vue from 'vue'
import VueI18n from 'vue-i18n'
import ru from './data/ru.json'

Vue.use(VueI18n);

const locale = 'ru';
const messages = {
    ru: ru
};

export const i18n = new VueI18n({
    locale,
    messages
});