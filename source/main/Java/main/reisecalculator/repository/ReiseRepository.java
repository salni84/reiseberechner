package main.reisecalculator.repository;


import main.reisecalculator.model.Reise;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository()
public interface ReiseRepository extends JpaRepository<Reise, Integer> {



    @Query(value ="SELECT * FROM Reise u where u.datum LIKE %:a% ORDER BY datum", nativeQuery = true)
    List<Reise> findByMonth(@Param("a")String a);

    List<Reise> findByDestination(String destination);

}
