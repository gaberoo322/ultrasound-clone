import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div
      className="
      flex 
      min-h-screen 
      flex-col
      justify-between 
      items-center 
      py-2 
      bg-slateus
      text-white
    "
    >
      <Head>
        <title>xx Gwei | $x,xxx | ultrasound.money</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <span
          className="absolute 
          top-0 
          left-0 
          flex 
          h-[500px]
          w-full 
          justify-center 
          overflow-hidden 
          xs:h-[650px] 
          md:h-[700px] 
          lg:h-[800px] 
          xl:h-[900px] 
          2xl:h-[1200px]"
        >
          <Image
            className="          
              absolute
              -top-[120px]
              h-full
              w-full
              select-none
              xs:-top-[180px]
              sm:-top-[200px]
              md:-top-[240px]
              lg:-top-[280px]
              xl:-top-[320px]
              2xl:-top-[440px]
            "
            src="/rose-background.svg"
            alt="rose background color"
            width={72}
            height={16}
          />
        </span>

        <h1
          className="
            mx-auto
            mt-24
            bg-transparent
            px-4 text-center
            text-[4.6rem] font-extralight leading-[5.4rem]
            text-white
            md:px-16
            md:text-[4.0rem]
            md:leading-[5.4rem]
            lg:text-[4.8rem]
            gradientText
          "
        >
          ultra sound money
        </h1>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full"></div>
      </main>

      <footer className="flex h-20 w-full items-center justify-center border-t">
        <a
          className="flex flex-col items-center justify-center gap-2"
          href="https://ultrasound.money/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>Grifted by: Gabe Greenfield</p>
          <p className="block">
            from <u>ultrasound.money</u>
          </p>
        </a>
      </footer>
    </div>
  );
};

export default Home;
