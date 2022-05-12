package model.data;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import model.Buses;

public interface BusesRepository
        extends JpaRepository<Buses, Integer> {
	
}