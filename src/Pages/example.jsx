import { useEffect, useState } from "react";

function Customers() {
    const [users, setUsers] = useState([]);

   
    const customUsers = [
        {
            id: "101",
            name: "Amisha Khadka",
            address: { city: "Kathmandu" },
            phone: 9839393993,
        },
        {
            id: "102",
            name: "Anjali Khadka",
            
            address: { city: "Pokhara" },
            phone: 87236733873,
        },
        {
            id: "103",
            name: "Aakash Khadka",
            address: { city: "Dhading" },
            phone: 9837373773,
        },
        {
            id: "104",
            name: "Aayush Khadka",
            address: { city: "Dhangadhi" },
            phone: 43221118,
        },
        {
            id: "105",
            name: "Tanuja Khadka",
            address: { city: "Mumbai" },
            phone: 1628388383,
        },
        {
            id: "106",
            name: "Brija Bahadur Khadka",
            address: { city: "Pokhara" },
            phone: 4364747747,
        },
        {
            id: "107",
            name: "Laxman Khadka",
            address: { city: "Japan" },
            phone: 992222222,
        },
        {
            id: "108",
            name: "Neelam Khadka",
            address: { city: "Auckland" },
            phone: 6,
        },
    ];

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((apiData) => {
                setUsers([...apiData, ...customUsers]);
            })
            .catch((err) => console.error(err));
    }, []);

    return (
        <div style={{ padding: "20px" }}>
            <h1>All Customers</h1>

            {users.length === 0 ? (
                <p>Loading...</p>
            ) : (
                users.map((user) => (
                    <div
                        key={user.id}
                        style={{
                            border: "1px solid #ccc",
                            padding: "10px",
                            marginBottom: "10px",
                            borderRadius: "8px",
                        }}
                    >
                        <h3>{user.name}</h3>
                        <p>
                            Address:{" "}
                            {typeof user.address === "object"
                                ? user.address.city
                                : user.address}
                        </p>
                        <p>Phone: {user.phone}</p>
                        {user.email && <p>Email: {user.email}</p>}
                    </div>
                ))
            )}
        </div>
    );
}

export default Customers;