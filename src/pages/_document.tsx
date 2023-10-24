import { Analytics } from "@vercel/analytics/react";

import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="pt-br">
      <Head />
      <body className="main-body">
        <Main />
        <Analytics />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
