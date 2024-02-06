import { useState } from "react";
import Landing from "./screens/landing";
import Counters from "./screens/counters";

function App() {
  const [isLandingActive, setLandingActive] = useState<boolean>(false);
  // const continueClick = () => setLandingActive(false);

  return (
    <>
      {
        isLandingActive ? <Landing /> : <Counters />
      }
    </>
  );
}

export default App;
