import Preloader from "@/src/layouts/Preloader";
import "@/styles/globals.css";
// add vercel analytics
import { Analytics } from "@vercel/analytics/react";

import { Fragment } from "react";
const App = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <Preloader />
      <Component {...pageProps} />
      <Analytics />
    </Fragment>
  );
};
export default App;
