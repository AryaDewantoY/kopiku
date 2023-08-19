import { useEffect } from "react";
import { Navigate } from "react-router-dom";


function Protected(props) {
let Cmp = props.Cmp;
useEffect(() => {
    if (!localStorage.getItem("user-info")) {
        Navigate("/register");
    }
}, [])
    return (
        <div>
          <Cmp />
            </div>
    )
} 

export default Protected;