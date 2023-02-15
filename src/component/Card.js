import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function Card(props) {
        const url=props.path + "." + props.extension
        const navigate = useNavigate();

    return (

      <>
      <div className="card mb-3 ml-2" style={{maxWidth:"540px"}} >
  <div className="row g-0">
    <div className="col-md-4">
      <img src={url} className="img-fluid rounded-start hover" alt="..."  onClick={()=>{props.detail(props.id); navigate("/detail"); toast.info(`here is the ${props.name}`,{
                        position:"top-right",
                    })}}/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
      </>
      
      
    );
  }
  
  export default Card;

