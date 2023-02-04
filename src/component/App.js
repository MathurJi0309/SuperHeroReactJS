import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router , Route ,Routes} from "react-router-dom"
import {useEffect,useState} from 'react';
import axios from 'axios';
import Detail from "./Detail.js"
import HeroList from "./HeroList"

function App() {

  // ...................................................................API Call................................................................

  const [heros,setHeros] =useState([]);
  const [herodetails,setHerodetails]=useState({})
    const fetchHeros=async ()=>{
        const response =await axios.get("https://gateway.marvel.com/v1/public/characters?limit=100&ts=1&apikey=ed58f40fc34db4a3acfc80e1bac20ac8&hash=90b839ceda08471f2e4549c79d75fd30");
        console.log(response.data.data.results)
        
        setHeros(response.data.data.results);
    };
    useEffect(()=>{
        fetchHeros();
    },[]);


 
// ?...........................................................List out the serch...................................................................

    const inputs=(input)=>{
      if(!(input.length===0)){
        let val=input.toLowerCase();
        const filterList=heros.filter((item)=>{
        var HeroName=item.name.toLowerCase();
        let temp=HeroName.substr(0,val.length);
        if(temp===val){
            return item;
        }        
    })
    setHeros(filterList)
      }
      
    }

    const herodetail= (id)=>{
      setHerodetails(heros[id])
    }
  return (
    <div >
      <Router>
        <Routes>
          <Route excat path='/' element={<HeroList heros={heros} herodetail={herodetail} input={inputs}/>}/>
          <Route excat path='/detail' element={<Detail name={herodetails.name} 
          id={herodetails.id} paths={herodetails.thumbnail} dis={herodetails.description}
          series={herodetails.series} stories={herodetails.stories}
          
          />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
