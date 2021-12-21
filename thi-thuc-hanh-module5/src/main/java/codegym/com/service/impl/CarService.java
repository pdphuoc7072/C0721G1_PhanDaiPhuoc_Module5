package codegym.com.service.impl;

import codegym.com.model.Car;
import codegym.com.repository.ICarRepository;
import codegym.com.service.ICarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CarService implements ICarService {
    @Autowired
    private ICarRepository iCarRepository;

    @Override
    public Iterable<Car> findAll() {
        return iCarRepository.findAll();
    }

    @Override
    public Optional<Car> findById(Long id) {
        return iCarRepository.findById(id);
    }

    @Override
    public Car save(Car car) {
        return iCarRepository.save(car);
    }

    @Override
    public void remove(Long id) {
        iCarRepository.deleteById(id);
    }
}
