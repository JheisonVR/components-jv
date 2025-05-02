import { FirstCarousel } from "@/components/UI/Carousels/FirstCarousel";
import { SecondCarousel } from "@/components/UI/Carousels/SecondCarousel";
import Link from "next/link";

export default function Carousels() {
  return (
    <main className="min-h-screen w-full flex flex-col p-2">
      <Link href="/">
        <svg
          className="w-6 h-6 text-gray-800 dark:text-black"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
          />
        </svg>
      </Link>

      <div className="p-1">
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-bold text-center text-xl">First Carousel</h1>
          <h6 className="font-light">Slide inactive indicators off</h6>
        </div>
        <FirstCarousel />
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-bold text-center text-xl">Second Carousel</h1>
          <h6 className="font-light">Slide active 5sg indicators on</h6>
        </div>
        <SecondCarousel />
      </div>
    </main>
  );
}
