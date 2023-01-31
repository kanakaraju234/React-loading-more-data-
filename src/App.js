import { useEffect, useState } from "react";

import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(5);
  useEffect(() => {
    fetch(
      `https://63cbc59fea85515415151e41.mockapi.io/api/v1/users?page=1&limit=` +
        limit
    )
      .then((data) => data.json())
      .then((data) => setData(data));
  }, [limit]);

  const loadMoreUsers = () => {
    setLimit(limit + 5);
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <div className="usersList">
        {data.map((user) => {
          return (
            <div key={user.id} className="usersInfo">
              <img src={user.avatar} alt={user.name} />
              <span>{user.name}</span>
            </div>
          );
        })}
      </div>
      <hr />
      <button onClick={() => loadMoreUsers(5)}>Load More </button>
    </div>
  );
}
