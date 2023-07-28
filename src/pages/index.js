import * as React from "react";

import AnimatedLogo from "../components/AnimatedLogo";
import InfoBlock from "../components/InfoBlock";

const IndexPage = () => {
  return (
    <React.StrictMode>
      <main className="font-serif h-full w-full flex justify-center items-center bg-amber-500 text-amber-200">
        <div className="flex flex-col">
          <AnimatedLogo className="text-current text-[40vw] md:text-[30vw] lg:text-[20vw]" />
          <InfoBlock className="text-amber-200 text-[3vw] md:text-[2.3vw] lg:text-[2vw]" />
        </div>
      </main>
    </React.StrictMode>
  );
};

export default IndexPage;

export const Head = () => <title>Fugu. Creative developer</title>;
