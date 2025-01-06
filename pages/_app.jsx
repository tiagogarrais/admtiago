import Cabecalho from "../components/Cabecalho";
import Rodape from "../components/Rodape";
import NextNProgress from "nextjs-progressbar";
import "../styles/globals.css";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <SessionProvider session={session}>
        <Head>
          <title>admtiago.com.br</title>
          <meta
            name="Site de serviços do Adm. Tiago das Graças Arrais CRA 11660"
            content="Serviços digitais"
            charset="utf-8"
            lang="pt-BR"
          />
        </Head>
        <Cabecalho />
        <hr />
        <NextNProgress
          color="#29D"
          startPosition={0.3}
          stopDelayMs={200}
          height={5}
          showOnShallow={true}
        />
        <Component {...pageProps} />
        <Rodape />
      </SessionProvider>
    </>
  );
}
