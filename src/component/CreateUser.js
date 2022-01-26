import {useState} from "react";

const CreateUser=() => {

    const [name, setName ] = useState();
    const [address, setAddress] = useState();
    const [job, setJob] = useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();


    const CreateData = (e) => {
        e.preventDefault()
        const data = {name,phone, email, address, job}
        fetch('http://localhost:8000/users', {
            method : 'POST',
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify(data)
        }).then(() => {
            alert("Đã Thêm Thành Công")
        })
    }

    return (
        <>
            <h1>Đăng Ký</h1>
            <div className="row justify-content-center">
                <div className="col-sm-9">
                    <form onSubmit={CreateData}>
                        <div className="form-group row">
                            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Họ Tên : </label>
                            <div className="col-sm-10">
                                <input type="text"  className="form-control" onChange={(e) => setName(e.target.value)}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email : </label>
                            <div className="col-sm-10">
                                <input type="email"  className="form-control" onChange={(e) => setEmail(e.target.value)} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Số điện thoại : </label>
                            <div className="col-sm-10">
                                <input type="text"  className="form-control" onChange={(e) => setPhone(e.target.value)} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Địa chỉ : </label>
                            <div className="col-sm-10">
                                <input type="text"  className="form-control" onChange={(e) => setAddress(e.target.value)} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Công Việc : </label>
                            <div className="col-sm-10">
                                <input type="text"  className="form-control" onChange={(e) => setJob(e.target.value)} />
                            </div>
                        </div>
                        <button className="btn btn-success">Thêm</button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default CreateUser