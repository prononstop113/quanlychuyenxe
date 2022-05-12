package model.web.api;

import java.util.List;
import java.util.Optional;

import org.hibernate.annotations.Parameter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import model.Bus;
import model.Driver;
import model.data.BusRepository;

@RestController
@RequestMapping(path = "/bus", produces = "application/json")
@CrossOrigin(origins = "*")
public class BusController {
	private BusRepository busRepo;

	@Autowired
	public BusController(BusRepository busRepo) {
		this.busRepo = busRepo;
	}

	
	//lay du lieu tu database
	@GetMapping("/all")
	public List<Bus> findAll() {
		return (List<Bus>) busRepo.findAll();
	}

	//xoa du lieu trong database
	@DeleteMapping("/{id}")
	public void delete(@PathVariable("id") int id) {
		busRepo.deleteById(id);
	}
	//add du lieu vao database
	@PostMapping(consumes = "application/json")
	@ResponseStatus(HttpStatus.CREATED)
	public Bus post(@RequestBody Bus bus) {
		return busRepo.save(bus);
	}

}
