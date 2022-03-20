const Results = ({myResults}) => {
    
console.log(myResults.data);

  return (
    <div>
        {   myResults.data!==undefined?
            myResults.data.data.map((country, index)=>(
                <div key={index}>{country.displayname}</div>
            )):'please enter something'
        }
      </div>
  )
}

export default Results