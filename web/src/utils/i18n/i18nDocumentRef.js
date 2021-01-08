import { baseLanguage, languages } from '../../../../studio/schemas/languages';

/**
 * Formats a document reference to it's international reference doc.
 * If the language is our base language, or a non-implemented language, fall back to the default document.
 * @param {string} docName the name of the document we want to read
 * @param {string} lang the language in which we want to retrieve a reference
 */
export function i18nFormatDocRef(docName, lang) {
    if (lang === baseLanguage.name || !languages.map(l => l.name).includes(lang)) return docName;
    return `i18n.${docName}.${lang}`
};