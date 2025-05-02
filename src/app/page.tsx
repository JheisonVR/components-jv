import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="p-2 w-full">
          <h1 className="text-4xl font-bold">This is my component library</h1>
          <ul className="mt-4 space-y-2 text-lg text-gray-700">
            <li className="">
              <Link
                href="/navbars"
                className="hover:text-blue-500 transition-colors duration-200"
              >
                Navbars
              </Link>
            </li>
            <li>
              <Link
                href="/cards"
                className="hover:text-blue-500 transition-colors duration-200"
              >
                Cards
              </Link>
            </li>
            <li>
              <Link
                href="/carousels"
                className="hover:text-blue-500 transition-colors duration-200"
              >
                Carousels
              </Link>
              <li>
                <Link
                  href="/footers"
                  className="hover:text-blue-500 transition-colors duration-200"
                >
                  Footers
                </Link>
              </li>
            </li>
          </ul>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
