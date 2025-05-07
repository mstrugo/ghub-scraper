export const fetcherFn = async (url: string) =>
  await fetch(url)
    .then((res) => {
      if (!res.ok) {
        return null;
      }

      return res.json();
    })
    .catch((err) => {
      throw new Error(err);
    });

export const searchFn = async (url: string, { arg }: { arg: string }) => await fetcherFn(`${url}${arg}`);
