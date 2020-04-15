package main.reisecalculator.repository;


import main.reisecalculator.model.Reise;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository()
public interface ReiseRepository extends JpaRepository<Reise, Integer> {

    /*@Query(value = "select SUM (preis) from Reise")
    int reiseTotal();*/


    List<Reise> findByDestination(String destination);
}
