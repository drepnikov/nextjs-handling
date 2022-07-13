import * as React from "react";
import { PropsWithChildren } from "react";
import Link from "next/link";
import classes from "./button.module.css";

interface IButtonComponentProps {
  link?: string;
  onClick?: () => void;
}

const ButtonComponent: React.FC<PropsWithChildren<IButtonComponentProps>> = ({
  link,
  onClick,
  children,
}) => {
  if (link) {
    return (
      <Link href={link}>
        <a className={classes.btn}>{children}</a>
      </Link>
    );
  }

  return (
    <button className={classes.btn} onClick={onClick}>
      {children}
    </button>
  );
};

export { ButtonComponent };
