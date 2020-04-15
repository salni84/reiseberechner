package main.reisecalculator.repository;

import main.reisecalculator.model.City;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository()
public interface DestinationRepository extends JpaRepository<City, Integer> {
}


