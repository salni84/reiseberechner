package main.reisecalculator.model;

public class ValidationError extends RuntimeException {

    public ValidationError(String message){
        super(message);
    }


}
