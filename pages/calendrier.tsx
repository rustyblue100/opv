import { NextPage } from "next";
import { useRouter } from "next/router";

const Calendrier: NextPage = () => {
  const { locale, locales, asPath } = useRouter();

  return (
    <div className="container mx-auto">
      <h1 className="py-20 bg-red-400 text-center text-[60px] ">
        {locale === "en-CA" ? "calendar" : "calendrier"}
      </h1>
      <div className="md:flex justify-between align-middle max-w-full mt-10">
        <div className="flex-item flex-1 text-center ">1</div>
        <div className="flex-item flex-1 text-center ">2</div>
        <div className="flex-item flex-1 text-center ">3</div>
      </div>
    </div>
  );
};

export default Calendrier;
