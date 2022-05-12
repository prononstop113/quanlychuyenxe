package model.web.api;

import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.hibernate.annotations.Parameter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import model.Bus;
import model.Buses;
import model.Driver;
import model.data.BusRepository;
import model.data.BusesRepository;

@RestController
@RequestMapping(path = "/buses", produces = "application/json")
@CrossOrigin(origins = "*")
public class BusesController {
	private BusesRepository cxRepo;

	@Autowired
	public BusesController(BusesRepository cxRepo) {
		this.cxRepo = cxRepo;
	}

	//lay danh sach chuyen xe
	@GetMapping("/all")
	public List<Buses> findAll() {
		return (List<Buses>) cxRepo.findAll();
	}
	

	//xoa item trong database
	 @DeleteMapping("/{id}")
	    public void delete(@PathVariable("id") int id) {
		 cxRepo.deleteById(id);
	    }

	//add du lieu vao database
		@PostMapping(consumes = "application/json")
		@ResponseStatus(HttpStatus.CREATED)
		public Buses post(@RequestBody Buses buses) {
			return cxRepo.save(buses);
		}

}
