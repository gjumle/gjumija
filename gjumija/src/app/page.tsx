import { useEffect, useState } from "react";

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold">User List</h1>
      <ul className="mt-4">
        {users.map((user) => (
          <li key={user.id} className="text-lg">{user.name} ({user.email})</li>
        ))}
      </ul>
    </div>
  );
}
