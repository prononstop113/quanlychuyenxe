import { useState,useEffect } from "react";
import axios from "axios";
import swal from 'sweetalert';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { useNavigate } from "react-router-dom";

export default function Bus(props) {
  const locations = ['Hà Nội', 'Thái Bình', 'Nam Định', 
  'Ninh Bình', 'Thanh Hóa', 'Nghệ An','Hà Tĩnh']
  const vehicle = ['Xe máy','Ô tô']

  const [selected, setSelected] = useState([]);

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/user/checkout`; 
    navigate(path);
  }

  const [toggleTask,setToggleTask] = useState(false)


  //isEdit
  const [isEdit,setIsEdit] = useState(false)


  //lay truong input
  const [field,setField] = useState({
    tenkhachhang : "",
    diemdi : "",
    diemden : "",
    phuongtien : "",
    gia:"80000",
    trangthai:"booked"
  });


  const handleAdd=()=>{
    setToggleTask(!toggleTask)
    setField({
      tenkhachhang : "",
      diemdi : "",
      diemden : "",
      phuongtien : "",
      gia:"80000",
      trangthai:""
    })
  }

  // const handleClose=()=>{
  //   setToggleTask(!toggleTask)
  //   setField({
  //     tenkhachhang : "",
  //     diemdi : "",
  //     diemden : "",
  //     phuongtien : "",
  //   })
  // }



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
  //
  const actionAddItemOption=(name, value)=>{
    setField({
      ...field,
      [name] : value
    })
}
  //submit item
  const onSubmitField=(e)=>{
    e.preventDefault();


    if(field.tenkhachhang === '' ){
        swal("Nhập đầy đủ trường !")
       }  
    else{
       if(field.phuongtien==="Ô tô"){
         field.gia=150000
       
        axios.post("http://localhost:8080/chuyenxe",field)
          .then(res =>{
              console.log(res);
          })
          .catch(err=>{
              console.log(err);
          })
          swal({
            title: "Đặt xe thành công !",
            icon: "success",
          });
          setTimeout(() => {
            routeChange()
          }, 1600);

     
            swal({
              title: "Đặt xe thành công !",
              icon: "success",
            });

    }
  }
    
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
            <input type="text" className="form-control" name="tenkhachhang" value={field.tenkhachhang} placeholder="Tên khách hàng" onChange={actionAddItem}/>
          </div>
          <div className="col-3">
          <Autocomplete
        options={locations}
        onChange={(name,value) => actionAddItemOption("diemdi", value)} 
        style={{ width: 400 }}
        renderInput={(params) =>
          <TextField {...params} label="Điểm đi" variant="outlined" 
          />}
      />
            {/* <input type="text" className="form-control" name="diemdi" value={field.diemdi} placeholder="Điểm đi" onChange={actionAddItem}/> */}
          </div>
          <div className="col-3">

          <Autocomplete
        options={locations}
        onChange={(name,value) => actionAddItemOption("diemden", value)} 
        style={{ width: 400 }}
        renderInput={(params) =>
          <TextField {...params} label="Điểm đến" variant="outlined"
      />}
      />
          </div>
          <div className="col-3">
  
          <Autocomplete
        options={vehicle}
        onChange={(name,value) => actionAddItemOption("phuongtien", value)} 
        style={{ width: 400 }}
        renderInput={(params) =>
          <TextField {...params} label="Phương tiện" variant="outlined" 
          />}
      />
          </div>     
        </div>
      <div className="row"></div>
        <div className="row">
          <div className="col-3">
            <input type="Submit" className="btn btn-success" defaultValue="Đặt xe" />
          </div>
        </div>
      </form>
      </div>
      </div>
      </div>
   
  );
}
