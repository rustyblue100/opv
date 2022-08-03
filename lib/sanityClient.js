import { createClient, createPreviewSubscriptionHook } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";
import { PortableText as PortableTextComponent } from "@portabletext/react";
import Image from "next/image";
import getYouTubeId from "get-youtube-id";
import YouTube from "react-youtube";

const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_STUDIO_API_PROJECT_ID,
  dataset: "production",
  apiVersion: "2021-10-21",
  useCdn: true,
};

export const sanityClient = createClient(config);

export const urlFor = (source) => createImageUrlBuilder(config).image(source);

// Set up the live preview subscription hook
export const usePreviewSubscription = createPreviewSubscriptionHook(config);

const components = {
  types: {
    youtube: ({ value }) => {
      const { url } = value;
      const id = getYouTubeId(url);
      return (
        <div>
          <YouTube videoId={id} className="youtube-embed" />
        </div>
      );
    },
    image: ({ value }) => {
      const getData = async (ref) => {
        const data = await sanityClient.fetch(
          `*[_type=='pages' && _id=='${ref}']`
        );

        return data;
      };

      return (
        <div
          style={{
            position: "relative",
            maxWidth: 600,
            height: 480,
            margin: "40px 0",
          }}
        >
          <Image
            src={urlFor(value.asset._ref).url() + "?h=800"}
            layout="fill"
            objectFit="contain"
            alt=""
          />
        </div>
      );
    },
    callToAction: ({ value, isInline }) =>
      isInline ? (
        <a href={value.url}>{value.text}</a>
      ) : (
        <div className="callToAction">{value.text}</div>
      ),
  },
  marks: {
    link: ({ children, value }) => {
      return (
        <a href={value.href} className="url-sanity">
          {children}
        </a>
      );
    },

    internalLink: ({ children, value }) => {
      return (
        <a href={`mailto:${children} `} className="url-sanity">
          {children}
        </a>
      );
    },
    /*     li: ({ children }) => (
      <li className="font-semibold" style={{ color: "red" }}>
        {children}
      </li>
    ), */
  },
};

export const PortableText = (props) => (
  <PortableTextComponent components={components} {...props} />
);
