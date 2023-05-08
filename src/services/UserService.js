import React ,{useState,useEffect} from 'react';


function UserService(){


    const[sigin,setSignin] = useState([]);

    // SignIn....

    const UserSignInService = async (userName , password)=>{
        try{
            const response = await fetch (`http://localhost:8095/profile-management/v1/user/signIn?password=${password}&userName=${userName}`,{
                method: 'POST'});

            let data = await response.json();
            setSignin(data);
        
        }
        catch(e){
            console.log(e);
        }
 

    }

    //Edit User ...
    



}


export default UserService;