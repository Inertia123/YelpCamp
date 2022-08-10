import Authenticate from "../components/Authorization/Authenticate"

const signup = () =>{
    return(
        <Authenticate  
        ctaBtn="Create an account"
        ctaPara="Already a user?"
        ctaLink="Sign In"
         />
    )
}

export default signup