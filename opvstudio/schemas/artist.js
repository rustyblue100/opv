/* eslint-disable import/no-anonymous-default-export */
export default {
  name: "artiste",
  title: "Artistes",
  type: "document",
  fields: [
    {
      name: "nom",
      title: "Nom",
      type: "string",
    },
    {
      name: "instrument",
      title: "Instrument",
      type: "string",
    },

    {
      name: "bio",
      title: "Bio",
      type: "blockContent",
    },

    {
      name: "photo",
      title: "Photo",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],

  preview: {
    select: {
      title: "nom",
      media: "photo",
    },
  },
};
