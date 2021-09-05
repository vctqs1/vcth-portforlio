import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Navbar from "../components/Navbar";
import ThemeProvider from "../providers/ThemeProvider";
import Background from "../components/Background";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Background>
            <ThemeProvider>
                <Head>
                    <title>vctqs1 Portfolio</title>
                    <meta
                        name="description"
                        content="Generated by create next app"
                    />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Navbar />
                <div id="container">
                    <div id="sentences-container"></div>
                    <div id="self-similarity-matrix">
                        <div className="labels y-axis"></div>
                        <div className="labels x-axis"></div>
                        <canvas></canvas>
                    </div>
                </div>
                <Component {...pageProps} />
            </ThemeProvider>
        </Background>
    );
}
export default MyApp;
