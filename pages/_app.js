import Preloader from "@/src/layouts/Preloader";
import "@/styles/globals.css";
// add vercel analytics
import { Analytics } from "@vercel/analytics";

import { Fragment } from "react";
const App = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <Preloader />
      <Analytics />
      <Component {...pageProps} />
    </Fragment>
  );
};
export default App;
