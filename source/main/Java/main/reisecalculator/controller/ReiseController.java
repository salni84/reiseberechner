package main.reisecalculator.controller;

import main.reisecalculator.model.City;
import main.reisecalculator.model.Reise;
import main.reisecalculator.repository.DestinationRepository;
import main.reisecalculator.service.Reiseservice;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.List;
import java.util.Optional;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@Slf4j
public
class ReiseController {


    @Autowired
    private Reiseservice reiseservice;

    @Autowired
    private DestinationRepository destinationRepository;



    @GetMapping("/reisen")
    public List<Reise> findAll() {
       return reiseservice.findAll();
    }

    @GetMapping("/reisen/id/{id}")
    public ResponseEntity<Reise> findById(@PathVariable Integer id){

        Optional<Reise> r = reiseservice.findById(id);
        if (!r.isPresent()){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(r.get());
    }

 /*   @GetMapping("/reisen/v1")
    public ResponseEntity<String> getReiseKosten(){
        return ResponseEntity.ok(String.valueOf(reiseservice.reiseTotal()));
    }*/

   /* @GetMapping("/reisen/v2")
    public int getGAVerhaeltnis() {
        return this.reiseservice.gaRelation();
    }
*/

    @GetMapping("/reisen/destinations")
    public List<City> getAllDestinations(){
        return destinationRepository.findAll();
    }


    @GetMapping("/reisen/ort/{ort}")
    public List<Reise> findByDestination(@PathVariable String ort){
        return reiseservice.findByDestination(ort);
    }

    @PostMapping("/reisen")
    public ResponseEntity<Reise> createTrip(@Valid @RequestBody Reise reise){
        return ResponseEntity.ok(reiseservice.createOrUpdate(reise));
    }

    @DeleteMapping("reisen/{id}")
    public ResponseEntity delete(@PathVariable int id){
        Optional<Reise> p = reiseservice.findById(id);

        if (!p.isPresent()) {
            //log.error("Product with id " + id + " does not exist.");
            return ResponseEntity.notFound().build();
        }
        reiseservice.deleteById(id);
        return ResponseEntity.ok().build();
    }

    @PutMapping("reisen/{id}")
    public ResponseEntity<Reise> update (@PathVariable int id, @Valid @RequestBody Reise reise){
        Optional<Reise> p = reiseservice.findById(id);

        if (!p.isPresent()) {
            //log.error("Product with id " + id + " does not exist.");
            return ResponseEntity.notFound().build();
        }

        p.get().setDestination(reise.getDestination());
        p.get().setDatum(reise.getDatum());
        p.get().setPreis(reise.getPreis());

        return ResponseEntity.ok(reiseservice.createOrUpdate(p.get()));
    }
}
