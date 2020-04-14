package main.reisecalculator.service;

import main.reisecalculator.model.Reise;
import main.reisecalculator.repository.ReiseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;


@Service
public class Reiseservice {

    private static double gaPreis = 5265;

    @Autowired
    private ReiseRepository reiseRepository;

 /*   public int gaRelation(){
        double sum = this.reiseRepository.reiseTotal();
        int gaRelation = (int)(sum*100/ gaPreis)-100;
        System.out.println(gaRelation);
        return gaRelation;
    }*/

    public Reise createOrUpdate(Reise reise) {
        return reiseRepository.save(reise);
    }

    public List<Reise> findAll(){
        return reiseRepository.findAll();
    }

    public void deleteById(int id){
        reiseRepository.deleteById(id);
    }

  /*  public int reiseTotal(){
        return reiseRepository.reiseTotal();
    }*/

    public Optional<Reise> findById(int id){
      return reiseRepository.findById(id);
}

   public List<Reise> findByDestination (String destination){
       return reiseRepository.findByDestination(destination);
    }
}
