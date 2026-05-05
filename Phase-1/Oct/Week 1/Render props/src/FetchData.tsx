import React, { useEffect, useState } from "react";

interface FetchDataProps {
  url: string;
  render: (data: any[], loading: boolean, error: string | null) => React.ReactNode;
}

export const FetchData = ({ url, render }: FetchDataProps) => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [url]);

  return <>{render(data, loading, error)}</>;
};
