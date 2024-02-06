import { useState } from "react";
import Landing from "./screens/landing";
import Counters from "./screens/counters";

function App() {
  const [isLandingActive, setLandingActive] = useState<boolean>(true);
  const continueClick = () => setLandingActive(false);

  return (
    <>
      {isLandingActive ? (
        <Landing clickContinue={continueClick} />
      ) : (
        <Counters />
      )}
    </>
  );
}

export default App;
