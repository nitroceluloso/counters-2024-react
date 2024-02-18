import {
  COUNTER_URL_LIST,
  COUNTER_URL_INCREMENT,
  COUNTER_URL_DECREMENT,
} from "./counter.constant";

type CounterElementApi = {
  id: string;
  title: string;
  count: number;
};
export type CounterListApi = CounterElementApi[];

export async function getCounters(): Promise<CounterListApi> {
  const req = await fetch(COUNTER_URL_LIST);
  return await req.json();
}

type UpdateCounterProps = {
  id: string;
  isIncrement: boolean;
};
export async function updateCounter({
  id,
  isIncrement,
}: UpdateCounterProps): Promise<CounterElementApi> {
  const url = isIncrement ? COUNTER_URL_INCREMENT : COUNTER_URL_DECREMENT;
  const req = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ id }),
  });
  return await req.json();
}

type DeleteCounterParams = {
  id: string | string[];
};

export async function deleteCounter({
  id,
}: DeleteCounterParams): Promise<string> {
  const req = await fetch(COUNTER_URL_LIST, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ id }),
  });

  return await req.json();
}
