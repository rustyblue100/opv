/* eslint-disable import/no-anonymous-default-export */

export default {
  name: "evenements",
  title: "Évènements récurrents",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "localeString",

      validation: (Rule) => Rule.required(),
    },

    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "artiste",
      title: "Artiste",
      type: "array",
      validation: (Rule) => Rule.unique(),
      of: [{ type: "reference", to: { type: "artiste" } }],
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
  },
};
