import axios from 'axios';

//back-end endpoint
const API_URL = "/autocomplete?search=";


const getData = async (mylocation) => {
  console.log(`services ${mylocation}`);
    try {
      const response = await axios.get(API_URL + mylocation);      
     // console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }
  }

  export default getData;