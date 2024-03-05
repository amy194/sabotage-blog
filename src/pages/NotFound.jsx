import {NavLink} from "react-router-dom"
import {useEffect} from "react"
import {useNavigate} from "react-router-dom"
const NotFound = () => {
    
    const navigate = useNavigate()
    
 useEffect(() => {
     
     setTimeout(() => {
       
         navigate("/") 
         
     },5000)
     
 }, [])
    
    return( 
        <span> Page d'erreur </span>
        )
}

export default NotFound;