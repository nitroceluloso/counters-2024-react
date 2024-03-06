import { useState } from "react";
import { useMutation, useQuery } from "react-query";
import {
  getCounters,
  updateCounter,
  deleteCounter,
  CounterListApi,
} from "./counter.services";
import { COUNTER_QUERY_KEYS } from "./counter.constant";
import { queryClient } from "@/App";

export function useCounters() {
  const queryOptions = {
    refetchOnWindowFocus: false,
  };
  const { isLoading, isError, data, error, refetch, isFetching } = useQuery(
    COUNTER_QUERY_KEYS.GET_LIST,
    getCounters,
    queryOptions,
  );
  const [filterQuery, setFilterQuery] = useState("");
  const filteredCounters =
    filterQuery === ""
      ? data
      : data!.filter((counter) => counter.title.includes(filterQuery));

  return {
    isLoading,
    isError,
    data: filteredCounters,
    error,
    refetch,
    isFetching,
    setFilterQuery,
    isFiltering: filterQuery !== "",
  };
}

export function useUpateCounter() {
  return useMutation(updateCounter, {
    onSuccess: (data) => {
      queryClient.setQueryData(
        [COUNTER_QUERY_KEYS.GET_LIST],
        (oldData: CounterListApi | undefined): CounterListApi => {
          return oldData!.map((el) => (el.id === data.id ? data : el));
        },
      );
    },
  });
}

export function useDeleteCounter() {
  return useMutation(deleteCounter, {
    onSuccess: (idCounterDeleted) => {
      queryClient.setQueryData(
        [COUNTER_QUERY_KEYS.GET_LIST],
        (oldData: CounterListApi | undefined): CounterListApi => {
          return oldData!.filter((el) =>
            el.id === idCounterDeleted ? false : true,
          );
        },
      );
    },
  });
}
