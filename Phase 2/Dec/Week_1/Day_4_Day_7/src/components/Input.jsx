    function handleSubmit(e){
        e.preventDefault();
        alert("You Clicked Sumbit");
    }


const Input = () => {
    return (
        <>
        <div>
        <form onSubmit={handleSubmit}>
            <button type="submit">Submit</button>
            
        </form>
        </div>
        </>
    )
}

export default Input