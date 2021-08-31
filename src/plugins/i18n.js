import Vue from 'vue';
import VueI18n from 'vue-i18n';
Vue.use(VueI18n);

const messages = {
    'vn': {
        aboutUs: 'Về chúng tôi',
        games: 'Trò chơi',
        partners: 'Đối tác',
        contactUs: 'Liên hệ'
    },
    'en': {
        aboutUs: 'About Us',
        games: 'Games',
        partners: 'Partners',
        contactUs: 'Contact Us'
    }
};

export const i18n = new VueI18n({
    locale: 'vn', // set locale
    fallbackLocale: 'vn', // set fallback locale
    messages, // set locale messages
});

