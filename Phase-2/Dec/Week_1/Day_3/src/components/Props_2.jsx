function Gereet ({ name }) {
    return <p>Hello, {name}</p>
}


function Props_2 () {
    return (
        <>
        <div>
            <Gereet name = "Raza"/>
            <Gereet name= "Muzamil"/>
        </div>
        
        </>
    )
}


export default Props_2;