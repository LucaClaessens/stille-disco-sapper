import { baseLanguage, languages } from './languages'

// This is configuration for whole-document translations via sanity-intl plugin
// See https://github.com/LiamMartens/sanity-plugin-intl-input/blob/master/docs/general-configuration.md
export const i18n = {
  base: baseLanguage.name,
  languages,
  referenceBehavior: 'weak',
  messages: {
    loading: 'Loading languages...',
    missing: 'Missing',
    draft: 'Draft',
    publishing: 'Publishing...',
    publish: 'Publish',
    deleteAll: {
      buttonTitle: 'Delete (incl. translations)',
      deleting: 'Deleting...'
    },
    translationsMaintenance: {
      title: 'Translation Maintenance',
      selectSchemaPlaceholder: 'Select schema type',
      oldIdStructure: 'document(s) are using the old ID structure',
      missingLanguageField: 'document(s) are missing the language field',
      missingDocumentRefs: 'document(s) have missing translation references',
      orphanDocuments: 'orphaned translation document(s)',
      fix: 'Fix'
    }
  },
  fieldNames: {
    lang: '_lang',
    references: '_langRefs'
  },
  fields: []
}

export const i18nOptions = {
  i18n: true,
  base: baseLanguage.name,
  languages,
  referenceBehavior: 'weak',
  css: classNames => `${classNames} custom-classname`,
  messages: {
    loading: 'Loading languages...',
    missingTranslations: 'Missing translations message...'
  }
}
