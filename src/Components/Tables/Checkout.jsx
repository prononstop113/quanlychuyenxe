import { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

export default function Pay() {
  const [toggleTask, setToggleTask] = useState(false);

  //listPay
  const [listPay, setListPay] = useState([]);

  //listBus
  const [listPaySave, setListPaySave] = useState([]);

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/user/confirm`; 
    navigate(path);
  }

  const routeChange2 = () =>{ 
    let path = `/user/booking`; 
    navigate(path);
  }





  useEffect(() => {
    axios
      .get(`http://localhost:8080/chuyenxe/booked`)
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
    title: `Bạn có muốn hủy chuyến xe số ${value.id}?`,
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
        routeChange2()
      }, 1600);
    } 
  });
}

const handleBook=(value)=>{
  value.trangthai="Paid"
  axios.put(`http://localhost:8080/chuyenxe/${value.id}`,value)
  swal("Thanh toán thành công!", {
    icon: "success",
  });
  setTimeout(() => {
    routeChange()
  }, 1600);
}


  
  return (
    <div className="container-fluid">
      {/* Page Heading */}

      <div
        className="card shadow mb-4 show"
      >
        <div className="card-header py-3 d-flex justify-content-between">
          <h6 className="m-0 font-weight-bold text-primary">Checkout</h6>
          
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
                          className="btn btn-success"
                          type="button"
                          onClick={()=>handleBook(item)}
                          defaultValue="Book"
                          style={{ marginRight: "1rem" }}
                        />
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
                    <td>Bạn cần phải đặt chuyến trước đã !</td>
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
