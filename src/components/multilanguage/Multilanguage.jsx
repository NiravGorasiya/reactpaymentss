import React from 'react'
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
//import HttpApi from 'i18next-http-backend';
//import LanguageDetector from 'i18next-browser-languagedetector';
import tfr from "../../localses/fr/transaltion.json";
import ten from "../../localses/en/transaltion.json";

const Multilanguage = () => {
    i18n
        .use(initReactI18next)
        //.use(HttpApi)
        //.use(LanguageDetector)
        .init({
            resources: {
                en: {
                    translation: ten
                },
                fr: {
                    translation: tfr
                }
            },
            //          order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
            lng: "en",
            fallbackLng: "en",

            interpolation: {
                escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
            }
        });

    const changelange = (data) => {
        return () => {
            alert();
        }
    }
    const { t } = useTranslation()
    return (
        <div>
            <h2>{t('Welcome_to_React')}</h2>
            <button onClick={changelange("en")}>English</button>
            <button onClick={changelange("fr")}>France</button>
        </div>
    )
}

export default Multilanguage