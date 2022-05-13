import { useState,useEffect } from "react";
import axios from "axios";
import swal from 'sweetalert';
import Search from "../Search";
import { formatDate } from "../../helper/helper";

export default function Bus(props) {

  const [toggleTask,setToggleTask] = useState(false)

  //listBus
  const [listBus, setListBus] = useState([]);

  //listBus
  const [listBusSave, setListBusSave] = useState([]);

  //isEdit
  const [isEdit,setIsEdit] = useState(false)

  //search
  const [searchKey,setSearchKey] = useState("")

  //lay truong input
  const [field,setField] = useState({
    tenkhachhang : "",
    diemdi : "",
    diemden : "",
    phuongtien : "",
  });


  const handleAdd=()=>{
    setToggleTask(!toggleTask)
  }

  const handleClose=()=>{
    setToggleTask(!toggleTask)
    setField({
      tenkhachhang : "",
      diemdi : "",
      diemden : "",
      phuongtien : "",
    })
  }


  useEffect(() => {
    axios.get(`http://localhost:8080/bus/all`)
    .then(res=>{
      setListBus(res.data);
      setListBusSave(res.data);
      // console.log(res);
    })
    .catch(err=>{
      console.log(err);
    })
  }, [])


  // useEffect(() => {
  //   props.handleToggleBus();
  // }, [props])

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


    if(field.bienso === '' || field.mauxe === '' || field.hangsx === '' || field.doixe === '' ||
       field.model === '' || field.soghe === '' || field.sonamsudung === '' || field.ngaybaoduong === '' ){
        swal("Nhập đầy đủ trường !")
       }
    else if(!bienso && !isEdit){
      swal("Biển số xe đã sử dụng !")
    }   
    else{
        axios.post("http://localhost:8080/bus",field)
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
      title: `Bạn có muốn xóa xe khách biển số ${value.bienso}?`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
          axios.delete(`http://localhost:8080/bus/${value.idxekhach}`,{data : value})
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


  return (
    <div className="container-fluid">
      {/* Page Heading */}
      <div className="d-sm-flex d-flex justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Đặt chuyến xe mới</h1>
      </div>
      <div className="card shadow mb-4 show">
      <div className="card-header py-3 d-flex justify-content-center ">
      <form className="form w-100" onSubmit={onSubmitField}>
        <div className="row">
          <div className="col-3">
            <input type="text" className="form-control" name="bienso" value={field.bienso} placeholder="Biển số" onChange={actionAddItem}/>
          </div>
          <div className="col-3">
            <input type="text" className="form-control" name="mauxe" value={field.mauxe} placeholder="Màu xe" onChange={actionAddItem}/>
          </div>
          <div className="col-3">
            <input type="text" className="form-control" name="hangsx" value={field.hangsx} placeholder="Hãng sản xuất"  onChange={actionAddItem}/>
          </div>
          <div className="col-3">
            <input type="number" className="form-control" name="doixe" value={field.doixe} placeholder="Đời xe"  onChange={actionAddItem}/>
          </div>     
        </div>
        <div className="row my-3">
        <div className="col">
            <input type="text" className="form-control" onChange={actionAddItem} name="model" value={field.model} placeholder="Model" />
          </div>
          <div className="col">
            <input type="number" className="form-control" onChange={actionAddItem} name="soghe" value={field.soghe} placeholder="Số ghế" />
          </div>
          <div className="col">
            <input type="number" className="form-control" onChange={actionAddItem} name="sonamsudung" value={field.sonamsudung} placeholder="Năm sử dụng" />
          </div>
          <div className="col">
            <input type="date" className="form-control" onChange={actionAddItem} name="ngaybaoduong" value={field.ngaybaoduong} placeholder="Ngày bảo dưỡng" />
          </div>
          <div className="col">
            <input type="Submit" className="btn btn-success" defaultValue="Submit" />
          </div>
        </div>
      </form>
      </div>
      </div>
      </div>
   
  );
}
