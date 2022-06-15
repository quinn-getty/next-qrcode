import { Box, Container, makeStyles } from "@mui/material";
import App from "next/app";
import Head from "next/head";
import React, { ComponentType } from "react";
import ThemeProvider from 'themes/ThemeProvider'


// import cx from "classnames";

export default function MyApp({
  Component,
}: {
  Component: ComponentType<any>;
}) {
  // const classes = useStyles();

  const content = <Component />;

  return (
    <>
      <Head>
        {/* <title>{pageProps.title}</title> */}
        <meta
          name="description"
          content="SongRise powers a community where artists and fans grow together. Authentic digital records of tracks are represented by NFTs and come as limited editions."
        />
        <meta property="og:url" content="https://www.songrise.io/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="SongRise" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="https://www.songrise.io" />
        <meta property="twitter:url" content="https://www.songrise.io/" />
        <meta name="twitter:title" content="SongRise" />
        <meta
          name="twitter:description"
          content="SongRise powers a community where artists and fans grow together. Authentic digital records of tracks are represented by NFTs and come as limited editions."
        />
      </Head>
        <ThemeProvider>
          {/* <Container > */}
            {content}
          {/* </Container> */}
        </ThemeProvider>
    </>
  );
}

MyApp.getInitialProps = async (context: $TSFixMe) => {
  const appProps = await App?.getInitialProps(context);
  // const session = await getSession(context);

  const isCreatorFlowEnabled = false;

  return {
    // user: session?.user,
    isCreatorFlowEnabled,
    ...appProps,
  };
};
