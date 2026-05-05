import type { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import { MouseTracker } from "./Mouse";
import { FetchData } from "./FetchData";

export default function App() {
  return (
    <>
    <div style={{ padding: 20 }}>
      <h2>Render Props Example</h2>

      <MouseTracker
        render={(pos: { x: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; y: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }) => (
          <p>Mouse is at X: {pos.x}, Y: {pos.y}</p>
        )}
      />

      <MouseTracker
        render={(pos: { x: any; y: any; }) => (
          <div
            style={{
              position: "absolute",
              left: pos.x,
              top: pos.y,
              width: 20,
              height: 20,
              background: "red",
              borderRadius: "50%",
            }}
          ></div>
        )}
      />
    </div>
    <div style={{ padding: "40px" }}>
      <h2>Render Props Example – Fetch Data</h2>

      {/* 1st use: show as list */}
      <FetchData
        url="https://jsonplaceholder.typicode.com/users"
        render={(data, loading, error) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error: {error}</p>;
          return (
            <ul>
              {data.map((user) => (
                <li key={user.id}>{user.name}</li>
              ))}
            </ul>
          );
        }}
      />

      {/* 2nd use: show as table */}
      <FetchData
        url="https://jsonplaceholder.typicode.com/users"
        render={(data, loading, error) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error: {error}</p>;
          return (
            <table cellPadding="5">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {data.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          );
        }}
      />
    </div>
    </>
  );
}
