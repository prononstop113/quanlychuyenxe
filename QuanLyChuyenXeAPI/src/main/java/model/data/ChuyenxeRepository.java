package model.data;

import org.springframework.data.repository.CrudRepository;


import model.Chuyenxe;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
public interface ChuyenxeRepository
        extends CrudRepository<Chuyenxe, Integer> {
	@Query(value = "select * from chuyenxe c where c.trangthai='Booked'", nativeQuery =  true)
	List<Chuyenxe> getBooked();
	
	@Query(value = "select * from chuyenxe c where c.trangthai='Paid'", nativeQuery =  true)
	List<Chuyenxe> getPaid();
	
	@Query(value = "select * from chuyenxe c where c.trangthai='Done'", nativeQuery =  true)
	List<Chuyenxe> getDone();
}