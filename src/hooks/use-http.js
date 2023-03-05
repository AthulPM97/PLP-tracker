import { useCallback, useState } from "react";

const useHttp = () => {
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, dataHandler) => {
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers
          ? requestConfig.headers
          : {
              "Content-Type": "application/json",
            },
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });
      const data = await response.json();
      dataHandler(data);
    } catch (err) {
      setError(err.message);
    }
  },[]);

  return {
    error,
    sendRequest,
  };
};

export default useHttp;
