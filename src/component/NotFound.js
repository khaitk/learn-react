import {Link} from "react-router-dom";

const NotFound = () =>{
    return (
        <>
            <div className="container">
                <div className="col-sm-12 col-sm-6 col-sm-3">
                    Vui lòng thử lại. Hiện tại trang bạn cần không có.
                    <Link to="/">Quay Lại</Link>
                </div>
            </div>
        </>
    )
}

export default NotFound