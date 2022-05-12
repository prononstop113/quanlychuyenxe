import { useState, useEffect } from "react";
import axios from "axios";
import Search from "../Search";

export default function Pay() {
  const [toggleTask, setToggleTask] = useState(false);

  //listPay
  const [listPay, setListPay] = useState([]);

  //listBus
  const [listPaySave, setListPaySave] = useState([]);

  //luong
  const pay = {
    laixe : 1000000,
    phuxe : 500000
  }

  //do phuc tap
  const complexity ={
    small : 1,
    medium : 1.1,
    high : 1.3,

  }

  //search
  const [searchKey, setSearchKey] = useState("");

  //lay truong input
  const handleAdd = () => {
    setToggleTask(!toggleTask);
  };

  const handleClose = () => {
    setToggleTask(!toggleTask);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/driver/checkPay`)
      .then((res) => {
        setListPay(res.data)
        setListPaySave(res.data)
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);



  //Search
  const actionSearch = (e) => {
    const value = e.target.value;
    const search = new RegExp(value, "i");
    setSearchKey(search);
  };

  const handleSearch = () => {
    // console.log(searchKey);
    setListPay(listPaySave.filter((item) => item[1].match(searchKey)));
  };

  return (
    <div className="container-fluid">
      {/* Page Heading */}
       
      <div className="d-sm-flex d-flex justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Bảng cơ sở dữ liệu tính lương</h1>
        {/* Topbar Search */}
        <Search actionSearch={actionSearch} handleSearch={handleSearch} />
        {/* Topbar Navbar */}
      </div>
      <div
        className={
          !toggleTask ? "card shadow mb-4 close-form" : "card shadow mb-4 show"
        }
      >
        
        <div className="card-header py-3 d-flex justify-content-center ">
          <div className="form w-100" >
            <div className="row info">
              <div className="col-3">
                <h4>Thông tin lương</h4>
                <p>Lái xe : {pay.laixe} đ</p>
                <p>Phụ xe : {pay.phuxe} đ</p>
              </div>
              <div className="col-3">
                <h4>Độ phức tạp</h4>
                <p>Small : {complexity.small}</p>
                <p>Medium : {complexity.medium}</p>
                <p>High : {complexity.high}</p>
              </div>
              <div className="col-3">
                <h4>Hệ số nhân</h4>
                <p>Trung bình độ phức tạp của các chuyến xe mà lái xe/phụ xe tham gia</p>
              </div>
              <div className="col-3">
                <h4>Thâm niên</h4>
                <p>Dưới 3 năm: 1.05</p>
                <p>Từ 3 đến 5 năm : 1.1</p>
                <p>Từ 6 đến 8 năm : 1.2</p>
                <p>Trên 8 năm : 1.3</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          !toggleTask
            ? "card shadow mb-4 animation-pay"
            : "card shadow mb-4 table-show"
        }
      >
        <div className="card-header py-3 d-flex justify-content-between">
          <h6 className="m-0 font-weight-bold text-primary">DataTables Pay</h6>
          <button
            className={!toggleTask ? "btn btn-info" : "d-none"}
            onClick={handleAdd}
          >
            Thông tin
          </button>
          <button
            className={toggleTask ? "btn btn-secondary" : "d-none"}
            onClick={handleClose}
          >
            Close
          </button>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellSpacing="0"
            >
              <thead>
                <tr>
                  <th>Họ tên</th>
                  <th>Thâm niên</th>              
                  <th>Hệ số nhân phụ xe</th>
                  <th>Số lần phụ xe</th>
                  <th>Hệ số nhân lái xe</th>
                  <th>Số lần lái xe</th>
                  <th>Lương (đ)</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Họ tên</th>
                  <th>Thâm niên</th>              
                  <th>Hệ số nhân phụ xe</th>
                  <th>Số lần phụ xe</th>
                  <th>Hệ số nhân lái xe</th>
                  <th>Số lần lái xe</th>
                  <th>Lương (đ)</th>
                </tr>
              </tfoot>
              <tbody>
                {listPay.length !== 0 ? (
                  listPay.map((item,key) =>
                    <tr key={key}>
                      <td>{item[1]}</td>
                      <td>{item[2]}</td>
                      <td>{item[3].toFixed(2)}</td>
                      <td>{item[4]}</td>
                      <td>{item[5].toFixed(2)}</td>
                      <td>{item[6]}</td>
                      <td>
                        {
                          item[2] <= 2 ? (
                            (((item[3].toFixed(2) * pay.phuxe ) + (item[5].toFixed(2) * pay.laixe ))*1.05).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                          ) : item[2] <= 5 ? (
                            (((item[3].toFixed(2) * pay.phuxe) + (item[5].toFixed(2) * pay.laixe  ))*1.1 ).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                          ) : item[3] <= 8 ? (
                            (((item[3].toFixed(2) * pay.phuxe) + (item[5].toFixed(2) * pay.laixe  ))*1.2).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") 
                          ) : (
                            (((item[3].toFixed(2) * pay.phuxe) + (item[5].toFixed(2) * pay.laixe  ))*1.3).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") 
                          )
                        }
                      </td>
                    </tr>
                  )
                ) : (
                  <tr>
                    <td>No item in table</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
