import React from "react";

interface dataProps {
  id: number,
  nome: string,
  contato: number
  email: string
  img: string
}

function useFetch(url: string) {
  const [data, setData] = React.useState<dataProps[] | null>(null);
  const [error, setError] = React.useState<Error | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Erro ao obter os dados da API');
        }

        const jsonData: dataProps[] = await response.json();
        setData(jsonData);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return { data, error, isLoading };
}

export default useFetch;