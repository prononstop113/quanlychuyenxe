package model.web.api;

import java.util.List;
import java.util.Optional;

import org.hibernate.annotations.Parameter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import model.Bus;
import model.Driver;
import model.Route;
import model.data.BusRepository;
import model.data.RouteRepository;

@RestController
@RequestMapping(path = "/route", produces = "application/json")
@CrossOrigin(origins = "*")
public class RouteController {
	private RouteRepository routeRepo;

	@Autowired
	public RouteController(RouteRepository routeRepo) {
		this.routeRepo = routeRepo;
	}

	@GetMapping("/all")
	public List<Route> findAll() {
		return (List<Route>) routeRepo.findAll();
	}

	//xoa du lieu trong database
			@DeleteMapping("/{id}")
			public void delete(@PathVariable("id") int id) {
				routeRepo.deleteById(id);
			}

		//add du lieu vao database
			@PostMapping(consumes = "application/json")
			@ResponseStatus(HttpStatus.CREATED)
			public Route post(@RequestBody Route route) {
				return routeRepo.save(route);
			}
	//sua du lieu
			 @PutMapping("/{id}")
			    public void update(@PathVariable int id, @RequestBody Route route) {
			        if (route.getIdtuyenxe() != id) {
			            throw new IllegalStateException("Error");
			        }
			        routeRepo.save(route);
			    }
			
}
