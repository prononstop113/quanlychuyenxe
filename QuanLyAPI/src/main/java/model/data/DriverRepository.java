package model.data;



import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;


import model.Driver;

public interface DriverRepository
        extends JpaRepository<Driver, Integer> {
	
//	@Query(value = "Select taixe.* From taixe where taixe.idtaixe = 1", nativeQuery =  true)
//	List<?> check();
	
	//lai xe
	@Query(value = "select taixe.idtaixe, taixe.ten ,taixe.thamnien,sum(hesonhanlaixe) as hesonhanlaixe, count(idlaixe) as solanlaixe from (select chuyenxe.*, avg(tuyenxe.dophuctap) as hesonhanlaixe from chuyenxe , tuyenxe where chuyenxe.idchuyenxe= tuyenxe.idchuyenxe group by idchuyenxe) as a left join taixe on taixe.idtaixe = a.idlaixe group by idlaixe ", nativeQuery =  true)
	List<?> checkPayLx();
	
	
	//phu xe
	@Query(value = "select taixe.idtaixe, taixe.ten ,taixe.thamnien,sum(hesonhanphuxe) as hesonhanphuxe, count(idphuxe) as solanphuxe from (select chuyenxe.*, avg(tuyenxe.dophuctap) as hesonhanphuxe from chuyenxe , tuyenxe where chuyenxe.idchuyenxe= tuyenxe.idchuyenxe group by idchuyenxe) as a left join taixe on taixe.idtaixe = a.idphuxe group by idphuxe ", nativeQuery =  true)
	List<?> checkPayPx();
	
	//pay
	@Query(value = "select d.idtaixe,d.ten, d.luongphuxe, b.luonglaixe, d.luongphuxe + b.luonglaixe as luong from (select taixe.idtaixe, taixe.ten,100000*sum(hesonhanlaixe) as luonglaixe, count(idlaixe) as solanlaixe from (select chuyenxe.*, avg(tuyenxe.dophuctap) as hesonhanlaixe from chuyenxe , tuyenxe where chuyenxe.idchuyenxe= tuyenxe.idchuyenxe group by idchuyenxe) as a left join taixe on taixe.idtaixe = a.idlaixe group by idlaixe) as b, (select taixe.idtaixe, taixe.ten,50000*sum(hesonhanphuxe) as luongphuxe, count(idphuxe) as solanphuxe from (select chuyenxe.*, avg(tuyenxe.dophuctap) as hesonhanphuxe from chuyenxe , tuyenxe where chuyenxe.idchuyenxe= tuyenxe.idchuyenxe group by idchuyenxe) as c left join taixe on taixe.idtaixe = c.idphuxe group by idphuxe) as d where b.idtaixe = d.idtaixe ", nativeQuery =  true)
	List<?> checkPay();
}