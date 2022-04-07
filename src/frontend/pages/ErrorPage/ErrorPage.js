
import { useNavigate } from "react-router-dom"
import "./ErrorPage.css"
const ErrorPage = () =>{
    console.log("from error page")
 const navigate= useNavigate()
    return (
        <div className="error_page-heading">
            <h1 >Page Doesn't Exist.</h1><br/>
            <h3 className="link_to_home" onClick={()=>navigate("/home")}>GO BACK TO HOME PAGE</h3>

        </div>
    )
}
export {ErrorPage}