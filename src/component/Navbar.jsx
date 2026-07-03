import { Link } from "react-router-dom";

function Navbar(){

return(

<nav style={styles.nav}>

<h2>Safety Gear Shop</h2>

<div>

<Link style={styles.link} to="/">
Home
</Link>

<Link style={styles.link} to="/login">
Login
</Link>

<Link style={styles.link} to="/register">
Register
</Link>

</div>

</nav>

);

}

const styles={

nav:{
display:"flex",
justifyContent:"space-between",
padding:"15px 40px",
background:"#aa550f",
color:"white"
},

link:{
margin:"10px",
color:"white",
textDecoration:"none"
}

};

export default Navbar;