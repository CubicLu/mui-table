import { useCallback, useState } from "react";

export const useFetch = (url, options) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      const res = await fetch(url, { ...options });
      const json = await res.json();
      setResponse(json);
    } catch (error) {
      setError(error);
    }
  }, [response, options, url]);

  return { response, error, fetchData };
};
