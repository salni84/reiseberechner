package main.reisecalculator.model;


import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import javax.persistence.*;

@javax.persistence.Table(name="destinations")

@EntityListeners(AuditingEntityListener.class)
@Entity
public class City {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    String zielort;
    private int kosten;



    @Column(name = "zielort", nullable = false)
    public String getZielort() {
        return zielort;
    }

    @Column(name = "kosten", nullable = false)
    public int getKosten() {
        return kosten;
    }

    public void setZielort(String destination) {
        this.zielort = destination;
    }

    public void setKosten(int kosten) {
        this.kosten = kosten;
    }
}

