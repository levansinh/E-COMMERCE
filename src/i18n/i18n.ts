import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import LAYOUT_EN from '@/locales/en/layout.json';
import COMPONENT_EN from '@/locales/en/component.json';
import PAGE_EN from '@/locales/en/page.json';
import LAYOUT_VI from '@/locales/vi/layout.json';
import COMPONENT_VI from '@/locales/vi/component.json';
import PAGE_VI from '@/locales/vi/page.json';

export const locales = {
  en: 'EN',
  vi: 'VI'
};

const resources = {
  en: {
    layout: LAYOUT_EN,
    component: COMPONENT_EN,
    page: PAGE_EN
  },
  vi: {
    layout: LAYOUT_VI,
    component: COMPONENT_VI,
    page: PAGE_VI
  }
};
const defaultNS = 'home';
i18n.use(initReactI18next).init({
  resources,
  lng: 'vi',
  ns: ['layout', 'component', 'page'],
  defaultNS,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
});
