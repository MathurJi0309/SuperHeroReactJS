

function Navbar(props) {
    return (
       <>
        <nav className="navbar bg-body-tertiary justify-content-center">
  <div className="container-fluid">
    <form className="d-flex" role="search">
      <input 
      className="form-control me-2" 
      type="search" 
      placeholder="Search you hero" 
      aria-label="Search"
      onChange={(e)=>props.input(e.target.value)
    }
      />
    </form>
  </div>
</nav></>
    );
  }
  
  export default Navbar;