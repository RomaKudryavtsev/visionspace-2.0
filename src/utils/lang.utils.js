import { en } from '@/locales/en';
import { ru } from '@/locales/ru';

export const $t = (key, lang = 'en') => {
    const translations = { en, ru };
    const keys = key.split('.');
    let value = translations[lang];
    for (const k of keys) {
        if (value && k in value) {
            value = value[k];
        } else {
            return key;
        }
    }
    return value;
};