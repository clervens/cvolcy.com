import i18next from 'i18next';
import { reactI18nextModule } from 'react-i18next';
import LngDetector from 'i18next-browser-languagedetector';

import LandingPageEN from '../translations/en/LandingPage.json';
import LandingPageFR from '../translations/fr/LandingPage.json';
 
i18next 
    .use(reactI18nextModule)
    .use(LngDetector)
    .init({
        debug: true,
        resources: {
            en: {
                LandingPage: LandingPageEN
            },
            fr: {
                LandingPage: LandingPageFR
            },
        },
        react: {
            wait: true
        },
        detection: {
            order: ['querystring', 'localstorage', 'cookie', 'navigator'],
            lookupQuerystring: 'lng',
            lookupCookie: 'i18n',
            lookupLocalStorage: 'i18n',
            caches: ['localStorage', 'cookie'],
        }
    }, (err, t) => console.log("i18n Ready", err));

export default i18next