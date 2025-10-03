import React from "react";
import Button from "./button.tsx";

const ContactForm = () => {
  return (
    <div className="col-span-1 lg:col-span-2">
      <form className="w-full grid grid-cols-2 gap-x-10 gap-y-[50px]">
        <label htmlFor="name">
          <input
            type="text"
            name="name"
            className="col-span-1 border-b w-full border-secondary-200 outline-none py-3 text-base lg:text-lg lg:leading-[33px] tracking-tight font-montserrat text-text-secondary focus:border-primary-200 transition-colors"
            placeholder="Name"
            required
          />
        </label>
        <label htmlFor="email">
          <input
            type="email"
            name="email"
            className="col-span-1 border-b w-full border-secondary-200 outline-none py-3 text-base lg:text-lg lg:leading-[33px] tracking-tight font-montserrat text-text-secondary focus:border-primary-200 transition-colors"
            placeholder="Email"
            required
          />
        </label>
        <label htmlFor="subject">
          <input
            type="text"
            name="subject"
            className="col-span-1 border-b w-full border-secondary-200 outline-none py-3 text-base lg:text-lg lg:leading-[33px] tracking-tight font-montserrat text-text-secondary focus:border-primary-200 transition-colors"
            placeholder="Service Type (EV Charger, Pool, Smart Home, etc.)"
          />
        </label>
        <label htmlFor="phone">
          <input
            type="tel"
            name="phone"
            className="col-span-1 border-b w-full border-secondary-200 outline-none py-3 text-base lg:text-lg lg:leading-[33px] tracking-tight font-montserrat text-text-secondary focus:border-primary-200 transition-colors"
            placeholder="Phone"
            required
          />
        </label>
        <textarea
          name="message"
          className="col-span-2 border-b w-full border-secondary-200 outline-none py-3 text-base lg:text-lg lg:leading-[33px] tracking-tight font-montserrat text-text-secondary focus:border-primary-200 transition-colors"
          cols={30}
          rows={10}
          placeholder="Tell us about your project..."
          required
        ></textarea>

        <div className="w-full flex justify-end col-span-2">
          <Button text="Send Message" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
