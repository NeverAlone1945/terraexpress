import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <nav className=" bg-biru py-5 w-full fixed top-0">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/image/logo-express.png"
              alt="Terra Express Logo"
              width="135"
              height="34"
              priority
            />
          </Link>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://wa.me/6283877888303?text=Halo%2C%0ASaya%20ingin%20tahu%20lebih%20banyak%20tentang%20Software%20Terra%20Express"
            className="text-white bg-whatsapp hover:bg-green-300 font-medium rounded-lg text-sm px-3 py-2 text-center"
          >
            Whatsapp kami
          </a>
        </div>
      </nav>
    </>
  );
}
