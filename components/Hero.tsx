import { FaCheckCircle } from "react-icons/fa";
import { ImPlay2 } from "react-icons/im";
import Image from "next/image";
import { useState } from "react";

export default function Hero() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="container mx-auto">
        <div className="mt-24 md:mt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
          <div className="self-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
              Software Management Ekspedisi
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              memberikan kemudahan dalam mengelola operasional agar bisnis lebih
              produktif dan terus berkembang
            </p>
            <div className="mt-4">
              <div className="flex items-center">
                <FaCheckCircle
                  color="#25D366"
                  className="text-lg sm:text-lg md:text-xl lg:text-2xl"
                />
                <span className="pl-1 text-lg sm:text-lg md:text-xl lg:text-2xl">
                  Support Multi Cabang
                </span>
              </div>
              <div className="flex items-center">
                <FaCheckCircle
                  color="#25D366"
                  className="text-lg sm:text-lg md:text-xl lg:text-2xl"
                />
                <span className="pl-1 text-lg sm:text-lg md:text-xl lg:text-2xl">
                  Tanpa Batasan User
                </span>
              </div>
              <div className="flex items-center">
                <FaCheckCircle
                  color="#25D366"
                  className="text-lg sm:text-lg md:text-xl lg:text-2xl"
                />
                <span className="pl-1 text-lg sm:text-lg md:text-xl lg:text-2xl">
                  Fitur Lengkap Sesuai Kebutuhan
                </span>
              </div>
            </div>
            <div className="mt-6">
              <button
                className="p-2 outline outline-biru rounded-md flex items-center"
                onClick={() => setShowModal(true)}
              >
                <ImPlay2 color="#041AE4" className="text-2xl lg:text-3xl" />
                <span className="pl-1 text-lg lg:text-xl font-semibold">
                  Lihat Video
                </span>
              </button>
            </div>
          </div>
          <div>
            <Image
              src="/image/hero.png"
              width={500}
              height={500}
              alt="Hero Image"
              className="mx-auto"
            />
          </div>
        </div>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative lg:w-8/12 md:w-10/12 w-full">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*body*/}
                <div className="relative p-1 flex-auto">
                  <iframe
                    // width="960"
                    // height="540"
                    className="w-full aspect-video"
                    src="https://www.youtube.com/embed/OM-Y9H0YV-I?autoplay=1"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-2 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-white bg-red-600 font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
