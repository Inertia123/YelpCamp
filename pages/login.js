import Authenticate from "../components/Authorization/Authenticate";

const login = () =>{
    return(
        <Authenticate 
        ctaBtn="Login"
        ctaPara="Not a user yet?"
        ctaLink="Create an account"
        />
    )
}

export default login