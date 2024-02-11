import minus_active from "../../assets/Minus.svg";
import minus_disabled from "../../assets/Minus_disabled.svg";
import add_orange from "../../assets/Plus_orange.svg";
import add_white from "../../assets/Plus_white.svg";

type Iconprops = {
  name:
    | "refresh"
    | "minus_active"
    | "minus_active"
    | "add_white"
    | "add_orange";
};

const icons = {
  minus_active,
  minus_disabled,
  add_white,
  add_orange,
  refresh: minus_active,
};

function Icon({ name }: Iconprops) {
  return (
    <>
      <img src={icons[name]} />
    </>
  );
}

export default Icon;
