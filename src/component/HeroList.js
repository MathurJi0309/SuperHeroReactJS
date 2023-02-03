import {useEffect,useState} from 'react';
import axios from 'axios';
import Card from "./Card"


function HeroList() {
    const [heros,setHeros] =useState([]);

    const fetchHeros=async ()=>{
        const response =await axios.get("https://gateway.marvel.com/v1/public/characters?limit=100&ts=1&apikey=ed58f40fc34db4a3acfc80e1bac20ac8&hash=90b839ceda08471f2e4549c79d75fd30");
        console.log(response.data.data.results)
        
        setHeros(response.data.data.results);
    };
    useEffect(()=>{
        fetchHeros();
    },[]);


    return (
    <div >
        <div>
        {
             heros.map((hero,index)=>{
                return <Card name={hero.name} path={hero.thumbnail.path} extension={hero.thumbnail.extension} id={index}/>
            })
        }
        </div>
    </div>
    );
}

export default HeroList