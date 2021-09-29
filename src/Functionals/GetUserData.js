import {useSelector} from "react-redux"
import {selectUser} from '../redux/userSlice'
import {selectTempUser} from '../redux/temploginSlice'



const GetUserData = () => {
    const user = useSelector(selectUser);
    const tempuser = useSelector(selectTempUser);
    var data=user;

    if (user.loggedIn=== true){
        data=user        
    }else if (tempuser.loggedIn=== true){
        data=tempuser
    }
    return data; 
}

export default GetUserData;