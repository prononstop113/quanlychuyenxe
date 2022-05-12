package model.data;

import org.springframework.data.repository.CrudRepository;

import model.Route;

public interface RouteRepository
        extends CrudRepository<Route, Integer> {
}