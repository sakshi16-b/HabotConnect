import data from "../api/data.json"

export const Provider = () => {
    console.log(data); // should be an array of 7 objects

    return (
        <>
            <h1>Provider</h1>
        </>
    )
}