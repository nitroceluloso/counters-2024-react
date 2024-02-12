import add_white from "@/assets/Plus_white.svg";
import trash from "@/assets/Trash.svg";
import share from "@/assets/Export.svg";

import { IconVariant } from ".";

type iconDictionaryType = {
  [k in IconVariant]: string;
};

const iconDictionary: iconDictionaryType = {
  trash,
  share,
  add_white,
};

export function getIcon(variant: IconVariant) {
  return iconDictionary[variant];
}
