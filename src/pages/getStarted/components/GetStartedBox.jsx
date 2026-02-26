import { useNavigate } from "react-router-dom";

function GetStartedBox()
{
    
    const navigate = useNavigate()
    return(

        <div className="getStarted-box">
            <button onClick={() => navigate("/main")}>
                <p>Get Started..</p>
            </button>
        </div>
    )
}


export default GetStartedBox;