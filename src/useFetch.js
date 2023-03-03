import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const AbortCont = new AbortController();

    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("Invalid Response");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch Aborted");
          } else {
            setError(err.message);
            setIsPending(false);
          }
        });
    }, 1000);

    return () => AbortCont.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
