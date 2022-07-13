import * as React from "react";
import { PropsWithChildren } from "react";
import { MainHeaderComponent } from "components/layout/main-header";

interface ILayoutComponentProps {}

const LayoutComponent: React.FC<PropsWithChildren<ILayoutComponentProps>> = (
  props
) => {
  return (
    <>
      <MainHeaderComponent />
      <main>{props.children}</main>
    </>
  );
};

export { LayoutComponent };
