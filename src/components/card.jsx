const cards =(props)=>{

    return   <div className="cardDiv">
    <h1>{props.name}</h1>
    <p>{props.description}</p>
    <h1>{props.character}</h1>
    <img src={props.image} alt={props.name}/>

    <button onClick={()=>props.action(props.name,props.character)} >button</button>
   </div>
}

export default cards