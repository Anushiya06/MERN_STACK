const Gallery=(props)=>{
    return(
        <div>
            <h2>
                Welcome to {props.page} page
            </h2>
            <img src="sece.png" alt="SECE Logo"></img>
            <h3> This is {props.img}</h3>
        </div>
    )
}

export default Gallery