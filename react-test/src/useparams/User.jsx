import { useParams } from "react-router-dom";

const User = () =>{

    const { userdetails} = useParams();
    return(
        <div>
            <h3>Username- {userdetails}</h3>
        </div>
    )
}
export default User;