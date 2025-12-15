const Footer = () => {
  return (
    <>
      <footer className="block">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
          <div className="mb-14 mt-16 w-full border-b border-black"></div>
          <div className="flex md:flex-row items-start justify-between sm:flex-col flex-col-reverse md:items-center">
            <p className="text-sm sm:text-base">
              © Copyright 2021. All rights reserved.
            </p>
            <div className="text-center font-semibold">
              <a
                href="javascript:void(0);"
                className="inline-block py-2 pl-5 font-normal text-black transition hover:text-blue-600 px-2.5 lg:pl-12"
              >
                Terms of Service
              </a>
              <a
                href="javascript:void(0);"
                className="inline-block py-2 pl-5 font-normal text-black transition hover:text-blue-600 px-2.5 lg:pl-12"
              >
                License
              </a>
              <a
                href="javascript:void(0);"
                className="inline-block py-2 pl-5 font-normal text-black transition hover:text-blue-600 px-2.5 lg:pl-12"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
