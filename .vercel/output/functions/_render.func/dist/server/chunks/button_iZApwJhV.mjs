import { jsx, jsxs } from 'react/jsx-runtime';

const ArrowSec = () => {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      width: "19",
      height: "17",
      viewBox: "0 0 19 17",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsx(
        "path",
        {
          d: "M2 8.43536L15.7232 8.29851M10.6182 1.91132L17.1412 8.4343L10.4868 15.0887",
          stroke: "#CDA274",
          strokeWidth: "2",
          strokeLinecap: "square",
          strokeLinejoin: "round"
        }
      )
    }
  );
};

const ArrowPri = () => {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      width: "19",
      height: "17",
      viewBox: "0 0 19 17",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsx(
        "path",
        {
          d: "M2 8.43536L15.7232 8.29851M10.6182 1.91132L17.1412 8.4343L10.4868 15.0887",
          stroke: "#292F36",
          strokeWidth: "2",
          strokeLinecap: "square",
          strokeLinejoin: "round"
        }
      )
    }
  );
};

const Button = (props) => {
  const {
    variant = "primary",
    text = "Default Text",
    type = "button",
    href,
    onClick
  } = props;
  const defaultStyles = "rounded-[18px] flex capitalize items-center justify-center gap-[9px] w-fit text-white text-base lg:text-lg font-bold font-montserrat leading-snug tracking-tight px-10 py-5 md:px-[54px] md:py-[26px] hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl";
  const bgClass = variant === "primary" ? "bg-primary-200" : "bg-primary-300";
  const className = `${defaultStyles} ${bgClass}`;
  if (href) {
    return /* @__PURE__ */ jsxs("a", { href, className, onClick, children: [
      text,
      variant === "primary" ? /* @__PURE__ */ jsx(ArrowSec, {}) : /* @__PURE__ */ jsx(ArrowPri, {})
    ] });
  }
  return /* @__PURE__ */ jsxs("button", { className, type, onClick, children: [
    text,
    variant === "primary" ? /* @__PURE__ */ jsx(ArrowSec, {}) : /* @__PURE__ */ jsx(ArrowPri, {})
  ] });
};

export { ArrowSec as A, Button as B };
