import { useState } from 'react';
import  getData from '../services/dataService';
import Results from './Results';

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


const onSubmit = async (e) => {
    e.preventDefault();        
    const data = await getData(myLocation);    
    setMyResults(data);  
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
        <Results myResults={myResults}/>
    </div>
  )
}

export default Search