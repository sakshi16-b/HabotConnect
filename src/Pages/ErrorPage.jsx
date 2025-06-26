import { NavLink,useRouteError} from "react-router-dom"

function ErrorPage(){
 const error=useRouteError()
    console.log(error)
    return(<>
        <h1>Oops! Error Occured</h1>
        {error && <p>{error.status}</p>}
        <NavLink to="/"> <button>Go Home</button></NavLink>  

        </>
        
    )
}
export default ErrorPage;