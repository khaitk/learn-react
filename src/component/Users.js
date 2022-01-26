import ApiGetData from "../Api/ApiGetData";
import UserList from "./UserList";

const Users =() =>{

    const {data :users , error, isPending} = ApiGetData('http://localhost:8000/users')
    //console.log(data)
    return (
        <div>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            { users && <UserList users = {users} />}
        </div>
    )
}

export default Users