import Mail from "../icons/mail.tsx";
import Phone from "../icons/phone.tsx";
import Web from "../icons/web.tsx";

const ContactInfo = () => {
  return (
    <div className="col-span-1 bg-gray-50 rounded-[30px] px-8 py-[76px] flex flex-col gap-[30px] w-full shadow-lg">
      <a href="mailto:admin@switchupelectrical.co.nz" className="flex flex-col xl:flex-row gap-4 items-center text-xl font-montserrat tracking-tight hover:text-primary-200 transition-colors">
        {" "}
        <Mail /> admin@switchupelectrical.co.nz
      </a>
      <a href="tel:0211396512" className="flex flex-col xl:flex-row gap-4 items-center text-xl font-montserrat tracking-tight hover:text-primary-200 transition-colors">
        {" "}
        <Phone /> 0211396512
      </a>
      <h5 className="flex flex-col xl:flex-row gap-4 items-center text-xl font-montserrat tracking-tight text-text-secondary">
        {" "}
        <Web /> Auckland Wide Service
      </h5>
    </div>
  );
};

export default ContactInfo;
