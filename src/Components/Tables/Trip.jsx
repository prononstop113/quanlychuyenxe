import { useState,useEffect } from "react";
import axios from "axios";
import swal from 'sweetalert';
import Search from "../Search";

export default function Trip(props) {

  const [toggleTask,setToggleTask] = useState(false)

  //list
  const [listRoute, setListRoute] = useState([]);

  //listSave
  const [listRouteSave, setListRouteSave] = useState([]);

  //isEdit
  const [isEdit,setIsEdit] = useState(false)

  //search
  const [searchKey,setSearchKey] = useState("")

  //lay truong input
  const [field,setField] = useState({
    lotrinh : "",
    dodai : "",
    dophuctap : ""
  });


  const handleAdd=()=>{
    setToggleTask(!toggleTask)
  }

  const handleClose=()=>{
    setToggleTask(!toggleTask)
    setField({
      lotrinh : "",
      dodai : "",
      dophuctap : "",
      idtuyenxe : '',
    })
  }

  useEffect(() => {
    axios.get(`http://localhost:8080/route/all`)
    .then(res=>{
      setListRoute(res.data);
      setListRouteSave(res.data)
      // console.log(res.data);
    })
    .catch(err=>{
      console.log(err);
    })
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
    if(field.lotrinh === '' || field.dodai === '' || field.dophuctap === ''){
        swal("Nhập đầy đủ trường !")
       } 
      const loTrinh = field.lotrinh.toLowerCase().replaceAll(" ","")
      const checkLoTrinh = listRoute.every(item => item.lotrinh.toLowerCase().replaceAll(" ","") === loTrinh)  
     if(checkLoTrinh && !isEdit){
      swal("Lộ trình đã có !")
     }
    else{
        
          if(!isEdit){
            axios.post("http://localhost:8080/route",field)
          .then(res =>{
              console.log(res);
          })
          .catch(err=>{
              console.log(err);
          })
          setToggleTask(!toggleTask)
            swal({
              title: "Thêm thành công !",
              icon: "success",
            });
          }
          else{
            axios.put(`http://localhost:8080/route/${field.idtuyenxe}`,field)
             .then(res =>{
              console.log(res);
            })
           .catch(err=>{
              console.log(err);
           })
            setToggleTask(!toggleTask)
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
    console.log(value.idtuyenxe);
    swal({
      title: `Bạn có muốn xóa tuyến ${value.lotrinh}?`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
          axios.delete(`http://localhost:8080/route/${value.idtuyenxe}`,{data : value})
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
      setListRoute(listRouteSave.filter(item=>item.lotrinh.match(searchKey)))
  }

  return (
    <div className="container-fluid">
      {/* Page Heading */}
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Bảng cơ sở dữ liệu tuyến đường</h1>
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
          <div className="col-4">
            <input type="text" className="form-control" name="lotrinh" value={field.lotrinh} placeholder="Lộ trình" onChange={actionAddItem}/>
          </div>
          <div className="col-3">
            <input type="number" className="form-control" name="dodai" value={field.dodai} placeholder="Độ dài" onChange={actionAddItem}/>
          </div>
          <div className="col-3">
                <select className="form-control" onChange={actionAddItem} name="dophuctap" value={field.dophuctap}>
                  <option  className="d-none">Độ phức tạp</option>
                  <option value='1'>Small</option>
                  <option value='1.1'>Medium</option>
                  <option value='1.3'>High</option>
                </select>
          </div>  
          <div className="col">
            <input type="Submit" className="btn btn-success" defaultValue="Submit" />
          </div>
        </div>
      </form>
      </div>
      </div>
      <div className={!toggleTask ? "card shadow mb-4 animation-trip" : "card shadow mb-4 table-show"}>
        <div className="card-header py-3 d-flex justify-content-between">
          <h6 className="m-0 font-weight-bold text-primary">DataTables Route</h6>
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
                  <th>Lộ trình</th>
                  <th>Độ dài (km)</th>
                  <th>Độ phức tạp</th>
                  <th></th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Lộ trình</th>
                  <th>Độ dài (km)</th>
                  <th>Độ phức tạp</th>
                  <th></th>
                </tr>
              </tfoot>
              <tbody>
              {listRoute.length !== 0 ? (
                  listRoute.map((item,key) => (
                    <tr key={key}>
                      <td>{item.lotrinh}</td>
                      <td>{item.dodai}</td>
                      <td className="level">
                      {
                        item.dophuctap === 1 ? (
                          <span className="badge badge-success">small</span>
                        ) : item.dophuctap === 1.1 ?  (
                          <span className="badge badge-warning">medium</span>
                        ) : (
                          <span className="badge badge-danger">high</span>
                        )
                      }
                      </td>
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
