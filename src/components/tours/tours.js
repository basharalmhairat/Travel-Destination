function Tours(props) {

    return (
        <>
            {props.data.map((des,idx) => {
                return (
                    <div key={idx}> 
                        <h4>ID : {des.id}</h4>
                        <p>info : {des.info}</p>
                    </div>
                );
            })}
        </>
    );
}

export default Tours;