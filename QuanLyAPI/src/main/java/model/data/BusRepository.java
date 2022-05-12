package model.data;

import org.springframework.data.repository.CrudRepository;

import model.Bus;

public interface BusRepository
        extends CrudRepository<Bus, Integer> {
	
}