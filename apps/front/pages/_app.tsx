import AppBar from "@components/AppBar";
import Footer from "@components/Footer";
import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import createEmotionCache from "@utils/cache/createEmotionCache";
import Head from "next/head";
import { theme } from "theme";
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const footerItems: {
  title: string;
  items: { link: string; title: string }[];
}[] = [];

function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: MyAppProps) {
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <AppBar />
        <Component {...pageProps} />
        <Footer footers={footerItems} />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
