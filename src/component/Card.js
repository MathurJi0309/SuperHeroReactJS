


function Card(props) {
    console.log('props',props.path )
        const url=props.path + "." + props.extension
    console.log("url",url)
    return (
        <div className="container" >
            <div className="card" style={{width:"15rem"}}>
        <img src={url} className="card-img-top" alt="..."/>
        <div className="card-body">
          <p className="card-text">{props.name}</p>
        </div>
      </div>
        </div>

    // <div className="">
    //     <h1>
    //         name:{props.name}
    //     </h1>
    // </div>
    );
  }
  
  export default Card;