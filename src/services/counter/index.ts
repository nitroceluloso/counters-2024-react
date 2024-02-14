// import { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { getCounters, updateCounter } from "./counter.services";
import { queryClient } from "@/App";

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

export function useUpateCounter() {
  return useMutation(updateCounter, {
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["counterList"] });
    },
  });
}
