import Tours from "../tours/tours";
import data from "../../data/db.json"; 
function Home() {
    return (

        <>
            <Tours data={data} /> 
            
 

        </>

    );
}

export default Home;