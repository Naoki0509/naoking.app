import "src/styles/globals.css";
import "animate.css";
import type { CustomAppPage } from "next/app";
import Head from "next/head";

const App: CustomAppPage = ({ Component, pageProps }) => {
	const getLayout =
		Component.getLayout ||
		((page) => {
			return page;
		});

	return <>{getLayout(<Component {...pageProps} />)}</>;
};

export default App;
