/* empty css                                 */
import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_CUtYkpRA.mjs';
import 'kleur/colors';
import { j as jsxRuntimeExports, $ as $$MainLayout } from '../chunks/main-layout_DvV2Yj8j.mjs';
import { B as Button, A as ArrowSec } from '../chunks/button_BnqymB8d.mjs';
/* empty css                                 */
export { r as renderers } from '../chunks/_@astro-renderers_-GCoBMD8.mjs';

const CallIcon = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      width: "93",
      height: "93",
      viewBox: "0 0 93 93",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "46.5", cy: "46.5", r: "46.5", fill: "#F4F0EC" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M61.0012 55.0749C59.7796 53.8442 56.8211 52.0482 55.3857 51.3243C53.5164 50.3828 53.3625 50.3059 51.8933 51.3974C50.9133 52.1258 50.2617 52.7766 49.1148 52.532C47.9678 52.2874 45.4754 50.9082 43.2931 48.7329C41.1107 46.5576 39.6514 43.9931 39.4061 42.8501C39.1607 41.7071 39.8222 41.0632 40.5438 40.081C41.5607 38.6964 41.4838 38.4657 40.6145 36.5965C39.9368 35.1427 38.0883 32.2121 36.8529 30.9967C35.5313 29.6914 35.5313 29.9222 34.6798 30.276C33.9865 30.5677 33.3214 30.9222 32.6928 31.3352C31.462 32.1529 30.7789 32.8321 30.3012 33.8528C29.8235 34.8735 29.6089 37.2665 32.0759 41.7478C34.5429 46.2292 36.2737 48.5206 39.8561 52.0928C43.4385 55.6649 46.1931 57.5856 50.2202 59.844C55.2018 62.6339 57.1126 62.09 58.1365 61.6131C59.1604 61.1362 59.8427 60.4593 60.662 59.2286C61.076 58.6011 61.4314 57.9368 61.7235 57.2441C62.0781 56.3957 62.3089 56.3957 61.0012 55.0749Z",
            stroke: "#CDA274",
            strokeWidth: "2",
            strokeMiterlimit: "10"
          }
        )
      ]
    }
  );
};

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const services = [
    {
      title: "EV Charger Installation",
      text: "Future-proof your home with professional EV charging solutions. We install all major brands with smart connectivity options."
    },
    {
      title: "Pool & Spa Electrical",
      text: "Specialist electrical services for pools, spas, and saunas. From heating systems to lighting, we handle it all safely."
    },
    {
      title: "Smart Home Systems",
      text: "Upgrade to intelligent lighting, automated systems, and cutting-edge home technology. Modern living made simple."
    }
  ];
  const projects = [
    {
      img: "/project1.png",
      name: "Tesla EV Charger Install",
      text: "Residential / Smart Charging"
    },
    {
      img: "/project2.png",
      name: "Luxury Pool Electrical",
      text: "Pool & Spa / Heating Systems"
    },
    {
      img: "/project3.png",
      name: "Commercial Fit-Out",
      text: "Office / Data & Lighting"
    },
    {
      img: "/project4.png",
      name: "Smart Home Automation",
      text: "Residential / IoT Systems"
    }
  ];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Switchup Electrical - Auckland Electricians | EV Chargers | Smart Homes", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="w-full bg-hero bg-no-repeat bg-cover h-screen lg:min-h-[110vh] px-12 xl:px-0 flex items-center " data-astro-cid-j7pv25f6> <div class="lg:max-w-[1200px] w-full mx-auto flex flex-col" data-astro-cid-j7pv25f6> <p class="text-base md:text-[22px] pb-5 pt-8 md:pt-12 lg:pt-16 font-montserrat text-text-secondary w-full lg:max-w-[50%]" data-astro-cid-j7pv25f6>Specialists in modern electrical solutions from EV chargers to smart homes, pools, and luxury installations. Licensed, certified, and committed to excellence.</p> ${renderComponent($$result2, "Button", Button, { "text": "Get Free Quote", "href": "/contact", "data-astro-cid-j7pv25f6": true })} </div> </section>  <section class="lg:max-w-[1200px] flex flex-col gap-8 lg:gap-10 lg:flex-row px-12 xl:px-0 w-full mx-auto pt-[100px] lg:pt-[200px] justify-between " data-astro-cid-j7pv25f6> ${services.map((service) => {
    return renderTemplate`<div class="w-full max-w-[358px] mx-auto flex flex-col justify-center items-center gap-3 md:gap-5" data-astro-cid-j7pv25f6> <h3 class="text-text-primary font-heading font-bold text-[22px] md:text-[25px] leading-loose" data-astro-cid-j7pv25f6>${service.title}</h3> <p class="text-base md:text-lg tracking-tight font-montserrat text-text-secondary leading-[33px] text-center" data-astro-cid-j7pv25f6> ${service.text}</p> <a href="/services" class="text-primary-200 leading-snug text-lg tracking-tight font-montserrat font-semibold gap-2 py-4 md:py-8 startCenter hover:text-primary-100 transition-colors" data-astro-cid-j7pv25f6>Learn More ${renderComponent($$result2, "ArrowSec", ArrowSec, { "data-astro-cid-j7pv25f6": true })}</a> </div>`;
  })} </section>  <section class="w-full lg:max-w-[1200px] mx-auto px-12 xl:px-0 flex flex-col-reverse justify-center items-center lg:grid grid-cols-2 gap-[75px] pt-[100px] lg:pt-[200px]" data-astro-cid-j7pv25f6> <div class="flex flex-col gap-8 max-w-[472px] items-center lg:items-start py-6" data-astro-cid-j7pv25f6> <h2 class="text-[30px] text-center lg:text-left font-heading font-bold tracking-wide leading-8 md:leading-[62.50px] md:text-[50px] text-text-primary " data-astro-cid-j7pv25f6>Specialists in Modern Electrical Solutions</h2> <p class="text-base md:text-lg text-center lg:text-left tracking-tight font-montserrat text-text-secondary leading-[33px]" data-astro-cid-j7pv25f6>With over 15 years of experience, Switchup Electrical brings cutting-edge expertise to every project. We specialize in EV charger installations, pool and spa electrical, smart home automation, and luxury residential work across Auckland.</p> <div class="flex gap-4 pt-3 items-center" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "CallIcon", CallIcon, { "data-astro-cid-j7pv25f6": true })} <p class="flex flex-col text-text-secondary font-montserrat tracking-tight" data-astro-cid-j7pv25f6> <span class="text-2xl font-bold leading-9 text-primary-200" data-astro-cid-j7pv25f6>0211396512</span> <span class="text-lg leading-8" data-astro-cid-j7pv25f6>Available 24/7</span> </p> </div> ${renderComponent($$result2, "Button", Button, { "text": "Get Free Quote", "href": "/contact", "data-astro-cid-j7pv25f6": true })} </div> <div data-astro-cid-j7pv25f6> <img src="/about-img.png" alt="Switchup Electrical professional electrician" data-astro-cid-j7pv25f6> </div> </section>    <section class="lg:max-w-[1200px] px-12 xl:px-0 w-full mx-auto pt-[100px] lg:pt-[200px] " data-astro-cid-j7pv25f6> <h2 class="font-heading font-bold tracking-wide text-center leading-[37px] lg:leading-[62.50px] text-[30px] lg:text-[50px] w-full lg:max-w-[60%] pb-2 mx-auto text-text-primary" data-astro-cid-j7pv25f6>Recent Projects</h2> <p class="text-base md:text-lg text-center tracking-tight font-montserrat text-text-secondary leading-[33px] lg:max-w-[70%] mx-auto" data-astro-cid-j7pv25f6>From cutting-edge EV charger installations to luxury pool electrical and smart home systems see how we're powering Auckland's modern lifestyle.</p> <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-x-[104px] lg:gap-y-[56px] mt-12 lg:mt-[93px]" data-astro-cid-j7pv25f6> ${projects.map((proj) => {
    return renderTemplate`<div class="w-full flex flex-col gap-4" data-astro-cid-j7pv25f6> <img${addAttribute(proj.img, "src")}${addAttribute(proj.name, "alt")} class="rounded-2xl" data-astro-cid-j7pv25f6> <p class="flex flex-col tracking-tight leading-7" data-astro-cid-j7pv25f6> <span class="text-text-primary text-lg lg:text-2xl font-heading font-bold" data-astro-cid-j7pv25f6>${proj.name}</span> <span class="text-text-secondary text-base font-montserrat" data-astro-cid-j7pv25f6>${proj.text}</span> </p> </div>`;
  })} </div> </section> ` })} `;
}, "C:/projects/switchup-electrical/src/pages/index.astro", void 0);

const $$file = "C:/projects/switchup-electrical/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
