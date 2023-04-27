import type { AppProps } from "next/app";
import "../styles/main.scss";
import dynamic from "next/dynamic";

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default dynamic(() => Promise.resolve(App), {
  ssr: false,
});
