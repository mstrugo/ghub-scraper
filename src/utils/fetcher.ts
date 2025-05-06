export const fetcherFn = async (url: string) => await fetch(url).then((res) => res.json());

export const searchFn = async (url: string, { arg }: { arg: string }) =>
  await fetch(`${url}${arg}`).then((res) => res.json());
