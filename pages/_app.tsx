import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  console.log("App COMPONENT - PAGE Router");
  return <Component {...pageProps} />;
}
