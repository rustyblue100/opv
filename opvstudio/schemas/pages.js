/* eslint-disable import/no-anonymous-default-export */

const supportedLanguages = [
  { id: "fr", title: "Français", isDefault: true },
  { id: "en", title: "English" },

  // Add as many languages as you need to support
];

export default {
  name: "pages",
  title: "Pages",
  type: "document",
  fields: [
    {
      name: "title",
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
        type: "string",
        fieldset: lang.isDefault ? null : "traduction",
        validation: (Rule) => Rule.required(),
      })),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      validation: (Rule) => Rule.required(),

      options: {
        source: "title.fr",
        maxLength: 96,
      },
    },

    {
      name: "mainImage",
      title: "Image",
      type: "image",

      options: {
        hotspot: true,
      },
    },

    {
      name: "description",
      title: "Description",
      type: "localeBlock",
    },
  ],

  preview: {
    select: {
      title: "title.fr",

      media: "mainImage",
    },
    prepare(selection) {
      const { title, titleRef } = selection;

      return {
        title: title ? title : titleRef,
      };
    },
  },
};
