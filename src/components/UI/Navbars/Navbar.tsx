'use client'

import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {

  const handleNotifications = () => {
    const hideMenu = document.querySelector("#notifications")
    if(hideMenu){
      if(hideMenu.hasAttribute("hidden")){
        hideMenu.removeAttribute("hidden")
      } else{
        hideMenu.setAttribute("hidden", "")
      }
    }
  }

  function handleShowMobileMenu (){
    const mobileMenu = document.querySelector('#mobile-menu')
    if(mobileMenu){
      if(mobileMenu.hasAttribute('hidden')){
        mobileMenu.removeAttribute('hidden')
      } else {
        mobileMenu.setAttribute('hidden','')
      }
    }
  }

  return (
    <nav className="bg-slate-50 w-full border-b-4 border-solid rounded-md border-red-700 z-10">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className=" left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-red-950 focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={handleShowMobileMenu}
            >
              <span className="absolute "></span>
              <span className="sr-only">Open Main menu</span>
              {/* Icon when menu is closed.
                        Menu open: "hidden", Menu closed: "block" */}

              <svg
                className="block size-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              {/* Icon when menu is open.
                        Menu open: "block", Menu closed: "hidden"*/}
              <svg
                className="hidden size-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-items-start">
            <div className="flex shrink-0 items-center">
              {/* <Image height={100} width={100} src="#" alt="logo" /> */}
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-0.5">
                <Link href='#' className="px-3 py-2 text-sm font-medium text-neutral-950 uppercase hover:scale-105 duration-500 border-x border-rose-900">
                  About Us
                </Link>
                <Link href='#' className="px-3 py-2 text-sm font-medium text-neutral-950 uppercase hover:scale-105 duration-500 ">
                  Productos
                </Link>
                <Link href='#' className="px-3 py-2 text-sm font-medium text-neutral-950 uppercase  hover:scale-105 duration-500 border-x border-rose-900">
                  Cotización
                </Link>
              </div>
            </div>
          </div>

          {/* Dropdown menus  */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
              onClick={handleNotifications}
            >
              <span className="absolute -inset-1.5"></span>
              <span className="sr-only">View notifications</span>
              <svg
                className="size-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                />
              </svg>
            </button>

            {/* <!-- Profile dropdown --> */}
            <div className="relative ml-3">
              <div>
                <button
                  type="button"
                  className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">Open user menu</span>
                  <Image
                    className="size-8 rounded-full"
                    src="https://images.pexels.com/photos/2061057/pexels-photo-2061057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Profile photo"
                    width={500}
                    height={500}
                  />
                </button>
              </div>

              {/* 
                        <!--
                Dropdown menu, show/hide based on menu state.

                Entering: "transition ease-out duration-100"
                From: "transform opacity-0 scale-95"
                To: "transform opacity-100 scale-100"
                Leaving: "transition ease-in duration-75"
                From: "transform opacity-100 scale-100"
                To: "transform opacity-0 scale-95"
            --> */}
              <div
                id="notifications"
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-hidden"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                hidden
                
                //tabindex="-1"
              >
                {/* <!-- Active: "bg-gray-100 outline-hidden", Not Active: "" --> */}
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:border-b hover:scale-95 duration-150"
                  role="menuitem"
                  //tabindex="-1"
                  id="user-menu-item-0"
                >
                  Your Profile
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:border-b hover:scale-95 duration-150"
                  role="menuitem"
                  //tabindex="-1"
                  id="user-menu-item-1"
                >
                  Settings
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:border-b hover:scale-95 duration-150"
                  role="menuitem"
                  //tabindex="-1"
                  id="user-menu-item-2"
                >
                  Sign out
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      <div className="sm:hidden" id="mobile-menu" hidden>
        <div className=" gap-1 px-2 pt-2 pb-3 flex flex-col justify-center">
          {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
          <Link
            href="#"
            className="rounded-md hover:bg-gray-700 px-3 py-2 text-base font-medium text-gray-600 text-center border-1 hover:text-white"
            aria-current="page"
          >
            About Us
          </Link>
          <Link
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-700 hover:text-white text-center border-1 "
          >
            Team
          </Link>
          <Link
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-700 hover:text-white text-center border-1"
          >
            Productos
          </Link>
          <Link
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-700 hover:text-white text-center border-1"
          >
            Cotización
          </Link>
        </div>
      </div>
    </nav>
  );
};
