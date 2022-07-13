import * as React from "react";
import { PropsWithChildren } from "react";
import Link from "next/link";
import classes from "./main-header.module.css";

interface IMainHeaderComponentComponentProps {}

const MainHeaderComponent: React.FC<
  PropsWithChildren<IMainHeaderComponentComponentProps>
> = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href={"/"}>NextEvents</Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <Link href={"/events"}>Browse all events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { MainHeaderComponent };
