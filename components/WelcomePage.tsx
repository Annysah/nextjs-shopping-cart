import Link from "next/link";

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
                    title="Start buying"
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
                <img
                  src="https://images.unsplash.com/photo-1644979938680-a3794d2a7bbf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZnJlZSUyMHBsYW50JTIwaW4lMjBhJTIwdmFzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  className="rounded-full"
                  width="640"
                  height="960"
                  alt="plant"
                />
              </div>
              <div className="col-span-2 row-span-2">
                <img
                  src="https://media.istockphoto.com/photos/summer-terrace-with-separate-gazebos-on-the-beach-picture-id1373008572?b=1&k=20&m=1373008572&s=170667a&w=0&h=Qiwj4N39FZ4L8j2cKXD7jKlPEjy_sCCG51_mxDWaiis="
                  className="w-full h-full object-cover object-top rounded-xl"
                  width="640"
                  height="640"
                  alt="plant"
                />
              </div>
              <div className="col-span-3 row-span-3">
                <img
                  src="https://images.unsplash.com/photo-1632446087106-eea3332a7bb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGZyZWUlMjBwbGFudCUyMGluJTIwYSUyMHZhc2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  className="w-full h-full object-cover object-top rounded-xl"
                  width="640"
                  height="427"
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
