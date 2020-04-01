package main.reisecalculator.repository;


import main.reisecalculator.model.Reise;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


@Repository()
public interface ReiseRepository extends JpaRepository<Reise, Integer> {

    @Query(value = "select SUM (preis) from Reise")
    int reiseTotal();


}





