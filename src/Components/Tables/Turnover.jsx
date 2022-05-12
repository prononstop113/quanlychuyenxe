import { useState, useEffect } from "react";
import axios from "axios";
import Search from "../Search";

export default function Turnover() {
  //listDoanhThu
  const [listDoanhThu, setListDoanhThu] = useState([]);

  //listBus
  const [listTurSave, setListTurSave] = useState([]);


  //search
  const [searchKey, setSearchKey] = useState("");

  const [sumTur,setSumTur] = useState(0)

  useEffect(() => {

    axios
      .get(`http://localhost:8080/bus/doanhThu`)
      .then((res) => {
        setListDoanhThu(res.data);
        setListTurSave(res.data);
        // console.log(res.data);
        const arr = res.data.map(item=> {
          return item[3];
        })
        setSumTur(arr.reduce((total,currentValue) =>{
          return total + currentValue
        }))
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
    setListDoanhThu(listTurSave.filter((item) => item[0].match(searchKey)));
  };

  return (
    <div className="container-fluid">
      {/* Page Heading */}

      <div className="d-sm-flex d-flex justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Bảng cơ sở dữ liệu doanh thu</h1>
        {/* Topbar Search */}
        <Search actionSearch={actionSearch} handleSearch={handleSearch} />
        {/* Topbar Navbar */}
      </div>
      <div className="card shadow mb-4 ">
        <div className="card-header py-3 d-flex justify-content-between">
          <h6 className="m-0 font-weight-bold text-primary">
            DataTables Turnover
          </h6>
          <h6>
            Tổng doanh thu : <span>{sumTur.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} đ</span>
          </h6>
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
                  <th>Biển số</th>
                  <th>Tổng chuyến</th>
                  <th>Tổng số khách</th>
                  <th>Doanh thu (đ)</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Biển số</th>
                  <th>Tổng chuyến</th>
                  <th>Tổng số khách</th>
                  <th>Doanh thu (đ)</th>
                </tr>
              </tfoot>
              <tbody>
                {listDoanhThu.length !== 0 ? (
                  listDoanhThu.map((item, key) => (
                    <tr key={key}>
                      <td>{item[0]}</td>
                      <td>{item[4]}</td>
                      <td>{item[2]}</td>
                      <td>{item[3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
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
