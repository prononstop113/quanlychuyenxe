package model.web.api;

import java.util.List;
import java.util.Optional;

import org.hibernate.annotations.Parameter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import model.Bus;
import model.Driver;
import model.data.DriverRepository;


@RestController
@RequestMapping(path = "/driver", produces = "application/json")
@CrossOrigin(origins = "*")
public class DriverController {
	private DriverRepository driverRepo;

	@Autowired
	public DriverController(DriverRepository driverRepo) {
		this.driverRepo = driverRepo;
	}

	//lay danh sach
	@GetMapping("/all")
	public List<Driver> findAll() {
		return (List<Driver>) driverRepo.findAll();
	}
	
	@GetMapping("/checkpayLx")
	public List<?> findCheckLx() {
		return (List<?>) driverRepo.checkPayLx();
	}
	
	@GetMapping("/checkpayPx")
	public List<?> findCheckPx() {
		return (List<?>) driverRepo.checkPayPx();
	}

	//xoa du lieu trong database
		@DeleteMapping("/{id}")
		public void delete(@PathVariable("id") int id) {
			driverRepo.deleteById(id);
		}

	//add du lieu vao database
		@PostMapping(consumes = "application/json")
		@ResponseStatus(HttpStatus.CREATED)
		public Driver post(@RequestBody Driver driver) {
			return driverRepo.save(driver);
		}
}
