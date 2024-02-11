import add_orange from "@/assets/Plus_orange.svg";
import add_white from "@/assets/Plus_white.svg";
import minus_gray from "@/assets/Minus_disabled.svg";
import minus_orange from "@/assets/Minus.svg";

import share from "@/assets/Export.svg";
import trash from "@/assets/Trash.svg";
import refresh_black from "@/assets/Refresh_black.svg";

import refresh_orange from "@/assets/Refresh_orange.svg";
import close from "@/assets/Close.svg";

import { IconVariant } from ".";

type iconDictionaryType = {
  [k in IconVariant]: string;
};

const iconDictionary: iconDictionaryType = {
  add_orange,
  trash,
  share,
  add_white,
  minus_gray,
  minus_orange,
  refresh_black,
  refresh_orange,
  close,
};

export function getIcon(variant: IconVariant) {
  return iconDictionary[variant];
}
