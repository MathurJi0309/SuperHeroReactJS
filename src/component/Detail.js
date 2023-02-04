function Detail (props){
    const url=props.paths.path + "." + props.paths.extension
    return (
        <>
        <div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={url} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.dis}</p>
        <p className="card-text"><small className="text-muted">Hero-Id-{props.id}</small></p>
        <p><b>Series-Publish</b> -{props.series.available}</p>
        <p><b>Comics available</b>-{props.stories.available}</p>

      </div>

    </div>
  </div>
</div>

        </>
    )
}

export default Detail