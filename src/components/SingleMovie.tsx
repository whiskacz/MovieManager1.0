
import React, { useEffect } from 'react';
import axios from 'axios';

interface MovieData {
  // Tutaj zdefiniuj strukturę danych filmu, które chcesz pobrać z API TMDb
}

const SingleMovie: React.FC = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = '179605625a183779c4f6614dbeb3a88c';
        const language = 'pl';
        const apiUrl = `https://api.themoviedb.org/3/movie/popular?language=pl&page=1`; // Zastąp "endpoint" właściwym adresem URL końcowym API TMDb

        const response = await axios.get<MovieData>(apiUrl, {
          params: {
            api_key: apiKey,
            language: language,
            // Dodaj inne parametry zapytania, jeśli są wymagane
          },
        });

        const data = response.data;
        // Tutaj możesz przetwarzać dane z odpowiedzi API
        
        console.log(data);
      } catch (error) {
        console.error('Błąd pobierania danych:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      data.map()
    </div>
  );
};


export default SingleMovie