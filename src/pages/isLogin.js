import {selectUser} from '../redux/userSlice'
import {selectTempUser} from '../redux/temploginSlice'
import { useHistory } from "react-router-dom";
import {useSelector} from "react-redux"


 const LoggedIn = () => {
    const history = useHistory();
    const user = useSelector(selectUser);
    const tempuser = useSelector(selectTempUser);

    function login(){
        if (user.loggedIn=== true || tempuser.loggedIn===true) {
            return true;
        }else{
            return false;
        }
    }
   
    if (!login()) {
        history.push("/Login");
    }
}

export default LoggedIn