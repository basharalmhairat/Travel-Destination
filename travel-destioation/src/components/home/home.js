import Header from "../header/header";
import Tours from "../tours/tours";
import Footer from "../footer/footer";
import data from "../data/db.json";  

function Home(props) {
    return (

        <>
            <Header />
            <Tours />
            <Footer />
            <Tours data={data} />
          

        </>

    );
}

export default Home;