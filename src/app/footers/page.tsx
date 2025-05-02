import { FirstFooter } from "@/components/UI/Footers/FirstFooter";
import { SecondFooter } from "@/components/UI/Footers/SecondFooter";
import { ThirdFooter } from "@/components/UI/Footers/ThirdFooter";
import Link from "next/link";

export default function Footers() {
  return (
    <main className="min-h-screen">
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
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-bold text-xl">First Footer</h1>
        <h6 className="font-extralight " >Footer responsive</h6>
      </div>
      <FirstFooter />
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-bold text-xl">Second Footer</h1>
        <h6 className="font-extralight " >Footer Flowbite</h6>
      </div>
      <SecondFooter />
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-bold text-xl">Third Footer</h1>
        <h6 className="font-extralight " >Footer Flowbite</h6>
      </div>
      <ThirdFooter/>
    </main>
  );
}
