import type { AppProps } from "next/app";
import "../styles/main.scss";
import dynamic from "next/dynamic";
import Layout from "@/components/Layout";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default dynamic(() => Promise.resolve(App), {
  ssr: false,
});
