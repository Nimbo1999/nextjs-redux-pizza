import { ThemeProvider } from 'styled-components';

import theme from '../styles/Theme';
import GlobalStyles from '../styles/GlobalStyles';

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider theme={theme}>
			<Component {...pageProps} />

			<GlobalStyles />
		</ThemeProvider>
	)
}

export default MyApp
