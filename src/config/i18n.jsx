import i18next from 'i18next';
import { reactI18nextModule } from 'react-i18next';
 
i18next 
    .use(reactI18nextModule)
    .init({
        lng: 'en',
        debug: true,
        react: {
            wait: true
        }
    }, (err, t) => console.log("i18n Ready", err));

export default i18next