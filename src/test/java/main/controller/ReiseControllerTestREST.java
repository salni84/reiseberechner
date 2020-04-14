package main.controller;

import main.reisecalculator.model.Reise;
import org.junit.Assert;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.*;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.time.LocalDate;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;

@ExtendWith(SpringExtension.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)

public class ReiseControllerTestREST {


    @Autowired
    private TestRestTemplate testRestTemplate;

    @Test
    public void findAllTestIT(){
        ResponseEntity<Reise[]> result = this.testRestTemplate.getForEntity("http://localhost:8080/reisen", Reise[].class);
        assertThat(result.getStatusCode(), equalTo(HttpStatus.OK));
        assertThat(result.getBody(), is(notNullValue()));
    }

    @Test
    public void getReiseTestOK(){
        ResponseEntity httpResponse = this.testRestTemplate.getForEntity("http://localhost:8080/reisen", Reise[].class);
        Assert.assertEquals(200, httpResponse.getStatusCodeValue());
    }

    @Test
    public void deleteByIDTestIT() {
        Reise r2 = new Reise(2, "Bern", 120, java.sql.Date.valueOf("2020-11-15"));
        HttpEntity<Reise> request = new HttpEntity<>(r2);
        ResponseEntity<Reise> response = testRestTemplate.postForEntity("http://localhost:8080/reisen/", request,  Reise.class);
        Assert.assertEquals(200, response.getStatusCodeValue());
        int id = response.getBody().getId();
        testRestTemplate.delete("http://localhost:8080/reisen/" + id);
        response = testRestTemplate.getForEntity("http://localhost:8080/reisen/" + id, Reise.class);
        assertThat(response.getBody(), is(nullValue()));
    }

    @Test
    public void updateTestIT() {
        Reise r1 = new Reise(1, "Olten",90, java.sql.Date.valueOf("2020-11-15"));
        Reise r2 = new Reise(2, "Bern", 120, java.sql.Date.valueOf("2020-11-15"));
        HttpEntity<Reise> request = new HttpEntity<>(r1);
        ResponseEntity<Reise> response = testRestTemplate.postForEntity("http://localhost:8080/reisen/", request, Reise.class);
        int id = response.getBody().getId();
        request = new HttpEntity<>(r2);
        response = testRestTemplate.exchange("http://localhost:8080/reisen/"+id, HttpMethod.PUT, request, Reise.class);
        assertThat(response.getBody().getDestination(), is("Bern"));
        assertThat(response.getBody().getId(), is(id));
        testRestTemplate.delete("http://localhost:8080/reisen/"+id);
    }


    @Test
    public void createReiseTestOK(){
        Reise r1 = new Reise(1, "Genf", 200, java.sql.Date.valueOf("2020-11-15"));
        HttpEntity<Reise> request = new HttpEntity<>(r1);
        ResponseEntity<Reise> response = testRestTemplate.postForEntity("http://localhost:8080/reisen/", request, Reise.class);
        assertThat(response.getBody().getDestination(), is("Genf"));
        assertThat(response.getBody().getPreis(), is(200));
        int id = response.getBody().getId();
        testRestTemplate.delete("http://localhost:8080/reisen/" + id);
    }
}
