import CustomImages from "../CustomImages"

const Content = () => {
  return <div
    className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-[7rem] lg:pt-5 text-center lg:text-left max-w-[1024px] mx-auto"
  >
    <div className="flex flex-col lg:flex lg:flex-row items-center relative z-0">
      <div>
        <h1
          className="text-almost-black text-4xl lg:text-[5rem] lg:leading-[5rem] font-bold"
        >
          Make remote work
        </h1>
        <p className="py-5 lg:py-[4rem] lg:text-xl">
          Get your team in sync, no matter your location. Streamline
          processes, create team rituals, and watch productivity soar.
        </p>
        <button
          className="text-almost-white bg-almost-black rounded-xl px-5 py-2 border border-almost-black hover:bg-almost-white hover:text-almost-black lg:text-xl lg:py-3 lg:px-8"
        >Learn More</button
        >
      </div>
      <ul
        className="lg:absolute bottom-[-1rem] flex justify-center mt-[3rem] space-x-9 items-center"
      >
        <li>
          <CustomImages imgSource="client-databiz.svg" imgAlt="Client Databiz Logo" imgWidth="110" />
        </li>
        <li>
          <CustomImages imgSource="client-audiophile.svg" imgAlt="Client Audiophile Logo" imgWidth="70" />
        </li>
        <li>
          <CustomImages imgSource="client-meet.svg" imgAlt="Client Meet Logo" imgWidth="90" />
        </li>
        <li>
          <CustomImages imgSource="client-maker.svg" imgAlt="Client Maker Logo" imgWidth="90" />
        </li>
      </ul>
    </div>
    <div className="order-first lg:order-last">
      <CustomImages imgSource="image-hero-mobile.png" imgAlt="Hero" className="lg:hidden mb-9" />
      <CustomImages imgSource="image-hero-desktop.png" imgAlt="Hero" className="hidden lg:block" />
    </div>
  </div>
}

export default Content