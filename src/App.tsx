import { useState } from "react";
import Landing from "./screens/landing";
import Counters from "./screens/counters";
import { QueryClient, QueryClientProvider } from "react-query";

export const queryClient = new QueryClient();

function App() {
  const [isLandingActive, setLandingActive] = useState<boolean>(false);
  const continueClick = () => setLandingActive(false);

  return (
    <>
      {isLandingActive ? (
        <Landing clickContinue={continueClick} />
      ) : (
        <QueryClientProvider client={queryClient}>
          <Counters />
        </QueryClientProvider>
      )}
    </>
  );
}

export default App;
