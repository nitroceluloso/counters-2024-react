import { IconVariant } from ".";
import add from "../../assets/Plus.svg";
import trash from "../../assets/Trash.svg";
import share from "../../assets/Export.svg";

type iconDictionaryType = {
  [k in IconVariant]: string;
};

export function getIcon(variant: IconVariant) {
  const iconDictionary: iconDictionaryType = {
    add: add,
    delete: trash,
    share: share,
  };
  return iconDictionary[variant];
}
