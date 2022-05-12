import { useState,useEffect } from "react";
import axios from "axios";
import swal from 'sweetalert';
import Search from "../Search";
import { formatDate } from "../../helper/helper";

export default function Driver(props) {

  const [toggleTask,setToggleTask] = useState(false)

  //list
  const [listDriver, setListDriver] = useState([]);

  //listSave
  const [listDriverSave, setListDriverSave] = useState([]);

  //isEdit
  const [isEdit,setIsEdit] = useState(false)

  //search
  const [searchKey,setSearchKey] = useState("")

  //date
  const [date, setDate] =useState()

  //lay truong input
  const [field,setField] = useState({
    ten : "",
    cccd : "",
    mabang : "",
    loaibang : "",
    diachi : "",
    ngaysinh : "",
    thamnien : ""
  });


  const handleAdd=()=>{
    setToggleTask(!toggleTask)
  }

  const handleClose=()=>{
    setToggleTask(!toggleTask)
    setField({
      ten : "",
      cccd : "",
      mabang : "",
      loaibang : "",
      diachi : "",
      ngaysinh : "",
      thamnien : ""
    })
  }

  useEffect(() => {
    axios.get(`http://localhost:8080/driver/all`)
    .then(res=>{
      setListDriver(res.data);
      setListDriverSave(res.data);
    })
    .catch(err=>{
      console.log(err);
    })
    // props.handleToggleDriver();
  }, [])


  const actionAddItem=(e)=>{
      const {name,value} = e.target;
      setField({
        ...field,
        [name] : value
      })
  }
  //submit item
  const onSubmitField=(e)=>{
    e.preventDefault();
    const cccd  = listDriver.every(item => item.cccd !== Number(field.cccd))
    const mabang  = listDriver.every(item => item.mabang !== Number(field.mabang))
    if(field.cccd === '' || field.mabang === '' || field.thamnien === '' || field.ten === '' ||
       field.loaibang === '' || field.diachi === '' || field.ngaysinh === ''  ){
        swal("Nhập đầy đủ trường !")
       }
    else if(!cccd  && !isEdit){
      swal("Căn Cước công dân đã sử dụng !")
    }   
    else if(!mabang  && !isEdit){
      swal("Mã bằng đã sử dụng !")
    } 
    else{
        axios.post("http://localhost:8080/driver",field)
          .then(res =>{
              console.log(res);
          })
          .catch(err=>{
              console.log(err);
          })
          setToggleTask(!toggleTask)
          if(!isEdit){
            swal({
              title: "Thêm thành công !",
              icon: "success",
            });
          }
          else{
            swal({
              title: "Sửa thành công !",
              icon: "success",
            });
          }
          setIsEdit(false)
          setTimeout(() => {
            window.location.reload();
          }, 1600);
    }
    
  }

  //delete item
  const handleDelete=(value)=>{
    swal({
      title: `Bạn có muốn xóa tài xế ${value.ten}?`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
          axios.delete(`http://localhost:8080/driver/${value.idtaixe}`,{data : value})
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

  //edit item
  const handleEdit=(value)=>{
    setField(value)
    setToggleTask(true)
    setIsEdit(true)
    window.scroll(0,0)
  }

  //Search
  const actionSearch=(e)=>{
    const value = e.target.value;
    const search = new RegExp (value ,'i');
    setSearchKey(search)
  }

  const handleSearch=()=>{
      setListDriver(listDriverSave.filter(item=>item.ten.match(searchKey)))
  }

  return (
    <div className="container-fluid">
      {/* Page Heading */}
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Bảng cơ sở dữ liệu tài xế</h1>
        {/* Topbar Search */}
        <Search
         actionSearch={actionSearch}
         handleSearch={handleSearch}
        />
        {/* Topbar Navbar */}
      </div>
      <div className={!toggleTask ? ("card shadow mb-4 close-form") : ("card shadow mb-4 show")}>
      <div className="card-header py-3 d-flex justify-content-center ">
      <form className="form w-100" onSubmit={onSubmitField}>
        <div className="row">
          <div className="col-3">
            <input type="text" className="form-control" name="ten" value={field.ten} placeholder="Họ tên" onChange={actionAddItem}/>
          </div>
          <div className="col-3">
            <input type="number" className="form-control" name="cccd" value={field.cccd} placeholder="CCCD" onChange={actionAddItem}/>
          </div>
          <div className="col-3">
            <input type="number" className="form-control" name="mabang" value={field.mabang} placeholder="Mã bằng"  onChange={actionAddItem}/>
          </div>
          <div className="col-3">
            <input type="text" className="form-control" name="loaibang" value={field.loaibang} placeholder="Loại bằng"  onChange={actionAddItem}/>
          </div>     
        </div>
        <div className="row my-3">
        <div className="col">
            <input type="text" className="form-control" onChange={actionAddItem} name="diachi" value={field.diachi} placeholder="Địa chỉ" />
          </div>
          <div className="col">
            <input type="date" className="form-control" onChange={actionAddItem} name="ngaysinh" value={field.ngaysinh} placeholder="Ngày sinh" />
          </div>
          <div className="col">
            <input type="number" className="form-control" onChange={actionAddItem} name="thamnien" value={field.thamnien} placeholder="Thâm niên" />
          </div>
          <div className="col">
            <input type="Submit" className="btn btn-success" defaultValue="Submit" />
          </div>
        </div>
      </form>
      </div>
      </div>
      <div className={!toggleTask ? "card shadow mb-4 animation" : "card shadow mb-4 table-show"}>
        <div className="card-header py-3 d-flex justify-content-between">
          <h6 className="m-0 font-weight-bold text-primary">DataTables Driver</h6>
          <button className={!toggleTask ? ("btn btn-info") : ("d-none")} onClick={handleAdd}>Add item</button>
          <button className={toggleTask ? ("btn btn-secondary") : ("d-none")} onClick={handleClose}>Close task</button>
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
                  <th>CCCD</th>
                  <th>Mã bằng</th>
                  <th>Loại bằng</th>
                  <th>Địa chỉ</th>
                  <th>Ngày sinh</th>
                  <th>Thâm niên</th>
                  <th></th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Họ tên</th>
                  <th>CCCD</th>
                  <th>Mã bằng</th>
                  <th>Loại bằng</th>
                  <th>Địa chỉ</th>
                  <th>Ngày sinh</th>
                  <th>Thâm niên</th>
                  <th></th>
                </tr>
              </tfoot>
              <tbody>
              {listDriver.length !== 0 ? (
                  listDriver.map((item,key) => (
                    <tr key={key}>
                      <td>{item.ten}</td>
                      <td>{item.cccd}</td>
                      <td>{item.mabang}</td>
                      <td>{item.loaibang}</td>
                      <td>{item.diachi}</td>
                      <td>{formatDate(item.ngaysinh)}</td>
                      <td>{item.thamnien}</td>
                      <td>
                        <input
                          className="btn btn-warning"
                          type="button"
                          defaultValue="Edit"
                          onClick={()=>handleEdit(item)}
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
                  ))
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
