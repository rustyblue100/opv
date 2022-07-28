import dayjs from "dayjs";
import "dayjs/locale/fr";
import { motion } from "framer-motion";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import { useRouter } from "next/router";
import BodyFull from "../../components/Layout/BodyLayout";
import { PortableText, sanityClient, urlFor } from "../../lib/sanityClient";
import { Calendrier } from "../../typings";

interface IProps {
  calendrierData: Calendrier;
  locale: string;
}

const EventDetails: NextPage<IProps> = ({ calendrierData, locale }) => {
  const { title, mainImage, description, prix, complet }: any =
    !calendrierData.recurrents ? calendrierData : calendrierData.recurrents;

  const date = calendrierData.date;

  const { t } = useTranslation();

  const router = useRouter();

  // get document.referer from server
  const referer = typeof window === "undefined" ? "" : window.document.referrer;

  return (
    <BodyFull>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        exit={{ opacity: 0, transition: { duration: 0.2 } }}
        className="w-[120px] pt-8 pb-4 md:ml-auto md:w-[180px]"
      >
        <Image
          src="/logo-footer.png"
          width="510"
          height="83"
          objectFit="contain"
          alt="logo"
        />
      </motion.div>
      <motion.article
        className=" grid gap-x-16 gap-y-12 lg:grid-cols-2 lg:gap-y-32	"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
      >
        <div className="">
          <button
            onClick={() =>
              referer.includes("calendrier") ? router.back() : router.back()
            }
            className="mt-8 flex items-center  gap-3 border-0 bg-none transition-all hover:underline"
          >
            ← Retour au calendrier
          </button>

          <div className="max-w-2xl pt-6 pb-2 text-3xl font-bold uppercase sm:pt-9 md:text-4xl lg:pt-8 lg:text-5xl">
            {title.fr}
          </div>
          <h2 className="text-3xl text-opv-pink-1200">
            {dayjs(date).locale("fr").format("dddd DD MMMM YYYY")}{" "}
          </h2>

          <div className="mt-24 flex justify-start gap-5">
            <div className="flex-1 space-y-2 text-lg">
              <h3 className="font-bold">{t("evenement:type_event")}</h3>
              <div>Musique</div>
              <hr className=" border-opv-black"></hr>
            </div>

            <div className="flex-1 space-y-2 text-lg">
              <h3 className="font-bold">Adresse</h3>
              <div>356, rue Mont-Royal EST</div>
              <hr className=" border-opv-black"></hr>
            </div>
          </div>

          <div className="mt-12 flex justify-start gap-5">
            <div className="flex-1 space-y-2 text-lg">
              <h3 className="font-bold">{t("evenement:portes")}</h3>
              <div>
                {dayjs(date).locale("fr").format("HH")}h
                {dayjs(date).locale("fr").format("mm")}
              </div>
              <hr className=" border-opv-black"></hr>
            </div>

            <div className="flex-1 space-y-2 text-lg">
              <h3 className="font-bold">Admission</h3>
              <div>18+</div>
              <hr className=" border-opv-black"></hr>
            </div>
          </div>

          <div className="mt-20 flex items-center justify-between rounded border border-black bg-violet-200 p-5 text-2xl">
            <div className="my-3">{prix}$</div>

            {complet && (
              <div className="ml-5 inline-block -rotate-12 border border-opv-pink-1200 p-1 uppercase  text-opv-pink-1200 md:text-xl">
                Complet
              </div>
            )}
            <div className="">{t("evenement:billets")}</div>
          </div>

          <h2 className="mt-24 mb-4 text-4xl">Bio</h2>
          <div className="max-w-3xl text-lg ">
            <PortableText
              value={locale === "fr" ? description?.fr : description?.en}
            />
          </div>

          <div className="mt-24">
            <iframe
              className="aspect-video w-full"
              src="https://www.youtube.com/embed/sOreUnGoIMg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
          className="left-0 right-0 xl:sticky xl:top-24 xl:h-[1000px] "
        >
          <div className="">
            <Image
              src={urlFor(mainImage).url()!}
              width="1200"
              height="1200"
              layout="responsive"
              alt={title}
              objectFit="cover"
              className=" rounded-lg"
            />
          </div>

          <div className="float-right mt-4">
            <ul className="flex gap-3">
              <li>Site Web</li>
              <li>Facebook</li>
            </ul>
          </div>
        </motion.div>
      </motion.article>
    </BodyFull>
  );
};

export default EventDetails;

const calendrierQuery = `*[_type =="calendrier" && slug.current == $slug][0]{
  _id,
  title,
  "slug":slug.current,
  artiste[]->,
  description,
  complet,
  prix,
  date,
  "mainImage": mainImage.asset->url,
  "recurrents":evenements->{
  title,
  "mainImage": mainImage.asset->url,
    artiste[]->,
    description,
  }, 
}`;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths =
    await sanityClient.fetch(`*[_type =="calendrier" && defined(slug.current)]{
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

  const calendrierData = await sanityClient.fetch(calendrierQuery, { slug });

  if (!calendrierData) {
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
      calendrierData,
    },
    revalidate: 60, // 60 seconds
  };
};
