import { Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import Card from "./Card"
import Navbar from "./Navbar.js"


const pageSize=6
function HeroList(props) {
  const [pagination,setpagination] =useState({
    conut:0,
    from:0,
    to:pageSize
  })
  const [pagi,setPagi]=useState(true)

  const [searchHero,setSearchHero]=useState([]);
  const [search,setSearch] =useState(false)


  console.log("props",props)
  useEffect(()=>{
    setSearch(false)
  setpagination({...pagination,conut:props.heros.length})

  },[pagination.from,pagination.to])

  let data=props.heros.slice(pagination.from,pagination.to);
  console.log("length",pagination.from,pagination.to)
    const detail=(id)=>{
        props.herodetail(id)
      }
  


      const handlePageChange=(event,page)=>{
        const from=(page-1)*pageSize;
        const to=(page-1)*pageSize+pageSize;
        setpagination({...pagination,from:from,to:to})
      }
      
      const inputs=(input)=>{
        setSearch(true)
        if(!(input.length===0)){
          let val=input.toLowerCase();
          
          const filterList=data.filter((item)=>{
          var HeroName=item.name.toLowerCase();
          let temp=HeroName.substr(0,val.length);
          if(temp===val){
              return item;
          }        
      })
      console.log("length",filterList)
      setSearchHero(filterList)
      console.log("here is i am ",searchHero)
        }
        setPagi(false)
        
        
      }

    return (
      <div >
  
        <Navbar input={inputs} />
        {!search && <div className="herolist ml-2">
          {

              data.map((hero,index)=>{
                  return <Card name={hero.name} path={hero.thumbnail.path} extension={hero.thumbnail.extension} id={hero.id} detail={detail}/>
              })
          }
          </div>}
         {search && <div className="herolist ml-2">
          {

              searchHero.map((hero,index)=>{
                  return <Card name={hero.name} path={hero.thumbnail.path} extension={hero.thumbnail.extension} id={hero.id} detail={detail}/>
              })
          }
          </div>}
          {pagi && <div className="d-flex justify-content-center">
            <Pagination
            count={Math.ceil(pagination.conut/pageSize)}
            onChange={handlePageChange}/>
          </div>}
      </div>
    );
  }
  
  export default HeroList;
  



