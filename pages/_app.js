import Preloader from "@/src/layouts/Preloader";
import "@/styles/globals.css";
// add vercel analytics
import { Analytics } from "@vercel/analytics/react";
import { Fragment } from "react";
import dynamic from "next/dynamic";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

const App = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <Preloader />
      <Component {...pageProps} />
      <AnimatedCursor
        innerSize={10}
        outerSize={20}
        color="150, 75, 0"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        trailingSpeed={10}
        outerStyle={{
          cursor: "pointer",
          mixBlendMode: "difference",
          background: "rgba(150, 75, 0, 0.5)",
          backgroundSize: "contain",
        }}
        innerStyle={{
          cursor: "pointer",
          mixBlendMode: "difference",
          background: "rgba(150, 75, 0, 0.5)",
          backgroundSize: "contain",
        }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      <Analytics />
    </Fragment>
  );
};
export default App;
