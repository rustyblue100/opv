/* eslint-disable import/no-anonymous-default-export */

export default {
  name: "pages",
  title: "Pages",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "localeString",
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
