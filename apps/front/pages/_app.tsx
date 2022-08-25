import '../styles/globals.css';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from 'theme';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@components/AppBar';
import createEmotionCache from '@utils/cache/createEmotionCache';
import { CacheProvider } from '@emotion/react';
import Head from 'next/head';
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

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
			</ThemeProvider>
		</CacheProvider>
	);
}

export default MyApp;
