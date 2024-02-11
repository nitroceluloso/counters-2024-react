// import { useEffect, useState } from "react";
import { useQuery } from "react-query";

type CounterElementApi = {
  id: string;
  title: string;
  count: number;
};
export type CounterListApi = CounterElementApi[];

async function getCounters(): Promise<CounterListApi> {
  const url = "http://127.0.0.1:3001/api/v1/counter";
  const req = await fetch(url);
  return await req.json();
}

export function useCounters() {
  const { isLoading, isError, data, error, refetch } = useQuery(
    "counterList",
    getCounters,
    {
      refetchOnWindowFocus: false,
    },
  );
  // const [counterList, setCounterList] = useState<CounterListApi>([]);

  // useEffect(() => {
  //   setCounterList(data!);
  // }, [data]);

  return {
    isLoading,
    isError,
    data,
    error,
    refetch,
  };
}
