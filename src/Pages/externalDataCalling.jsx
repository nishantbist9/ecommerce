import { useEffect, useState } from "react";

function ExternalApiDataFetch() {
    const [users, setUsers] = useState([]);

   
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => setUsers(data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div style={{ padding: "20px" }}>
            <h1>Users from API</h1>
            {users.length === 0 ? (
                <p>Loading...</p>
            ) : (
                users.map((user) => (
                    <div
                        key={user.id}
                        style={{
                            border: "1px solid gray",
                            margin: "10px",
                            padding: "10px"
                        }}
                    >
                        <h3>{user.name}</h3>
                        <p>Email: {user.email}</p>
                        <p>Username: {user.username}</p>
                    </div>
                ))
            )}
        </div>
    );
}

export default ExternalApiDataFetch;