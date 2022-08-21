import logo from './logo.svg';
import React ,{useState , useEffect} from 'react'
import axios from 'axios';
// import instance from './axios';
import './App.css';

function App() {
  const [Data,setData] = useState([]);



      async function fetchData() {
        const request = await axios.get('https://randomuser.me/api/');
        console.log(request.data.results)
        setData(request.data.results)

      }

    useEffect(() => {
        
    
          fetchData();
    }, [])  
  


  return(
    <div className="user-info">
      <h1>Random Users</h1>
      {Data[0] && 
        <div className="card">
          <div className="image">
            <img src={Data[0].picture.large} alt="" />
          </div>
          <div className="details">
            <p><strong>Name :</strong> {Data[0].name.title} {Data[0].name.first} {Data[0].name.last}</p>

            <p><strong>Email :</strong> {Data[0].email}</p>
            <p><strong>Age :</strong> {Data[0].dob.age}</p>
            <p><strong>Phone :</strong> {Data[0].phone}</p>
            <p><strong>Country :</strong> {Data[0].location.country}</p>
          </div>
          
        </div>


      }
      <button onClick={fetchData}>Get Random User</button>  
    </div>
  );
}

export default App;
