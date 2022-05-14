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
//
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/user/Pay`; 
    navigate(path);
  }
//
  const [field,setField] = useState({
    id : "",
    tenkhachhang : "",
    diemdi : "",
    diemden:"",
    phuongtien:"",
    gia:"",
    trangthai:""
  });





  useEffect(() => {
    axios
      .get(`http://localhost:8080/chuyenxe/paid`)
      .then((res) => {
        setListPay(res.data)
        setListPaySave(res.data)
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


const handleBook=(value)=>{
  swal({
    title: `Bạn xác nhận chuyến ${value.id} đã hoàn thành ?`,
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willUpdate) => {
    if (willUpdate) {
        value.trangthai="Done"
        axios.put(`http://localhost:8080/chuyenxe/${value.id}`,value)
          .then(res=>{
              console.log(res);
              })
          .catch(err=>{
              console.log(err);
          })
      swal("Cảm ơn !", {
        icon: "success",
      });
      setTimeout(() => {
        routeChange()
      }, 1600);

    } 
  });
}


  
  return (
    <div className="container-fluid">
      {/* Page Heading */}

      <div
        className="card shadow mb-4 show"
      >
        <div className="card-header py-3 d-flex justify-content-between">
          <h6 className="m-0 font-weight-bold text-primary">Confirm</h6>
          
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
                          defaultValue="Đã đến nơi"
                          style={{ marginRight: "1rem" }}
                        />
                      
                      </td>
                    
                    </tr>
                  )
                ) : (
                  <tr>
                    <td>Bạn phải thanh toán xong trước đã.</td>
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
