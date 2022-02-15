import { Link } from "react-router-dom";
import Tour from "./tour/tour";

function Tours(props) {

    return (
        <>
            {props.data.map((des,idx) => {
                return (
                    <div key={idx}> 
                       <Link to= {`/city/${des.id}`}>
                           <Tour tour={des}/></Link>
                    </div>
                );
            })}
        </>
    );
}

export default Tours;