function Son(props) {
    return (
        <>
            <p>This is Son Component</p>
            <p>Message from Parent: {props.message}</p>
        </>
    );
}

function Daughter(props) {
    return (
        <>
            <p>This is Daughter Component</p>
            <p>Message from Parent: {props.message}</p>
        </>
    );
}

const 
Props_1 = () => {
    return (
        <>
            <div>
                <Son message="Hello Son!" />
                <Daughter message="Hello Daughter!" />
            </div>
        </>
    );
}

export default Props_1;