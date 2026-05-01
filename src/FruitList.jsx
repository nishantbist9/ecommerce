import React from "react";

function FruitList() {
    const fruits = [
        { name: "Apple", description: "A sweet red fruit" },
        { name: "Banana", description: "A tropical yellow fruit" },
        { name: "Cherry", description: "A small, round fruit" },
    ];

    return (
        <div>
            {fruits.map((fruit, index) => (
                <React.Fragment key={index}>
                    <h3>{fruit.name}</h3>
                    <p>{fruit.description}</p>
                </React.Fragment>
            ))}
        </div>
    );
}

export default FruitList;