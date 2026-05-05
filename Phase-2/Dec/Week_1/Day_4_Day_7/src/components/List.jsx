
const List = () => {

  let users = ['User1', 'User2', 'User3', 'User4']
  return (
    <>
      <div>
        
          {users.map((user, index) => (
  <p key={index}>{user}</p>
))}

      </div>
    </>
  )
}

export default List