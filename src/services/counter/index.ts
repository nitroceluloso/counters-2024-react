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
    isFetching,
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
