import Link from "next/link";
import Image from "next/image";

const WelcomePage = () => {
  return (
    <>
      <div className="py-16 bg-white">
        <div className="container m-auto px-6 space-y-8 text-gray-500 md:px-12 lg:px-20">
          <div className="justify-center text-center gap-6 md:text-left md:flex lg:items-center  lg:gap-16">
            <div className="order-last mb-6 space-y-6 md:mb-0 md:w-6/12 lg:w-6/12">
              <h1 className="text-4xl text-green-400 font-bold md:text-5xl">
                Get up to <span className="text-green-900">20% discount</span>{" "}
                on every purchase
              </h1>
              <p className="text-lg">Great deals you don't want to miss!.</p>
              <div className="flex flex-row-reverse flex-wrap justify-center gap-4 md:gap-6 md:justify-end">
                <Link href="/products">
                  <button
                    type="button"
                    className="w-full py-3 px-6 text-center rounded-xl transition bg-green-500 shadow-xl hover:bg-gray-600 active:bg-gray-700 focus:bg-gray-600 sm:w-max"
                  >
                    <span className="block text-white font-semibold">
                      Shop now
                    </span>
                  </button>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-5 grid-rows-4 gap-4 md:w-5/12 lg:w-6/12">
              <div className="col-span-2 row-span-4">
                <Image
                  className="rounded-full"
                  width={640}
                  height={960}
                  src="https://res.cloudinary.com/annysah/image/upload/v1667494587/photo-1644979938680-a3794d2a7bbf_fn2kl0.jpg"
                  alt="plant"
                />
              </div>
              <div className="col-span-2 row-span-2">
                <Image
                  className="w-full h-full object-cover object-top rounded-xl"
                  width={640}
                  height={640}
                  src="https://res.cloudinary.com/annysah/image/upload/v1667494556/summer-terrace-with-separate-gazebos-on-the-beach-picture-id1373008572_h3pcy3.jpg"
                  alt="plant"
                />
              </div>
              <div className="col-span-3 row-span-3">
                <Image
                  className="w-full h-full object-cover object-top rounded-xl"
                  width={640}
                  height={427}
                  src="https://res.cloudinary.com/annysah/image/upload/v1667494529/photo-1632446087106-eea3332a7bb4_teccp2.jpg"
                  alt="plant"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomePage;
