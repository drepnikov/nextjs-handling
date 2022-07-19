import "../styles/globals.css";
import type { AppProps } from "next/app";
import { LayoutComponent } from "components/layout/layout";
import Head from "next/head";
import { Meta } from "components/meta/meta";
import * as React from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LayoutComponent>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Meta title={"Next Events"} description={"NextJS Events"} />
      <Component {...pageProps} />
    </LayoutComponent>
  );
}

export default MyApp;
