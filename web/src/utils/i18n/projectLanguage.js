const map = {
  de: "de_DE",
  de_DE: "de",
  nl: "nl_NL",
  nl_NL: "nl",
  en: "en_GB",
  en_GB: "en",
  // 'fr': 'fr_FR',
  // 'fr_FR': 'fr'
};

/**
 * maps a lang to it's matching code, works both from short <-> long
 * @param {string} lang the lang param coming from our route
 */
export default function (lang, forceReverseLookup) {
  return map[lang] || map[forceReverseLookup ? "en_GB" : "en"];
}
