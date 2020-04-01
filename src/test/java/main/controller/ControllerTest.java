package main.controller;


import main.reisecalculator.controller.ReiseController;
import main.reisecalculator.model.Reise;
        import main.reisecalculator.service.Reiseservice;
        import org.junit.Before;
        import org.junit.Test;
import org.junit.jupiter.api.extension.ExtendWith;
        import org.mockito.InjectMocks;
        import org.mockito.Mock;
        import org.mockito.MockitoAnnotations;
        import org.mockito.junit.jupiter.MockitoExtension;
        import org.springframework.beans.factory.annotation.Autowired;
        import org.springframework.boot.test.context.SpringBootTest;
        import org.springframework.boot.test.web.client.TestRestTemplate;
        import org.springframework.boot.web.server.LocalServerPort;
        import org.springframework.http.HttpStatus;
        import org.springframework.http.ResponseEntity;
        import static org.hamcrest.MatcherAssert.assertThat;
        import java.util.Arrays;
        import java.util.Collections;
        import java.util.Optional;
        import static org.hamcrest.Matchers.*;
        import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
@SpringBootTest

public class ControllerTest {

    private static Reise reise1;
    private static Reise reise2;
    private static Reise reise3;

    @Mock
    private Reiseservice reiseservice;

    @InjectMocks
    ReiseController reiseController;

    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate restTemplate;

    @Before
    public void init(){
        reise1 = new Reise( 1, "Bern", 120, "01.01.2020");
        reise2 = new Reise(2, "Chur", 30, "02.02.2022");
        reise3 = new Reise(2, "Arosa", 99, "03.03.2033");
    }


    @Before
    public void setUp(){
        MockitoAnnotations.initMocks(this);
    }


    @Test
    public void findAll_whenNoRecord(){
        when(reiseservice.findAll()).thenReturn(Collections.emptyList());
        assertThat(reiseController.findAll().size(), is(0) );
        verify(reiseservice, times(1)).findAll();
    }

    @Test
    public void findAll_whenRecord(){
        when(reiseservice.findAll()).thenReturn(Arrays.asList(reise1, reise2));
        assertThat(reiseController.findAll().size(), is(2) );
        verify(reiseservice, times(1)).findAll();
    }

    @Test
    public void findById_WhenMatch() {
        when(reiseservice.findById(1)).thenReturn(Optional.ofNullable(reise1));
        ResponseEntity<Reise> p = reiseController.findById(1);
        assertThat(p.getBody(), is(reise1) );
    }

    @Test
    public void findById_WhenNoMatch() {
        when(reiseservice.findById(1)).thenReturn(Optional.empty());
        ResponseEntity<Reise> p = reiseController.findById(1);
        assertThat(p.getStatusCode(), is(HttpStatus.NOT_FOUND));
    }

    @Test
    public void create(){
        ResponseEntity<Reise> r = reiseController.createTrip(reise1);
        verify(reiseservice, times(1)).createOrUpdate(reise1);
    }

    @Test
    public void deleteById_WhenNotFound(){
        when(reiseservice.findById(1)).thenReturn(Optional.empty());
        reiseController.delete(1);
        verify(reiseservice, times(0)).deleteById(1);
    }

    @Test
    public void deleteById_WhenFound() {
        when(reiseservice.findById(1)).thenReturn(Optional.of(reise1));
        reiseController.delete(1);
        verify(reiseservice, times(1)).deleteById(1);
    }

    @Test
    public void update_WhenNotFound() {
        when(reiseservice.findById(1)).thenReturn(Optional.empty());
        ResponseEntity<Reise> p = reiseController.update(1, reise1);
        assertThat(p.getStatusCode(), is(HttpStatus.NOT_FOUND));
    }

    @Test
    public void update_WhenFound(){
        Reise reise1 = new Reise( 1, "Bern", 120, "01.01.2020");
        Reise reise3 = new Reise( 2, "Bern", 120, "01.01.2020");
        when(reiseservice.findById(1)).thenReturn(Optional.ofNullable(reise1));
        when(reiseservice.createOrUpdate(reise1)).thenReturn(reise3);
        assertThat(reiseController.update(1, reise3).getBody().getDestination(), is("Bern"));
        verify(reiseservice, times(1)).createOrUpdate(reise1);
    }
}
