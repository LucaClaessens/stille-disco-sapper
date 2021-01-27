import projectLanguage from './projectLanguage';

export default function (object, lang, extractKey) {
    const key = projectLanguage(lang);
    return object[key][extractKey];
};