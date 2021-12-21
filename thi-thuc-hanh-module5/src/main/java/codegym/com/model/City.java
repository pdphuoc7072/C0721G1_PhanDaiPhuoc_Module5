package codegym.com.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.List;

@Entity
public class City {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @OneToMany(mappedBy = "departureOfCity")
    @JsonBackReference(value="back_class")
    private List<Car> carListDeparture;

    @OneToMany(mappedBy = "destinationOfCity")
    @JsonBackReference(value="back_class")
    private List<Car> carListDestination;

    public City() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Car> getCarListDeparture() {
        return carListDeparture;
    }

    public void setCarListDeparture(List<Car> carListDeparture) {
        this.carListDeparture = carListDeparture;
    }

    public List<Car> getCarListDestination() {
        return carListDestination;
    }

    public void setCarListDestination(List<Car> carListDestination) {
        this.carListDestination = carListDestination;
    }
}
