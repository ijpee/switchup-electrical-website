import { e as createComponent, f as createAstro, h as addAttribute, l as renderHead, k as renderComponent, n as renderSlot, r as renderTemplate } from './astro/server_CUtYkpRA.mjs';
import 'kleur/colors';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Logo = () => {
  return /* @__PURE__ */ jsx(
    "img",
    {
      src: "/switchup-logo.png",
      alt: "SwitchUp Electrical Logo",
      className: "h-12 md:h-14 w-auto"
    }
  );
};

function useMediaQuery(query) {
  const getMatches = (query2) => {
    if (typeof window !== "undefined") {
      return window.matchMedia(query2).matches;
    }
    return false;
  };
  const [matches, setMatches] = useState(getMatches(query));
  function handleChange() {
    setMatches(getMatches(query));
  }
  useEffect(() => {
    const matchMedia = window.matchMedia(query);
    handleChange();
    if (matchMedia.addListener) {
      matchMedia.addListener(handleChange);
    } else {
      matchMedia.addEventListener("change", handleChange);
    }
    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleChange);
      } else {
        matchMedia.removeEventListener("change", handleChange);
      }
    };
  }, [query]);
  return matches;
}

const Navbar = () => {
  const [toggled, setToggled] = useState(false);
  const matches = useMediaQuery("(min-width: 1280px)");
  const linkStyle = "text-lg leading-6 font-montserrat font-semibold text-text-primary hover:text-primary-200 transition-colors";
  return /* @__PURE__ */ jsxs("div", { className: "max-w-[1200px] px-12 xl:px-0 m-auto w-full py-11 flex justify-between items-center", children: [
    /* @__PURE__ */ jsxs("a", { href: "/", children: [
      " ",
      /* @__PURE__ */ jsx(Logo, {})
    ] }),
    matches && /* @__PURE__ */ jsxs("nav", { className: "flex flex-row gap-6", children: [
      /* @__PURE__ */ jsx("a", { href: "/", className: linkStyle, children: "Home" }),
      /* @__PURE__ */ jsx("a", { href: "/about", className: linkStyle, children: "About Us" }),
      /* @__PURE__ */ jsx("a", { href: "/services", className: linkStyle, children: "Services" }),
      /* @__PURE__ */ jsx("a", { href: "/contact", className: linkStyle, children: "Contact Us" })
    ] }),
    !matches && /* @__PURE__ */ jsxs(
      "div",
      {
        onClick: () => setToggled(!toggled),
        className: "space-y-1 cursor-pointer",
        children: [
          /* @__PURE__ */ jsx(
            motion.span,
            {
              animate: { rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 },
              className: "block h-0.5 w-8 bg-primary-200"
            }
          ),
          /* @__PURE__ */ jsx(
            motion.span,
            {
              animate: { width: toggled ? 0 : 24 },
              className: "block h-0.5 w-6 bg-primary-200"
            }
          ),
          /* @__PURE__ */ jsx(
            motion.span,
            {
              animate: {
                rotateZ: toggled ? -45 : 0,
                y: toggled ? -8 : 0,
                width: toggled ? 32 : 16
              },
              className: "block h-0.5 w-4 bg-primary-200"
            }
          )
        ]
      }
    ),
    toggled && !matches && /* @__PURE__ */ jsxs(
      motion.nav,
      {
        initial: { opacity: 0, x: 25 },
        animate: { opacity: 1, x: 0 },
        className: "flex flex-col fixed h-screen bg-white w-[75%] md:w-[90%] text-black bottom-0 left-0 gap-6 items-center justify-center",
        children: [
          /* @__PURE__ */ jsx("a", { href: "/", className: linkStyle, children: "Home" }),
          /* @__PURE__ */ jsx("a", { href: "/about", className: linkStyle, children: "About Us" }),
          /* @__PURE__ */ jsx("a", { href: "/services", className: linkStyle, children: "Services" }),
          /* @__PURE__ */ jsx("a", { href: "/contact", className: linkStyle, children: "Contact Us" })
        ]
      }
    )
  ] });
};

const Facebook = () => {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      width: "11",
      height: "19",
      viewBox: "0 0 11 19",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsx(
        "path",
        {
          d: "M9.68359 10.875L10.1758 7.64062H7.04688V5.53125C7.04688 4.61719 7.46875 3.77344 8.875 3.77344H10.3164V0.996094C10.3164 0.996094 9.01562 0.75 7.78516 0.75C5.21875 0.75 3.53125 2.33203 3.53125 5.14453V7.64062H0.648438V10.875H3.53125V18.75H7.04688V10.875H9.68359Z",
          fill: "#292F36"
        }
      )
    }
  );
};

const Instagram = () => {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      width: "18",
      height: "18",
      viewBox: "0 0 18 18",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsx(
        "path",
        {
          d: "M9 4.60742C6.625 4.60742 4.73242 6.53711 4.73242 8.875C4.73242 11.25 6.625 13.1426 9 13.1426C11.3379 13.1426 13.2676 11.25 13.2676 8.875C13.2676 6.53711 11.3379 4.60742 9 4.60742ZM9 11.6582C7.47852 11.6582 6.2168 10.4336 6.2168 8.875C6.2168 7.35352 7.44141 6.12891 9 6.12891C10.5215 6.12891 11.7461 7.35352 11.7461 8.875C11.7461 10.4336 10.5215 11.6582 9 11.6582ZM14.418 4.45898C14.418 3.90234 13.9727 3.45703 13.416 3.45703C12.8594 3.45703 12.4141 3.90234 12.4141 4.45898C12.4141 5.01562 12.8594 5.46094 13.416 5.46094C13.9727 5.46094 14.418 5.01562 14.418 4.45898ZM17.2383 5.46094C17.1641 4.125 16.8672 2.9375 15.9023 1.97266C14.9375 1.00781 13.75 0.710938 12.4141 0.636719C11.041 0.5625 6.92188 0.5625 5.54883 0.636719C4.21289 0.710938 3.0625 1.00781 2.06055 1.97266C1.0957 2.9375 0.798828 4.125 0.724609 5.46094C0.650391 6.83398 0.650391 10.9531 0.724609 12.3262C0.798828 13.6621 1.0957 14.8125 2.06055 15.8145C3.0625 16.7793 4.21289 17.0762 5.54883 17.1504C6.92188 17.2246 11.041 17.2246 12.4141 17.1504C13.75 17.0762 14.9375 16.7793 15.9023 15.8145C16.8672 14.8125 17.1641 13.6621 17.2383 12.3262C17.3125 10.9531 17.3125 6.83398 17.2383 5.46094ZM15.457 13.7734C15.1973 14.5156 14.6035 15.0723 13.8984 15.3691C12.7852 15.8145 10.1875 15.7031 9 15.7031C7.77539 15.7031 5.17773 15.8145 4.10156 15.3691C3.35938 15.0723 2.80273 14.5156 2.50586 13.7734C2.06055 12.6973 2.17188 10.0996 2.17188 8.875C2.17188 7.6875 2.06055 5.08984 2.50586 3.97656C2.80273 3.27148 3.35938 2.71484 4.10156 2.41797C5.17773 1.97266 7.77539 2.08398 9 2.08398C10.1875 2.08398 12.7852 1.97266 13.8984 2.41797C14.6035 2.67773 15.1602 3.27148 15.457 3.97656C15.9023 5.08984 15.791 7.6875 15.791 8.875C15.791 10.0996 15.9023 12.6973 15.457 13.7734Z",
          fill: "#292F36"
        }
      )
    }
  );
};

const LinkedIn = () => {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      width: "17",
      height: "17",
      viewBox: "0 0 17 17",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsx(
        "path",
        {
          d: "M4.14062 16.5V5.98828H0.871094V16.5H4.14062ZM2.48828 4.58203C3.54297 4.58203 4.38672 3.70312 4.38672 2.64844C4.38672 1.62891 3.54297 0.785156 2.48828 0.785156C1.46875 0.785156 0.625 1.62891 0.625 2.64844C0.625 3.70312 1.46875 4.58203 2.48828 4.58203ZM16.3398 16.5H16.375V10.7344C16.375 7.92188 15.7422 5.74219 12.4375 5.74219C10.8555 5.74219 9.80078 6.62109 9.34375 7.42969H9.30859V5.98828H6.17969V16.5H9.44922V11.2969C9.44922 9.92578 9.69531 8.625 11.3828 8.625C13.0703 8.625 13.1055 10.1719 13.1055 11.4023V16.5H16.3398Z",
          fill: "#292F36"
        }
      )
    }
  );
};

const Twitter = () => {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      width: "19",
      height: "16",
      viewBox: "0 0 19 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsx(
        "path",
        {
          d: "M16.6367 4.09375C17.3398 3.56641 17.9727 2.93359 18.4648 2.19531C17.832 2.47656 17.0938 2.6875 16.3555 2.75781C17.1289 2.30078 17.6914 1.59766 17.9727 0.71875C17.2695 1.14062 16.4609 1.45703 15.6523 1.63281C14.9492 0.894531 14 0.472656 12.9453 0.472656C10.9062 0.472656 9.25391 2.125 9.25391 4.16406C9.25391 4.44531 9.28906 4.72656 9.35938 5.00781C6.30078 4.83203 3.55859 3.35547 1.73047 1.14062C1.41406 1.66797 1.23828 2.30078 1.23828 3.00391C1.23828 4.26953 1.87109 5.39453 2.89062 6.0625C2.29297 6.02734 1.69531 5.88672 1.20312 5.60547V5.64062C1.20312 7.43359 2.46875 8.91016 4.15625 9.26172C3.875 9.33203 3.52344 9.40234 3.20703 9.40234C2.96094 9.40234 2.75 9.36719 2.50391 9.33203C2.96094 10.8086 4.33203 11.8633 5.94922 11.8984C4.68359 12.8828 3.10156 13.4805 1.37891 13.4805C1.0625 13.4805 0.78125 13.4453 0.5 13.4102C2.11719 14.4648 4.05078 15.0625 6.16016 15.0625C12.9453 15.0625 16.6367 9.47266 16.6367 4.58594C16.6367 4.41016 16.6367 4.26953 16.6367 4.09375Z",
          fill: "#292F36"
        }
      )
    }
  );
};

const Footer = () => {
  return /* @__PURE__ */ jsx("footer", { className: "mt-[135px] w-full", children: /* @__PURE__ */ jsxs("div", { className: "w-full max-w-[1200px] px-12 xl:px-0 mx-auto pb-[135px] grid grid-cols-1 lg:grid-cols-5 md:grid-cols-2 gap-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "col-span-1 md:col-span-2", children: [
      /* @__PURE__ */ jsx("a", { href: "/", className: "", children: /* @__PURE__ */ jsx(Logo, {}) }),
      /* @__PURE__ */ jsx("p", { className: "tracking-tight text-base lg:text-lg lg:leading-[33px] font-montserrat text-text-secondary pt-[18px] pb-[33px]", children: "Powering Auckland's future with specialist electrical solutions. Licensed, certified, and committed to excellence." }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-5 md:gap-[54px]", children: [
        /* @__PURE__ */ jsx("a", { href: "https://facebook.com", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsx(Facebook, {}) }),
        /* @__PURE__ */ jsx("a", { href: "https://twitter.com", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsx(Twitter, {}) }),
        /* @__PURE__ */ jsx("a", { href: "https://linkedin.com", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsx(LinkedIn, {}) }),
        /* @__PURE__ */ jsx("a", { href: "https://instagram.com", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsx(Instagram, {}) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "col-span-1 flex flex-col gap-4", children: [
      /* @__PURE__ */ jsx("h5", { className: "text-primary-200 font-heading font-bold text-[22px] lg:text-[25px] leading-loose", children: "Pages" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6", children: [
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "/about",
            className: "tracking-tight text-base lg:text-lg lg:leading-[33px] font-montserrat text-text-secondary hover:text-primary-200 transition-colors",
            children: "About Us"
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "/services",
            className: "tracking-tight text-base lg:text-lg lg:leading-[33px] font-montserrat text-text-secondary hover:text-primary-200 transition-colors",
            children: "Services"
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "/contact",
            className: "tracking-tight text-base lg:text-lg lg:leading-[33px] font-montserrat text-text-secondary hover:text-primary-200 transition-colors",
            children: "Contact Us"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "col-span-1 flex flex-col gap-4", children: [
      /* @__PURE__ */ jsx("h5", { className: "text-primary-200 font-heading font-bold text-[22px] lg:text-[25px] leading-loose", children: "Services" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6", children: [
        /* @__PURE__ */ jsx("p", { className: "tracking-tight text-base lg:text-lg lg:leading-[33px] font-montserrat text-text-secondary", children: "EV Chargers" }),
        /* @__PURE__ */ jsx("p", { className: "tracking-tight text-base lg:text-lg lg:leading-[33px] font-montserrat text-text-secondary", children: "Pool & Spa" }),
        /* @__PURE__ */ jsx("p", { className: "tracking-tight text-base lg:text-lg lg:leading-[33px] font-montserrat text-text-secondary", children: "Smart Homes" }),
        /* @__PURE__ */ jsx("p", { className: "tracking-tight text-base lg:text-lg lg:leading-[33px] font-montserrat text-text-secondary", children: "Commercial" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "col-span-1 flex flex-col gap-4", children: [
      /* @__PURE__ */ jsx("h5", { className: "text-primary-200 font-heading font-bold text-[22px] lg:text-[25px] leading-loose", children: "Contact" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6", children: [
        /* @__PURE__ */ jsx("p", { className: "tracking-tight text-base lg:text-lg lg:leading-[33px] font-montserrat text-text-secondary", children: "Auckland" }),
        /* @__PURE__ */ jsx("a", { href: "mailto:admin@switchupelectrical.co.nz", className: "tracking-tight text-base lg:text-lg lg:leading-[33px] font-montserrat text-text-secondary hover:text-primary-200 transition-colors", children: "admin@switchupelectrical.co.nz" }),
        /* @__PURE__ */ jsx("a", { href: "tel:0211396512", className: "tracking-tight text-base lg:text-lg lg:leading-[33px] font-montserrat text-text-secondary hover:text-primary-200 transition-colors", children: "0211396512" })
      ] })
    ] })
  ] }) });
};

const $$Astro = createAstro();
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><meta name="description" content="Switchup Electrical - Specialists in modern electrical solutions across Auckland. EV chargers, smart homes, pool electrical, and luxury installations. Call 0211396512"><meta name="keywords" content="electrician Auckland, EV charger installation, pool electrical, smart home, switchboard upgrade, commercial electrical, residential electrician"><meta${addAttribute(title, "title")}><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,700;1,800;1,900&display=swap" rel="stylesheet"><title>${title}</title>${renderHead()}</head> <body> <main class="bg-main bg-no-repeat bg-cover bg-center"> ${renderComponent($$result, "Navbar", Navbar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/projects/switchup-electrical/src/components/navbar.tsx", "client:component-export": "default" })} ${renderSlot($$result, $$slots["default"])} <!-- All different pages to be rendered here --> ${renderComponent($$result, "Footer", Footer, {})} </main> <p class="tracking-tight text-base text-center border border-secondary-200 bg-white py-10 lg:text-lg lg:leading-[33px] font-montserrat text-text-secondary">
Copyright © ${(/* @__PURE__ */ new Date()).getFullYear()} Switchup Electrical. All rights reserved. | Licensed Electrician Auckland
</p> </body></html>`;
}, "C:/projects/switchup-electrical/src/layouts/main-layout.astro", void 0);

export { $$MainLayout as $, Facebook as F, Instagram as I, LinkedIn as L, Twitter as T };
