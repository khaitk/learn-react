import {useParams, useNavigate} from "react-router-dom";
import ApiGetData from "../Api/ApiGetData";
import {useState} from "react";

const UsersDetails = () => {
    const {id} = useParams();
    const navigation = useNavigate();

    const [name, setName] = useState();
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [address, setAddress] = useState()
    const [job, setJob] = useState()

    const {data:users, error, isPending} = ApiGetData('http://localhost:8000/users/' + id)

    const onDelete = (e) => {
        e.preventDefault()
        fetch('http://localhost:8000/users/' + id, {
            method : "DELETE"
        }).then(() => {
            navigation('/')
        })
    }


    return (
        <>
            {isPending && <div>Loading...</div>}
            {users && (
               <>
                   <div className="row justify-content-center">
                        <div className="col-sm-6">
                            <h2>Thông tin cá nhân</h2>
                            <br/>

                            < b className="text-primary">{users.name}</b>
                            <h5>{users.phone}</h5>
                            <h5>{users.email}</h5>
                            <h5>{users.address}</h5>
                            <h5>{users.job}</h5>
                            <button className="btn btn-danger ml-5" onClick={onDelete}>Xóa</button>
                        </div>
                   </div>
               </>
            )}

        </>
    )
}

export default UsersDetails