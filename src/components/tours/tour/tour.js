function Tour(props) {

    return (
        <>
            {props.data.map((det,idx) => {
                return (
                    <div key={idx}> 
                        <img src={det.image} alt={det.name} />
                        <h3>Name : {det.name}</h3>
                        
                    </div>
                );
            })}
        </>
    );
}

export default Tour;