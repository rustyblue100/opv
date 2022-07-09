/* eslint-disable import/no-anonymous-default-export */
const dayjs = require("dayjs");
require("dayjs/locale/fr");

export default {
  name: "calendrier",
  title: "Calendrier",
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
      /*       hidden: ({ document }) => {
        return document?.evenements;
      }, */

      options: {
        source: (doc, options) => {
          console.log(options);
          return !options.parent.evenements
            ? options.parent.title.fr
            : options.parent.evenements._ref;
        },
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
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
      name: "date",
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

    {
      name: "complet",
      title: "Complet",
      type: "boolean",
    },

    {
      name: "prix",
      title: "Prix",
      type: "number",
    },
  ],

  preview: {
    select: {
      title: "title.fr",
      titleRef: "evenements.title.fr",
      subtitle: "date",
      media: "mainImage",
      mediaRef: "evenements.mainImage",
    },
    prepare(selection) {
      const { title, titleRef, subtitle, media, mediaRef } = selection;

      return {
        title: title ? title : titleRef,
        subtitle: dayjs(subtitle).locale("fr").format("dddd DD MMM HH:mm"),
        media: media ? media : mediaRef,
      };
    },
  },
};
