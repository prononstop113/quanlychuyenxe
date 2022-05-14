package model.web.api;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import model.Chuyenxe;
import model.data.ChuyenxeRepository;


@RestController
@RequestMapping(path = "/chuyenxe", produces = "application/json")
@CrossOrigin(origins = "*")
public class ChuyenxeController {
	private ChuyenxeRepository tripRepo;

	@Autowired
	public ChuyenxeController(ChuyenxeRepository tripRepo) {
		this.tripRepo = tripRepo;
	}

	@GetMapping
	public List<Chuyenxe> findAll() {
		return (List<Chuyenxe>) tripRepo.findAll();
	}
	@GetMapping("/{id}")
	  Optional<Chuyenxe> one(@PathVariable int id) {
	    return tripRepo.findById(id);
	  }
	@GetMapping("/booked")
	public List<Chuyenxe> getBooked() {
		return (List<Chuyenxe>) tripRepo.getBooked();
	}
	@GetMapping("/paid")
	public List<Chuyenxe> getPaid() {
		return (List<Chuyenxe>) tripRepo.getPaid();
	}
	
	@GetMapping("/done")
	public List<Chuyenxe> getDone() {
		return (List<Chuyenxe>) tripRepo.getDone();
	}
	@PostMapping(consumes = "application/json")
	    @ResponseStatus(HttpStatus.CREATED)
	    public Chuyenxe postArtifacts(@RequestBody Chuyenxe cx) {
	        return tripRepo.save(cx);
	    }

	@PutMapping("/{id}")
	public Chuyenxe putIngredient(@RequestBody Chuyenxe
	cx) {
	return tripRepo.save(cx);
	}
	
	@DeleteMapping("/{id}")
	public void deleteDriver(@PathVariable("id")
	int artiID) {
	try {
		tripRepo.deleteById(artiID);
	} catch (EmptyResultDataAccessException e) {}
	}
}
