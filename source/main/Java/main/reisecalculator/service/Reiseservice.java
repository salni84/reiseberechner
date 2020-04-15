package main.reisecalculator.service;

import main.reisecalculator.model.Reise;
import main.reisecalculator.repository.ReiseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;


@Service
public class Reiseservice {


    @Autowired
    private ReiseRepository reiseRepository;

    public Reise createOrUpdate(Reise reise) {
        return reiseRepository.save(reise);
    }

    public List<Reise> findAll(){
        return reiseRepository.findAll();
    }

    public void deleteById(int id){
        reiseRepository.deleteById(id);
    }

    public Optional<Reise> findById(int id){
      return reiseRepository.findById(id);
}

   public List<Reise> findByDestination (String destination){
       return reiseRepository.findByDestination(destination);
    }
}
