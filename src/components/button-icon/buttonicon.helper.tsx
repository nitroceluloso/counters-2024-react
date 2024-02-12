import add from "@/assets/Plus_orange.svg";
import minus_gray from "@/assets/Minus_disabled.svg";
import minus_orange from "@/assets/Minus.svg";
import refresh_black from "@/assets/Refresh_black.svg";
import refresh_orange from "@/assets/Refresh_orange.svg";

import { iconTypes } from ".";

type DiconDictionaryType = {
  [k in iconTypes]: string;
};

export function getIconButton(icon: iconTypes) {
  const dictionary: DiconDictionaryType = {
    add,
    minus_gray,
    minus_orange,
    refresh_black,
    refresh_orange,
  };
  return dictionary[icon];
}
