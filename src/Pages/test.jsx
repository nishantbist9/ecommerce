export const Test = () => {

    const testJsonData = {
        userId: 1,
        id: 1,
        title: "Sample Title",
        body: "Sample Body"
    };

    const arrayJsonData = [
        { id: 1, name: "Anjali", lastName: "Khadka" },
        { id: 2, name: "Amisha", lastName: "Khadka" },
        { id: 3, name: "Aayush", lastName: "Khadka" },
        { id: 4, name: "Aakash", lastName: "Khadka" }
    ];

    return (
        <>
            <h1>My User Title is</h1>
            <p>{testJsonData.title}</p>

            <h2>All Users (with index)</h2>
            {arrayJsonData.map((item, index) => (
                <div key={item.id}>
                    <p>{index + 1}. {item.name}</p>
                </div>
            ))}

            <h2>First 2 Users (slice)</h2>
            {arrayJsonData.slice(0, 2).map((item) => (
                <div key={item.id}>
                    <p>{item.name}</p>
                </div>
            ))}

            <h2>Filtered Users (id &gt; 2)</h2>
            {arrayJsonData
                .filter((item) => item.id > 2)
                .map((item) => (
                    <div key={item.id}>
                        <p>{item.name}</p>
                    </div>
                ))}
        </>
    );
};