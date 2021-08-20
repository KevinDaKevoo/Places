import { BrowserRouter as Router, Route } from "react-router-dom";
import React, {useEffect, useState} from "react"
import axios from 'axios'
import './App.css';
import Places from './components/Places'
import Detail from './components/Detail'
function App() {
  const [data, setData] = useState([]);
//Api Request
  useEffect(()=>{
  axios.get('https://610bb7502b6add0017cb3a35.mockapi.io/api/v1/places')
    .then(res => {
      setData(res.data);
    })
    .catch(res => console.log(res.err))
  })
  return (
    <Router>
    <div className="App">
      <Route path='/' exact>
      <Places data={data}/>
      </Route>
      <Route path='/places/:id'>
      <Detail data={data}/>
      </Route>
    </div>
  </Router>
  );
}

export default App;
