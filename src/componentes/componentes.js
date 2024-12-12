function Menu(){
    const estilo = {
        display:"flex",
        padding: "30px",
        color: "black",
        listStyleType: "none",
        alignItems: "baseline"

    }
    const elementos = {
        padding: "30px",
        alignItems: "baseline",
        fontSize: "25px",
        textDecoration: "none",
        color: "Black"

    }
    return(
        <nav style={estilo}>
            <h1 style={elementos}>Mauro Zamora Arce</h1>
            <li><a href="" style={elementos}>Informacion Personal</a></li>
            <li><a href="" style={elementos}>Habilidades</a></li>
            <li><a href="" style={elementos}>Hobbies</a></li>
        </nav>
    )
}
export default Menu