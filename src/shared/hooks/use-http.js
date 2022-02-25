import { useState, useCallback, useRef, useEffect } from "react";

export const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const activeHttpRequests = useRef([]);

  const sendRequest = useCallback(async function (requestFn, ...args) {
    setIsLoading(true);
    const httpAbortCrtl = new AbortController();
    activeHttpRequests.current.push(httpAbortCrtl);

    try {
      const data = await requestFn(...args);
      setIsLoading(false);
      return data;
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }, []);

  const clearError = () => setError(null);

  useEffect(() => {
    return () => {
      activeHttpRequests.current.forEach((abortCtrl) => abortCtrl.abort());
    };
  }, []);

  return { isLoading, error, sendRequest, clearError };
};
