import { PropsWithChildren } from "react";

type ShowProps = {
  If: boolean;
};

function Show({ If: condition, children }: PropsWithChildren<ShowProps>) {
  if (!condition) return undefined;
  return children;
}

export default Show;
