import { Dropdown } from "./components/Dropdown/Dropdown";
import { DropdownToggle } from "./components/Dropdown/DropdownToggle";
import { DropdownMenu } from "./components/Dropdown/DropdownMenu";
import { DropdownItem } from "./components/Dropdown/DropdownItem";

function App() {
  return (
    <div style={{ padding: "50px" }}>
      <h2>Compound Components Example</h2>
      <Dropdown>
        <DropdownToggle />
        <DropdownMenu>
          <DropdownItem>Profile</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Logout</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

export default App;
