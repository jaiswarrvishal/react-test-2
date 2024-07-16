 const Mappings = ({teama}) => {
    console.log(teama)
    return(
        <div>
            <h2>Mappings</h2>
            <div>
                {teama.map((team)=>(
                    <h3>{team}</h3>
                ))}
            </div>
        </div>
    )
 }
 export default Mappings;
 