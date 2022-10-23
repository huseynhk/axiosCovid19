import './App.css';
import React,{useState , useEffect} from 'react';
import axios from 'axios';

function App() {


  const [value , setValue] = useState();
  const [date , setDate] = useState("");
 
  useEffect(()=>{
  
   axios.get("https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json")
   .then(res => setValue(res.data[date]))
   //.catch(err=console.log(err))
 
  },[value,date])



  return (
    <div className="App">
    <div className='container'>
      <div className='row'>
        <div className='col-6-md mx-auto mt-4' >
          <h2 className='text-center text-warning display-2' >Turkey Covid-19 Search</h2>
          <input type="text" placeholder="GG/AA/YY" className="form-control" onChange={(d)=>(setDate(d.target.value))}></input>

          <table className="table table-striped text-white">
  <thead>
    <tr className='text-black'>
      <th scope="col">#</th>
      <th scope="col">Test Sayi</th>
      <th scope="col">Xeste Sayi</th>
      <th scope="col">Olu Sayisi</th>
    </tr>
  </thead>
  <tbody >
    <tr>
      <th className='text-black' scope="row">{value === undefined ? "Loading..." : value.date}</th>
      <td className={value === undefined ? "bg-danger" : "bg-success"}>{value === undefined ? "Loading..." : value.totalTests}</td>
      <td className={value === undefined ? "bg-danger" : "bg-success"}>{value === undefined ? "Loading..." : value.totalPatients}</td>
      <td className={value === undefined ? "bg-danger" : "bg-success"}>{value === undefined ? "Loading..." : value.totalDeaths}</td>
    </tr>
  
  </tbody>
</table>

        </div>
      </div>
    </div>

    </div>
  );
}

export default App;
