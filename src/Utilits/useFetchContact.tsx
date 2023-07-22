import React from "react";

interface dataProps {
  id: number,
  Name: string,
  Contato: number
  Email: string
  Img: string
}

function useFetchContact(id: string | string[]) {
  const [data, setData] = React.useState<dataProps[] | null>(null);
  const [error, setError] = React.useState<Error | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`/data/contact.json`);
        if (!response.ok) {
          throw new Error('Erro ao obter os dados da API');
        }

        const jsonData: dataProps[] = await response.json();
        const userID: dataProps[] = jsonData.filter(user => user.id === Number(id))
        setData(userID);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  return { data, error, isLoading };
}

export default useFetchContact;