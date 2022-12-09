import Image from "next/image";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

export default function Content() {
  return (
    <>
      <div className="container mx-auto">
        {/* Solusi */}
        <div className="mt-10 lg:mt-14">
          <div className="text-center mb-5">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Kami Memberikan Solusi
            </h2>
          </div>
          <div className="p-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            <div className="text-center">
              <Image
                src="/image/solusi-1.png"
                width={200}
                height={200}
                alt="Solusi 1"
                className="mx-auto"
              />
              <div className="px-6 py-4">
                <div className="font-semibold text-xl mb-2">
                  Kemudahan mengelola operasional
                </div>
                <p className="text-gray-700 text-base">
                  Mengelola operasional menjadi lebih mudah dan terkontrol.
                </p>
              </div>
            </div>
            <div className="text-center">
              <Image
                src="/image/solusi-2.png"
                width={200}
                height={200}
                alt="Solusi 1"
                className="mx-auto"
              />
              <div className="px-6 py-4">
                <div className="font-semibold text-xl mb-2">
                  Meningkatkan kepuasan pelanggan
                </div>
                <p className="text-gray-700 text-base">
                  Operasional menjadi lebih mudah dan cepat sehingga pelanggan
                  mendapatkan pelayanan yang terbaik.
                </p>
              </div>
            </div>
            <div className="text-center">
              <Image
                src="/image/solusi-3.png"
                width={200}
                height={200}
                alt="Solusi 1"
                className="mx-auto"
              />
              <div className="px-6 py-4">
                <div className="font-semibold text-xl mb-2">
                  Bisnis menjadi efektif dan efisien
                </div>
                <p className="text-gray-700 text-base">
                  Produktifitas meningkat, resiko kesalahan rendah menjadikan
                  bisnis lebih efektif dan efisien.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Fitur */}
        <div className="mt-10 lg:mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
          <div>
            <Image
              src="/image/fitur.png"
              width={500}
              height={500}
              alt="Fitur Image"
              className="mx-auto"
            />
          </div>
          <div className="self-center">
            <h2 className="text-2xl md:text-3xl font-bold">
              Bekerja lebih produktif dengan fitur andalan kami
            </h2>
            <div className="mt-4">
              <div className="mt-2">
                <div className="flex items-center">
                  <FaCheckCircle
                    color="#25D366"
                    className="text-xl lg:text-2xl"
                  />
                  <span className="pl-1 text-xl md:text-2xl font-semibold">
                    Support Multi Cabang
                  </span>
                </div>
                <p className="ml-6 lg:ml-7">
                  Satu aplikasi untuk semua cabang tanpa ada batasan user.
                </p>
              </div>
              <div className="mt-2">
                <div className="flex items-center">
                  <FaCheckCircle
                    color="#25D366"
                    className="text-xl lg:text-2xl"
                  />
                  <span className="pl-1 text-xl md:text-2xl font-semibold">
                    Modul Kiriman Barang (Paket)
                  </span>
                </div>
                <p className="ml-6 lg:ml-7">
                  Dengan metode scan barcode saat proses movement barang
                  (IN-OUT) kamu bisa meminimalisir kesalahan paket tidak
                  terkirim. Dilengkapi juga dengan fitur tracking pengiriman
                  yang bisa diakses oleh pelanggan.
                </p>
              </div>
              <div className="mt-2">
                <div className="flex items-center">
                  <FaCheckCircle
                    color="#25D366"
                    className="text-xl lg:text-2xl"
                  />
                  <span className="pl-1 text-xl md:text-2xl font-semibold">
                    Modul Sewa Kendaraan
                  </span>
                </div>
                <p className="ml-6 lg:ml-7">
                  Mengelola dan memonitoring transaksi sewa kendaraan dengan
                  mudah.
                </p>
              </div>
              <div className="mt-2">
                <div className="flex items-center">
                  <FaCheckCircle
                    color="#25D366"
                    className="text-xl lg:text-2xl"
                  />
                  <span className="pl-1 text-xl md:text-2xl font-semibold">
                    Data Reporting
                  </span>
                </div>
                <p className="ml-6 lg:ml-7">
                  Akses data laporan secara realtime untuk kebutuhan analisa dan
                  evaluasi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Jadwalkan Demo */}
      <div className="mt-10 lg:mt-14 py-10 bg-biru">
        <Image
          src="/image/logo-express.png"
          alt="Terra Express Logo"
          width="276"
          height="71"
          className="mx-auto"
        />
        <h2 className="mt-5 text-2xl md:text-3xl font-semibold text-white text-center px-2">
          Siap untuk maju bersama kami?
        </h2>
        <h3 className="mt-3 text-xl md:text-2xl font-medium text-white text-center px-2">
          Jadwalkan sesi demo dan konsultasikan kebutuhan Anda langsung dengan
          kami
        </h3>
        <a
          href="https://wa.me/6283877888303?text=Halo%2C%0ASaya%20tertarik%20dengan%20Software%20Ekspedisi%20dari%20Terra%20Ekspress%20dan%20ingin%20mendapatkan%20demo%20bagaimana%20Software%20tersebut%20bekerja"
          target="_blank"
          rel="noreferrer"
        >
          <button className="mt-5 px-3 py-2 outline outline-white rounded-md flex items-center mx-auto">
            <span className="pl-1 text-lg lg:text-xl font-semibold text-white">
              Jadwalkan Demo
            </span>
          </button>
        </a>
      </div>
    </>
  );
}
