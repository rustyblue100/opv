/* eslint-disable import/no-anonymous-default-export */
const dayjs = require("dayjs");
require("dayjs/locale/fr");

export default {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "localeString",
      hidden: ({ document }) => {
        return document?.evenements;
      },
    },
    {
      name: "evenements",
      title: "Évènement récurrents",
      type: "reference",
      hidden: ({ document }) => {
        return document?.title;
      },
      to: [{ type: "evenements" }],
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      hidden: ({ document }) => {
        return document?.evenements;
      },

      options: {
        source: (doc, options) => options.parent.title.fr,
        maxLength: 96,
      },
    },
    /*     {
      name: "category",
      title: "Category",
      type: "category",
      hidden: ({ document }) => {
        return document?.evenements;
      },
    }, */

    {
      name: "publishedAt",
      title: "Date de l'évènement",
      type: "datetime",
      options: {
        dateFormat: "YYYY-MM-DD",
        timeFormat: "HH:mm",
        timeStep: 15,
        calendarTodayLabel: "Today",
      },
    },

    {
      name: "mainImage",
      title: "Image",
      type: "image",
      hidden: ({ document }) => {
        return document?.evenements;
      },
      options: {
        hotspot: true,
      },
    },
    {
      name: "artiste",
      title: "Artistes",
      type: "array",
      validation: (Rule) => Rule.unique(),
      hidden: ({ document }) => {
        return document?.evenements;
      },
      of: [{ type: "reference", to: { type: "artiste" } }],
    },

    {
      name: "description",
      title: "Description",
      type: "localeBlock",
      hidden: ({ document }) => {
        return document?.evenements;
      },
    },
  ],

  preview: {
    select: {
      title: "title.fr",
      titleRef: "evenements.title.fr",
      subtitle: "publishedAt",
      media: "mainImage",
      mediaRef: "evenements.mainImage",
    },
    prepare(selection) {
      const { title, titleRef, subtitle, media, mediaRef } = selection;

      console.log(selection);
      return {
        title: title ? title : titleRef,
        subtitle: dayjs(subtitle).locale("fr").format("dddd DD MMM  HH:mm"),
        media: media ? media : mediaRef,
      };
    },
  },
};
