import { createClient, createPreviewSubscriptionHook } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";
import { PortableText as PortableTextComponent } from "@portabletext/react";
import Image from "next/image";

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
    image: ({ value }) => {
      const getData = async (ref) => {
        const data = await sanityClient.fetch(
          `*[_type=='pages' && _id=='${ref}']`
        );

        return data;
      };

      return (
        <div className="relative h-[600px] w-[800px]">
          <Image
            src={urlFor(value.asset._ref).url()}
            width={800}
            height={800}
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
    em: ({ children }) => (
      <p className="font-semibold" style={{ color: "red" }}>
        {children}
      </p>
    ),
  },
};

export const PortableText = (props) => (
  <PortableTextComponent components={components} {...props} />
);
