import { UserCard, UserCardHeader, UserCardBody } from "../components/UserCard";
import { withLoaderAndError } from "../components/withLoaderAndError";
import Theme from "../components/Theme";

const UserCardWithHOC = withLoaderAndError(UserCard);

export const Dashboard = () => {
  const fakeUser = { name: "Malik Dev", email: "malik@example.com" };

  return (
    <Theme>
      {({ dark, toggleTheme }: any) => (
        <div style={{ padding: "2rem" }}>
          <button onClick={toggleTheme}>
            Switch to {dark ? "Light" : "Dark"} Mode
          </button>

          <UserCardWithHOC user={fakeUser} loading={false} error="">
            <UserCardHeader />
            <UserCardBody />
          </UserCardWithHOC>
        </div>
      )}
    </Theme>
  );
};
