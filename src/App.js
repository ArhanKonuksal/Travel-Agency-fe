import "./App.css";
import getUsers from "../src/services/getUsers";
import useAPI from "../src/effects/useAPI";

function App() {
  const [usersLoading, usersError, usersResponse] = useAPI(() => getUsers());

  if (usersLoading) {
    <h1>Loading...</h1>;
  }
  if (usersError) {
    <h1>Error...</h1>;
  }

  const { users } = usersResponse;
  return (
    <div className="App">
      <table>
        <tbody>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
          {users?.map((user, index) => {
            return (
              <tr key={index}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
