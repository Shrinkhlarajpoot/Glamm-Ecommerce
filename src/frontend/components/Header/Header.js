import "./Header.css";
import {Link} from "react-router-dom";
import { useState } from "react";
const Header=()=>{
  const[resnav,setResnav]=useState(false)

    return(
      <div>
          <header className="header">
            <div className="logo__main"><Link to="/" className="Link_style">GLAM</Link></div>
            <div className="header__items">
               <li className={resnav?"fa fa-close closeicon Link_style":"fas fa-bars Link_style"} id="menu__bar" 
               onClick={()=>setResnav(()=>!resnav)}></li>
            <ul className="header__list" >
                <li ><Link to="/products" className="Link_style">Products</Link></li>
                <li><Link to="/cart" className="Link_style"><i className="fas fa-shopping-cart "><div className="items__no">5</div></i></Link></li>
                <li ><Link to="/wishlist" className="Link_style"><i className="fas fa-heart"><div className="items__no">2</div></i> </Link></li>
                <li ><Link to="/login" className="Link_style"><i className="fas fa-user"></i></Link></li>
                </ul>
            </div>
           
         </header>
         {resnav && 
          <div className="responsive__nav">
             <Link to="/" className="Link_style">Home</Link>
             <Link to="/products" className="Link_style">Products</Link>
             <Link to="/cart" className="Link_style">Wishlist</Link>
             <Link to="/wishlist" className="Link_style">Cart</Link>
             <Link to="/login" className="Link_style">Login</Link>
         </div> 
}
     </div> 
    
   
    )
}
export {Header}