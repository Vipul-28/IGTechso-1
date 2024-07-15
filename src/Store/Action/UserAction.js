export const USER_SHOW="USER_SHOW";
export const DELETE_USER="DELETE_USER";
export const showUSer=()=> async(dispatch) =>{
        try {
            const res= await fetch("https://jsonplaceholder.typicode.com/users");
            if(!res.ok)
               throw new Error("!Error in Api")
            const data=await res.json();
            dispatch({
                type:USER_SHOW,
                data:data
            })
        }
        catch (error){
            throw new Error("!Error in Api")
        }
}
export const deleteUser=(email)=>(dispatch)=>{
    dispatch({
        type:DELETE_USER,
        data:email
    })
}