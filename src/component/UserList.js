import {Link} from "react-router-dom";

const UserList = (props) => {
    const data = props.users;

    return (
        <div className="container">
            <h3>Nguời Dùng</h3>
            <div className="row">
                { data.map((user, item) => {
                    return (
                       <div className="col-sm-3 m-2 p-2" key={user.id}>
                           <div className="card p-2 text-center">
                               <Link to={`/users/${user.id}`}>
                                   <h3 className="text-primary">{user.name}</h3>
                               </Link>
                               <b>{user.job}</b>
                               <strong className="text-success">{user.address}</strong>
                           </div>
                       </div>
                    )
                })}
            </div>
        </div>
    )
}

export default UserList
