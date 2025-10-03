import Facebook from "../icons/facebook.tsx";
import Instagram from "../icons/instagram.tsx";
import LinkedIn from "../icons/linkedin.tsx";
import Logo from "../icons/logo.tsx";
import Twitter from "../icons/twitter.tsx";

const Footer = () => {
  return (
    <footer className="mt-[135px] w-full">
      <div className="w-full max-w-[1200px] px-12 xl:px-0 mx-auto pb-[135px] grid grid-cols-1 lg:grid-cols-5 md:grid-cols-2 gap-6">
        {/* start */}
        <div className="col-span-1 md:col-span-2">
          <a href="/" className="">
            <Logo />
          </a>
          <p className="tracking-tight text-base lg:text-lg lg:leading-[33px] font-montserrat text-text-secondary pt-[18px] pb-[33px]">
            Powering Auckland's future with specialist electrical solutions. Licensed, certified, and committed to excellence.
          </p>
          <div className="flex gap-5 md:gap-[54px]">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <LinkedIn />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram />
            </a>
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-4">
          <h5 className="text-primary-200 font-heading font-bold text-[22px] lg:text-[25px] leading-loose">
            Pages
          </h5>
          <div className="flex flex-col gap-6">
            <a
              href="/about"
              className="tracking-tight text-base lg:text-lg lg:leading-[33px] font-montserrat text-text-secondary hover:text-primary-200 transition-colors"
            >
              About Us
            </a>
            <a
              href="/services"
              className="tracking-tight text-base lg:text-lg lg:leading-[33px] font-montserrat text-text-secondary hover:text-primary-200 transition-colors"
            >
              Services
            </a>
            <a
              href="/contact"
              className="tracking-tight text-base lg:text-lg lg:leading-[33px] font-montserrat text-text-secondary hover:text-primary-200 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-4">
          <h5 className="text-primary-200 font-heading font-bold text-[22px] lg:text-[25px] leading-loose">
            Services
          </h5>
          <div className="flex flex-col gap-6">
            <p className="tracking-tight text-base lg:text-lg lg:leading-[33px] font-montserrat text-text-secondary">
              EV Chargers
            </p>
            <p className="tracking-tight text-base lg:text-lg lg:leading-[33px] font-montserrat text-text-secondary">
              Pool & Spa
            </p>
            <p className="tracking-tight text-base lg:text-lg lg:leading-[33px] font-montserrat text-text-secondary">
              Smart Homes
            </p>
            <p className="tracking-tight text-base lg:text-lg lg:leading-[33px] font-montserrat text-text-secondary">
              Commercial
            </p>
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-4">
          <h5 className="text-primary-200 font-heading font-bold text-[22px] lg:text-[25px] leading-loose">
            Contact
          </h5>
          <div className="flex flex-col gap-6">
            <p className="tracking-tight text-base lg:text-lg lg:leading-[33px] font-montserrat text-text-secondary">
              Auckland 
            </p>
            <a href="mailto:admin@switchupelectrical.co.nz" className="tracking-tight text-base lg:text-lg lg:leading-[33px] font-montserrat text-text-secondary hover:text-primary-200 transition-colors">
              admin@switchupelectrical.co.nz
            </a>
            <a href="tel:0211396512" className="tracking-tight text-base lg:text-lg lg:leading-[33px] font-montserrat text-text-secondary hover:text-primary-200 transition-colors">
              0211396512
            </a>
          </div>
        </div>

        {/* End */}
      </div>
    </footer>
  );
};

export default Footer;
