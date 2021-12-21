package codegym.com.controller;

import codegym.com.model.Car;
import codegym.com.service.ICarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/cars")
@CrossOrigin(origins = "http://localhost:4200",allowedHeaders = "*",allowCredentials = "false")
public class CarRestController {
    @Autowired
    private ICarService iCarService;

    @GetMapping
    public ResponseEntity<Iterable<Car>> findAll () {
        List<Car> cars = (List<Car>) iCarService.findAll();
        if (cars.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(cars, HttpStatus.OK);
    }

    @PostMapping(consumes="application/json",headers = "content-type=application/x-www-form-urlencoded")
    public ResponseEntity<Car> save (@RequestBody Car car) {
        return new ResponseEntity<>(iCarService.save(car), HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Car> findById (@PathVariable Long id) {
        Optional<Car> blog = iCarService.findById(id);
        if (!blog.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(blog.get(), HttpStatus.OK);
    }
}
