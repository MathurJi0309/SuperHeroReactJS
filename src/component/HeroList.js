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




  console.log("props",props)
  useEffect(()=>{
  setpagination({...pagination,conut:props.heros.length})

  },[pagination.from,pagination.to])

  let data=props.heros.slice(pagination.from,pagination.to);
  console.log("length",pagination.from,pagination.to)
    const detail=(id)=>{
        props.herodetail(id)
      }
      const inputs=(input)=>{

        props.input(input)
        setPagi(false)
      }


      const handlePageChange=(event,page)=>{
        const from=(page-1)*pageSize;
        const to=(page-1)*pageSize+pageSize;
        setpagination({...pagination,from:from,to:to})
      }

    return (
      <div >
  
        <Navbar input={inputs} />
        <div className="herolist ml-2">
          {

              data.map((hero,index)=>{
                  return <Card name={hero.name} path={hero.thumbnail.path} extension={hero.thumbnail.extension} id={index} detail={detail}/>
              })
          }
          </div>
          {pagi && <div className="d-flex justify-content-center">
            <Pagination
            count={Math.ceil(pagination.conut/pageSize)}
            onChange={handlePageChange}/>
          </div>}
      </div>
    );
  }
  
  export default HeroList;
  



//   import { Pagination } from "@mui/material";
// import React, { useEffect, useState } from "react";
// import Card from "./Card"
// import Navbar from "./Navbar.js"


// const pageSize=6
// function HeroList(props) {
//   const [pagination,setpagination] =useState({
//     conut:0,
//     from:0,
//     to:pageSize
//   })
//   const [pagi,setPagi]=useState(true)
//   let data=props.heros.slice(pagination.from,pagination.to);

  
//   useEffect(()=>{
//   setpagination({...pagination,conut:props.heros.length})

//   },[pagination.from,pagination.to])

//     const detail=(id)=>{
//         props.herodetail(id)
//       }
//       const inputs=(input)=>{

//         props.input(input)
//         setPagi(false)
//       }


//       const handlePageChange=(event,page)=>{
//         const from=(page-1)*pageSize;
//         const to=(page-1)*pageSize+pageSize;
//         setpagination({...pagination,from:from,to:to})
//       }

//     return (
//       <div >
  
//         <Navbar input={inputs} />
//         <div className="herolist ml-2">
//           {

//               data.map((hero,index)=>{
//                   return <Card name={hero.name} path={hero.thumbnail.path} extension={hero.thumbnail.extension} id={index} detail={detail}/>
//               })
//           }
//           </div>
//           {pagi && <div className="d-flex justify-content-center">
//             <Pagination
//             count={Math.ceil(pagination.conut/pageSize)}
//             onChange={handlePageChange}/>
//           </div>}
//       </div>
//     );
//   }
  
//   export default HeroList;
  













//   import React from "react";
// import Card from "./Card"
// import Navbar from "./Navbar.js"

// function HeroList(props) {


//     const detail=(id)=>{
//         props.herodetail(id)
//       }
//       const inputs=(input)=>{
//         props.input(input)
//       }

//     return (
//       <div >
  
//         <Navbar input={inputs} />
//         <div className="herolist ml-2">
//           {

//               props.heros.slice(0,10).map((hero,index)=>{
//                   return <Card name={hero.name} path={hero.thumbnail.path} extension={hero.thumbnail.extension} id={index} detail={detail}/>
//               })
//           }
//           </div>

//       </div>
//     );
//   }
  
//   export default HeroList;
  