import List from "./components/List";
import Table from "./components/Table";

const App = () => {

  const todos = ["Learn React", "Build Reusable Components", "Use Formik + Yup"];

  const columns = [
    { header: "Name", accessor: "name" },
    { header: "Email", accessor: "email" },
    { header: "Role", accessor: "role" },
  ];

  const data = [
    { name: "Ali", email: "ali@gmail.com", role: "Admin" },
    { name: "Malik", email: "malik@gmail.com", role: "User" },
    { name: "Hassan", email: "hassan@gmail.com", role: "Manager" },
  ];

  return (
    <>
      <div className="p-10">
        <h1 className="text-2xl font-bold mb-4">User Table</h1>
        <Table columns={columns} data={data} />
      </div>

      <div className="p-10 space-y-6">
        <h1 className="text-2xl font-bold">Todo List</h1>
        <List items={todos} />
      </div>
    </>
  );
};

export default App;
