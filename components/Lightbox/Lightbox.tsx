// Import Swiper React components
import Image from "next/image";
import { useRef, useState } from "react";
import { Photos } from "../../typings";
import { motion } from "framer-motion";
import { NextPage } from "next";
import { urlFor } from "../../lib/sanityClient";

interface IProps {
  carousselData: Photos[];
}

const Lightbox: NextPage<IProps> = ({ carousselData }) => {
  const { images }: any = carousselData[0];
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);
  const [endNav, setEndNav] = useState(false);
  const [imageToShow, setImageToShow] = useState("");
  const [cursorPosition, setCursorPosition] = useState({ top: 0, left: 0 });

  const hideLightBox = () => {
    setLightBoxDisplay(false);
    setImageToShow("");
  };

  const showImage = (image: string) => {
    //set imageToShow to be the one that's been clicked on

    setImageToShow(image);
    //set lightbox visibility to true
    setLightBoxDisplay(true);
  };

  const showPrev = (e: any): void => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex <= 0) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = images[currentIndex - 1];
      setImageToShow(nextImage);
    }
  };

  const showNext = (e: any): void => {
    e.stopPropagation();

    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex >= images.length - 1) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = images[currentIndex + 1];
      setImageToShow(
        currentIndex === -1 ? images[currentIndex + 2] : nextImage
      );
    }
  };

  const imageCards = images.map((image: any) => {
    return (
      <div
        onClick={() => showImage(image)}
        key={image._key}
        className="curor-pointer relative h-[400px] max-w-full 2xl:h-[1000px] "
      >
        <Image
          data-testid="photos"
          src={urlFor(image).url()}
          alt={image._key}
          layout="fill"
          objectFit="contain"
          className="cursor-pointer"
        />
      </div>
    );
  });

  return (
    <div>
      <div className="mt-8 grid max-w-full grid-cols-2 gap-y-12">
        {imageCards}
      </div>

      {lightboxDisplay ? (
        <div id="lightbox" className="relative">
          <div
            className="absolute top-5 right-5 z-50 cursor-pointer text-violet-200"
            onClick={hideLightBox}
            data-testid="open-lightbox"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>

          <motion.div
            initial={{ x: 0, y: -20 }}
            animate={{ x: 0, y: 0 }}
            dragConstraints={{ left: 0, right: 300 }}
            className="absolute top-1/2 right-10 z-50 flex cursor-pointer items-center justify-between  border-black"
          >
            <button
              onClick={showPrev}
              className=" left-0 top-0 z-50 cursor-pointer border-0 bg-none p-2 text-4xl font-bold text-violet-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
            </button>
            {/*             <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
              />
            </svg> */}
            <button
              onClick={showNext}
              className="right-0 top-0 z-50 cursor-pointer border-0 bg-none p-2 text-4xl font-bold text-violet-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </motion.div>

          <div>
            <Image
              id="lightbox-img"
              src={
                !imageToShow
                  ? urlFor(images[0]).url()
                  : urlFor(imageToShow).url()
              }
              layout="fill"
              objectFit="contain"
              alt="img"
              className="image"
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Lightbox;
