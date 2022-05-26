/* eslint-disable import/no-anonymous-default-export */
const supportedLanguages = [
  { id: "fr", title: "Français", isDefault: true },
  { id: "en", title: "English" },

  // Add as many languages as you need to support
];

export default {
  name: "localeString",
  type: "object",
  fieldsets: [
    {
      title: "Traduction",
      name: "traduction",
      options: { collapsible: true },
    },
  ],
  fields: supportedLanguages.map((lang) => ({
    title: lang.title,
    name: lang.id,
    type: "string",
    fieldset: lang.isDefault ? null : "traduction",
  })),
};
