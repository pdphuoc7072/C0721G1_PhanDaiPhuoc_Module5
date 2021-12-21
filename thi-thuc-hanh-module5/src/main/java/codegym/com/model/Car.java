package codegym.com.model;

import javax.persistence.*;

@Entity
public class Car {
    @Id
    private Long id;

    private String typeOfCar;

    private String nameOfCar;

    @ManyToOne(targetEntity = City.class)
    @JoinColumn(name = "departureOfCityId", referencedColumnName = "id")
    private City departureOfCity;

    @ManyToOne(targetEntity = City.class)
    @JoinColumn(name = "destinationOfCityId", referencedColumnName = "id")
    private City destinationOfCity;

    private String phone;

    private String email;

    private String departureOfTime;

    private String destinationOfTime;

    public Car() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTypeOfCar() {
        return typeOfCar;
    }

    public void setTypeOfCar(String typeOfCar) {
        this.typeOfCar = typeOfCar;
    }

    public String getNameOfCar() {
        return nameOfCar;
    }

    public void setNameOfCar(String nameOfCar) {
        this.nameOfCar = nameOfCar;
    }

    public City getDepartureOfCity() {
        return departureOfCity;
    }

    public void setDepartureOfCity(City departureOfCity) {
        this.departureOfCity = departureOfCity;
    }

    public City getDestinationOfCity() {
        return destinationOfCity;
    }

    public void setDestinationOfCity(City destinationOfCity) {
        this.destinationOfCity = destinationOfCity;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getDepartureOfTime() {
        return departureOfTime;
    }

    public void setDepartureOfTime(String departureOfTime) {
        this.departureOfTime = departureOfTime;
    }

    public String getDestinationOfTime() {
        return destinationOfTime;
    }

    public void setDestinationOfTime(String destinationOfTime) {
        this.destinationOfTime = destinationOfTime;
    }
}
