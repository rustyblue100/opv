import "dayjs/locale/fr";
import { motion } from "framer-motion";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import { useRouter } from "next/router";
import Header from "../components/Header/Header";
import BodyFull from "../components/Layout/BodyLayout";
import { PortableText, sanityClient, urlFor } from "../lib/sanityClient";
import { Calendrier } from "../typings";

interface IProps {
  pageData: Calendrier;
  locale: string;
}

const EventDetails: NextPage<IProps> = ({ pageData, locale }) => {
  const { title, mainImage, description }: any = pageData;

  const { t } = useTranslation();

  const router = useRouter();

  // get document.referer from server
  const referer = typeof window === "undefined" ? "" : window.document.referrer;

  return (
    <BodyFull>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
      >
        <Header>
          <h1 className="h1"> {title.fr}</h1>
          <hr className="mt-4 w-full border-opv-black-300"></hr>
        </Header>

        <div className="mt-10 flex max-w-full flex-col-reverse lg:flex-row lg:items-start lg:gap-12">
          <div className="flex-1">
            <PortableText
              value={locale === "fr" ? description?.fr : description?.en}
            />
          </div>

          <div className="mx-auto lg:ml-auto">
            <motion.div className="rounded-full">
              {mainImage && (
                <Image
                  width={500}
                  height={500}
                  src={urlFor(mainImage).url()!}
                  alt="show"
                  objectFit="cover"
                  className="mask2 rounded-full"
                />
              )}
            </motion.div>
          </div>
        </div>
      </motion.main>
    </BodyFull>
  );
};

export default EventDetails;

const pagesQuery = `*[_type =="pages" && slug.current == $slug][0]`;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths =
    await sanityClient.fetch(`*[_type =="pages" && defined(slug.current)]{
      "params": {
        "slug": slug.current
  }}`);

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const { slug }: any = params;

  const pageData = await sanityClient.fetch(pagesQuery, { slug });

  if (!pageData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale as string, [
        "common",
        "evenement",
      ])),
      pageData,
    },
    revalidate: 60, // 60 seconds
  };
};
