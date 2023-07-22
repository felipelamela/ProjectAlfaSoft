import React from "react";
interface ApiResponse<T> {
  data: T | null;
  error: Error | null;
  isLoading: boolean;
}

function useFetch<T>(url: string): ApiResponse<T> {
  const [data, setData] = React.useState<T | null>(null);
  const [error, setError] = React.useState<Error | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Erro ao obter os dados da API');
        }

        const jsonData: T = await response.json();
        setData(jsonData);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    }

    // Iniciando a requisição quando o componente monta
    fetchData();
  }, [url]);

  return { data, error, isLoading };
}

export default useFetch;