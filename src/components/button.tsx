import ArrowSec from "../icons/arrow-sec.tsx";
import ArrowPri from "../icons/arrow-pri.tsx";

export interface ButtonProps {
  variant?: "primary" | "secondary";
  text: string;
  type?: "submit" | "button";
  href?: string; // optional href to turn the button into a link
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
}

const Button = (props: ButtonProps) => {
  const {
    variant = "primary",
    text = "Default Text",
    type = "button",
    href,
    onClick,
  } = props;

  const defaultStyles =
    "rounded-[18px] flex capitalize items-center justify-center gap-[9px] w-fit text-white text-base lg:text-lg font-bold font-montserrat leading-snug tracking-tight px-10 py-5 md:px-[54px] md:py-[26px] hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl";
  const bgClass = variant === "primary" ? "bg-primary-200" : "bg-primary-300";
  const className = `${defaultStyles} ${bgClass}`;
  // If href is provided, render an anchor so CTAs can navigate; otherwise render a button.
  if (href) {
    return (
      <a href={href} className={className} onClick={onClick}>
        {text}
        {variant === "primary" ? <ArrowSec /> : <ArrowPri />}
      </a>
    );
  }

  return (
    <button className={className} type={type} onClick={onClick}>
      {text}
      {variant === "primary" ? <ArrowSec /> : <ArrowPri />}
    </button>
  );
};

export default Button;
