import type { AppProps } from "next/app";
import { css, Global } from "@emotion/react";
import { ResetCSS } from "../styles/index";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Global styles={ResetCSS} />
			<Component {...pageProps} />
		</>
	);
}
