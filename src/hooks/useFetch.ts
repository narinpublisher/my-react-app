// 📁 src/hooks/useFetch.ts

import { useState, useEffect } from "react";
import axios from "axios";

type FetchState<T> = {
  data: T | null;
  isLoading: boolean;
  error: string | null;
};

function useFetch<T>(url: string): FetchState<T> {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    let isMounted = true;

    const fetch_ = async () => {
      try {
        setState(prev => ({
          ...prev,
          isLoading: true,
          error: null,
        }));

        const res = await axios.get<T>(url);

        if (isMounted) {
          setState({
            data: res.data,
            isLoading: false,
            error: null,
          });
        }
      } catch (err) {
        if (isMounted) {
          setState({
            data: null,
            isLoading: false,
            error: "データの取得に失敗しました。",
          });
        }
      }
    };

    fetch_();

    return () => {
      isMounted = false;
    };
  }, [url]);

  return state;
}

export default useFetch;