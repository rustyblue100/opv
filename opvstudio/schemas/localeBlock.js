/* eslint-disable import/no-anonymous-default-export */
const supportedLanguages = [
  { id: "fr", title: "Français", isDefault: true },
  { id: "en", title: "English" },
];

export default {
  name: "localeBlock",
  type: "object",
  fieldsets: [
    {
      title: "Traduction",
      name: "traduction",
      options: { collapsible: false },
    },
  ],
  fields: supportedLanguages.map((lang) => ({
    title: lang.title,
    name: lang.id,
    type: "blockContent",
    fieldset: lang.isDefault ? null : "traduction",
  })),
};
