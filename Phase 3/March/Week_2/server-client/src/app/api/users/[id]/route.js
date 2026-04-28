// users dummy data
let users = [
    {id : 1, name : "Raza"},
    {id : 2, name : "Usman"}
]


// Update Route Update the Data

export async function PUT(req, { params }) {
    const { id } = params;
    const userData = await req.json();

    const user = users.find((u) => u.id == id);

    if (user) {
        user.name = userData.name;
    }

    return Response.json(user);
}

// DELETE function del the user
export async function DELETE(req,{params}){
const  {id } = params;
users = users.filter((u) => u.id != id);
return Response.json({message : "User Deleted"})
}