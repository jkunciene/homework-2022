import { useState } from 'react';
import  getData from '../services/dataService';

const Search = () => {

        const [mylocation, setMylocation] = useState([]);

const myFunction = (mylocation) => {
    getData(mylocation);
    console.log('suveike myFunction');
}
  return (
    <div>Search

        <button onClick={()=> myFunction('Vilnius')}>Ieskok</button>
    </div>
  )
}

export default Search