import React from "react";

interface dataProps {
  id: number,
  nome: string,
  contato: number
  email: string
  img: string
}

function useFetchContact(id: string | string[]) {
  const [data, setData] = React.useState<dataProps[] | null>(null);
  const [error, setError] = React.useState<Error | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:3000/api/usercontact`);
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
  }, [id]);

  return { data, error, isLoading };
}

export default useFetchContact;