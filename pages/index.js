import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Carousel from "react-multi-carousel";

export default function Home() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <Head>
        <title>TuniBest</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <h2 className="text-center m-5">Welcome</h2>
        <div className="card bg-white">
          <Carousel responsive={responsive} className="card-group" as="div">
            <Link href="/">
              <div className="card">
                <Image src="/test.jpg" height={200} width={200} />
                <div className="card-body">
                  <p className="card-text text-center">Serie 1</p>
                </div>
              </div>
            </Link>

            <div>
              <Image src="/test.jpg" height={200} width={200} />
            </div>
            <div>
              <Image src="/test.jpg" height={200} width={200} />
            </div>
            <div>
              <Image src="/test.jpg" height={200} width={200} />
            </div>
            <div>
              <Image src="/test.jpg" height={200} width={200} />
            </div>
            <div>
              <Image src="/test.jpg" height={200} width={200} />
            </div>
            <div>
              <Image src="/test.jpg" height={200} width={200} />
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
}
