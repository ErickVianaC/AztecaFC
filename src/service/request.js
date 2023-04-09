import axios from 'axios';

async function fetchData() {
    try {
      const response = await axios.get('http://localhost:3847');
      const data = response.data
      console.log("🚀 ~ data:", data.imagem)
      
      return response.data
    } catch (error) {
      console.error(error);
    }
  }

export default fetchData