function Props_3(props) {
    const sum = props.num1 + props.num2;
    return (
        <>
            <div>
                <p>Name: {props.names}</p>
                <p> {sum}</p>
            </div>
        </>
    )
}

export default Props_3;