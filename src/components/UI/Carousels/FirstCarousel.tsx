import { Carousel } from "flowbite-react";
import Image from "next/image";
import React from "react";

export const FirstCarousel = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel slide={false} indicators={false}>
        <Image
          src="https://images.pexels.com/photos/31744413/pexels-photo-31744413/free-photo-of-coche-clasico-aparcado-junto-a-la-carretera-en-un-entorno-rural.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Car 1"
          height={750}
          width={1260}
        />
        <Image
          src="https://images.pexels.com/photos/3698228/pexels-photo-3698228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          height={750}
          width={1260}
        />
        <Image
          src="https://images.pexels.com/photos/235226/pexels-photo-235226.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          height={750}
          width={1260}
        />
      </Carousel>
    </div>
  );
};
