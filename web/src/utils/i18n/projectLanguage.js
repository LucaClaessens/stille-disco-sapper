const map = {
    'de': 'de_DE',
    'nl': 'nl_NL',
    'en': 'en_GB',
    'fr': 'fr_FR'
};

/**
 * maps a lang to it's matching code
 * @param {string} lang the lang param coming from our route
 */
export default function (lang) {
    return map[lang] || map['en'];
};