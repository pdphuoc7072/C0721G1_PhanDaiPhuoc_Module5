package codegym.com.controller;

import codegym.com.model.City;
import codegym.com.service.ICityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/cities")
@CrossOrigin(origins = "http://localhost:4200",allowedHeaders = "*",allowCredentials = "false")
public class CityRestController {
    @Autowired
    private ICityService iCityService;

    @GetMapping
    public ResponseEntity<Iterable<City>> findAll () {
        List<City> cities = (List<City>) iCityService.findAll();
        if (cities.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(cities, HttpStatus.OK);
    }
}
