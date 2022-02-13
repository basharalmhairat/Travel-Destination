function Tours(props) {

    return (
        <>
            {props.data.map(des => {
                return (
                    <div>
                        <img src={des.image} alt={des.name} />
                        <h3>Name : {des.name}</h3>
                    </div>
                );
            })}
        </>
    );
}

export default Tours;