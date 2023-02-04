
import Card from "./Card"
import Navbar from "./Navbar.js"

function HeroList(props) {
    const detail=(id)=>{
        props.herodetail(id)
      }
      const inputs=(input)=>{
        props.input(input)
      }

    return (
      <div >
  
        <Navbar input={inputs} />
        <div className="herolist ml-2">
          {
              props.heros.map((hero,index)=>{
                  return <Card name={hero.name} path={hero.thumbnail.path} extension={hero.thumbnail.extension} id={index} detail={detail}/>
              })
          }
          </div>
      </div>
    );
  }
  
  export default HeroList;
  