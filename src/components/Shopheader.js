function Header(){
    const myStyle={
        color:"green",
        backgroundColor:"black"
    }
    return(
        <div class="bg-dark text-center text-light p-3">
            <h1 style={{color:"red"}}>Shoppy Website</h1>
            <h2 style={myStyle}>Low cost... more products</h2>
            <p>Explore more... various products</p>
        </div>
    )
}
export default Header;