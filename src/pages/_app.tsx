import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';

import theme from '../styles/Theme';
import GlobalStyles from '../styles/GlobalStyles';

import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider theme={theme}>
			<Component {...pageProps} />

			<GlobalStyles />
			<ToastContainer
				position="top-center"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
		</ThemeProvider>
	)
}

export default MyApp
