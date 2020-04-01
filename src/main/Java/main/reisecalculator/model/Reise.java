package main.reisecalculator.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;



@Entity
@Table(name = "reise")
public class Reise {

    private int id;
    private String destination;
    private int preis;
    private String datum;


    public Reise(){}

    public Reise(int id, String destination,int preis,  String datum) {
        this.id = id;
        this.destination = destination;
        this.preis = preis;
        this.datum = datum;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public int getId(){
        return id;
    }

    public void setId(int id){
        this.id = id;
    }


    @Column(name = "destination", nullable = false)
    public String getDestination() {
        return destination;
    }

    @Column(name = "preis", nullable = false)
    public int getPreis() {
        return preis;
    }

    @Column(name = "datum", nullable = false)
    public String getDatum() {
        return datum;
    }


    public void setDestination(String destination) {
        this.destination = destination;
    }

    public void setPreis(int preis) {
        this.preis = preis;
    }

    public void setDatum(String datum) {
        this.datum = datum;
    }


}
