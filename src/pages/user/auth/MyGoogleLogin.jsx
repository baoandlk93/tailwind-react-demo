import {GoogleLogin, GoogleOAuthProvider} from "@react-oauth/google";
import {clientId} from "../../../utility/AppConstant.js";
import {useDispatch} from "react-redux";
import {loginWithGoogle} from "../../../redux/features/UserSlice.js";

function MyGoogleLogin() {
    const dispatch = useDispatch();
    return (
        <>
            <div className="mt-10 flex items-center justify-center text-center gap-1">
                <GoogleOAuthProvider clientId={clientId}>
                    <GoogleLogin
                        onSuccess={(response) => {
                            console.log(response)
                            dispatch(loginWithGoogle(response))
                        }}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                    />
                </GoogleOAuthProvider>
            </div>
        </>
    )
}

export default MyGoogleLogin;