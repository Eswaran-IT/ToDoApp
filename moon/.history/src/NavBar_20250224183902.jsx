export default function NavBar(){
    let icon_name='Eswaran Suyamprakasam';
    let nav_items=['About','Services','Skills','Projects','Contact'];
    return(
        <div>
            <nav className=""> 
                <a>{icon_name}</a>
                <div>
                    <li>{nav_items.map()}</li>
                </div>
            </nav>
        </div>
    )
}