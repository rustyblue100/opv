// youtube.js

import React from "react";

import getYouTubeId from "get-youtube-id";
import YouTube from "react-youtube";

const Preview = ({ value }) => {
  const { url } = value;
  const id = getYouTubeId(url);
  return <YouTube videoId={id} />;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: "youtube",
  type: "object",
  title: "Video",
  fields: [
    {
      name: "url",
      type: "url",
      title: "YouTube video URL",
    },
  ],
  preview: {
    select: {
      url: "url",
    },
    component: Preview,
  },
};
