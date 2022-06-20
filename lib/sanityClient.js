import { createClient, createPreviewSubscriptionHook } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";
import { PortableText as PortableTextComponent } from "@portabletext/react";

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

export const PortableText = (props) => (
  <PortableTextComponent components={{}} {...props} />
);
