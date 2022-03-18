import { useEffect, useState } from 'react';
import  getData from '../services/dataService';

const Search = () => {

        const [myLocation, setMyLocation] = useState([]);
        const [myResults, setMyResults] = useState([]);

const onChange = async (e) => {
            setMyLocation(e.target.value);
            const data = await getData(myLocation);
            //console.log(data);
            setMyResults(data);
            console.log(myResults);
          }


const onSubmit = (e) => {
    e.preventDefault();      
  
}


  return (
    <div>       
       <form onSubmit={onSubmit}>
            <input type="search" 
                id='location'
                name='location'
                value={myLocation}
                placeholder="FROM?"
                onChange={onChange}
            />
            <input type="submit" />
        </form>
    </div>
  )
}

export default Search