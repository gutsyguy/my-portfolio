import { useState, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";

function popupCard2() {
  const sliderRef = useRef(null);
  const scrollAmount = 100; // The amount to scroll when clicking the navigation buttons
  /* const [images, setImages] = useState([

  ]);

  */

  const images = [
    {
      id: 1,
      url: "https://i1.sndcdn.com/artworks-1pUq6gooy1ifMnzk-YU1k6g-t500x500.jpg",
    },
    {
      id: 2,
      url: "https://www.birds.cornell.edu/home/wp-content/uploads/2023/09/334289821-Baltimore_Oriole-Matthew_Plante.jpg",
    },
    {
      id: 3,
      url: "https://i1.sndcdn.com/artworks-1pUq6gooy1ifMnzk-YU1k6g-t500x500.jpg",
    },
  ];

  return (
    <div>
      <div className="font-sans flex items-center justify-center mt-36">
        {/* Left navigation button */}
        <button
          className="nav-btn bg-gray-300 rounded-md h-52 w-8 m-1"
          onClick={() => {
            const container: any = sliderRef.current;
            container!.scrollLeft -= scrollAmount; // Scroll left by the specified amount
          }}
        >
          <FaChevronLeft />
        </button>
        {/* Image container */}
        <div
          className="flex max-w-xl overflow-scroll scroll-smooth transition-all duration-300 ease-in-out"
          ref={sliderRef}
        >
          {images.map((image) => {
            return (
              <Image
                width={0}
                height={0}
                className="max-w-full w-full md:w-[350px] h-auto md:h-[15rem] rounded-md"
                alt="sliderImage"
                key={image["id"]}
                src={image["url"]}
              />
            );
          })}
        </div>
        {/* Right navigation button */}
        <button
          className="nav-btn bg-gray-300 rounded-md h-52 w-8 m-1"
          onClick={() => {
            const container = sliderRef.current;
            //  @ts-ignore: Unreachable code error
            container!["scrollLeft"] += scrollAmount; // Scroll right by the specified amount
          }}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}

export default popupCard2;
