// Dummy user

let users = [
    {id : 1, name : "Raza"},
    {id : 2, name : "Usman"}
]

// Get function Show all users
export async function GET(){
    return Response.json(users);
}

// Post function get the data from user
export async function POST(req){
    const userData = await req.json();
    
    const newUser = {
        id: users.length + 1,
        name: userData.name
    };
    
    users.push(newUser);
    
    return Response.json(newUser, { status: 201 });

}