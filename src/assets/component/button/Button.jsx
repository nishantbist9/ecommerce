export const Button = ({title,onClick})=>{
    return(
        <>
        {/* <button>Hello this is clickable button.</button> */}
        <button onClick={onClick}>{title}</button>
        </>
    )
}