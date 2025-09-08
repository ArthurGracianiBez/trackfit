import { Link, Outlet } from "react-router-dom";

export function Layout(){
    return(
        <>
        <nav style={{
            border: "1px solid #6d6d6d",
            backgroundColor: "#727272",
            width: "80%",

        }}>
            <Link to="/" style={{border: "1px solid #5a5a5a",
                marginLeft: "2rem",
                backgroundColor: "##949494",
                padding: "2px",
                color: "#fff",

            }}>Home</Link>
            
            <Link to="/add" style={{border: "1px solid #5a5a5a",
               backgroundColor: "##949494",
               padding: "2px",
               color: "#fff",
               marginLeft: "2rem"
            }}>Novo Treino</Link>
        </nav>
        <Outlet />
        </>
    );
}