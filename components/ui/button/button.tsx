import * as React from "react";
import { PropsWithChildren } from "react";
import Link from "next/link";
import classes from "./button.module.css";

interface IButtonComponentProps {
  link: string;
}

const ButtonComponent: React.FC<PropsWithChildren<IButtonComponentProps>> = ({
  link,
  children,
}) => {
  return (
    <Link href={link}>
      <a className={classes.btn}>{children}</a>
    </Link>
  );
};

export { ButtonComponent };
