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

    public List<Reise> findByDatum (String monat){
        return reiseRepository.findByMonth(showMonth(monat));
    }



    public static String showMonth (String month){
        String returnMonth = "-00-";
        switch (month){
            case "Januar":
                returnMonth = "-01-";
                break;
            case "Februar":
                returnMonth = "-02-";
                break;
            case "März":
                returnMonth = "-03-";
                break;
            case "April":
                returnMonth = "-04-";
                break;
            case "Mai":
                returnMonth = "-05-";
                break;
            case "Juni":
                returnMonth = "-06-";
                break;
            case "Juli":
                returnMonth = "-07-";
                break;
            case "August":
                returnMonth = "-08-";
                break;
            case "September":
                returnMonth = "-09-";
                break;
            case "Oktober":
                returnMonth = "-10-";
                break;
            case "November":
                returnMonth = "-11-";
                break;
            case "Dezember":
                returnMonth = "-12-";
                break;
            default:
                break;
        }
        return returnMonth;
    }
}
