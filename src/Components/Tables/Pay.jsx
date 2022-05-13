import { useState, useEffect } from "react";
import axios from "axios";
import Search from "../Search";
import swal from "sweetalert";

export default function Pay() {
  const [toggleTask, setToggleTask] = useState(false);

  //listPay
  const [listPay, setListPay] = useState([]);

  //listBus
  const [listPaySave, setListPaySave] = useState([]);


  

  //search
  const [searchKey, setSearchKey] = useState("");




  useEffect(() => {
    axios
      .get(`http://localhost:8080/chuyenxe`)
      .then((res) => {
        setListPay(res.data)
        setListPaySave(res.data)
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

 //delete item
 const handleDelete=(value)=>{
  swal({
    title: `Bạn có muốn xóa chuyến xe số ${value.id}?`,
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
        axios.delete(`http://localhost:8080/chuyenxe/${value.id}`,{data : value})
          .then(res=>{
              console.log(res);
              })
          .catch(err=>{
              console.log(err);
          })
      swal("Đã xóa thành công!", {
        icon: "success",
      });
      setTimeout(() => {
        window.location.reload();
      }, 1600);
    } 
  });
}



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
        className="card shadow mb-4 show"
      >
        <div className="card-header py-3 d-flex justify-content-between">
          <h6 className="m-0 font-weight-bold text-primary">DataTables Pay</h6>
          
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
                  <th>ID chuyến</th>
                  <th>Tên khách hàng</th>              
                  <th>Điểm đi</th>
                  <th>Điểm đến</th>
                  <th>Loại phương tiện</th>
                  <th>Giá (đ)</th>
                  <th>Trạng thái </th>
                  <th>Button </th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                   <th>ID chuyến</th>
                  <th>Tên khách hàng</th>              
                  <th>Điểm đi</th>
                  <th>Điểm đến</th>
                  <th>Loại phương tiện</th>
                  <th>Giá (đ)</th>
                  <th>Trạng thái </th>
                  <th>Button </th>
                </tr>
              </tfoot>
              <tbody>
                {listPay.length !== 0 ? (
                  listPay.map((item,key) =>
                    <tr key={key}>
                      <td>{item.id}</td>
                      <td>{item.tenkhachhang}</td>
                      <td>{item.diemdi}</td>
                      <td>{item.diemden}</td>
                      <td>{item.phuongtien}</td>
                      <td>{item.gia}</td>
                      <td>{item.trangthai}</td>
                      <td>
                          <input
                          className="btn btn-danger"
                          type="button"
                          onClick={()=>handleDelete(item)}
                          defaultValue="Delete"
                        />
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
