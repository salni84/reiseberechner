package main.service;

import main.reisecalculator.model.Reise;
import main.reisecalculator.repository.ReiseRepository;
import main.reisecalculator.service.Reiseservice;
import org.junit.Before;
import org.junit.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.context.SpringBootTest;

import static org.hamcrest.MatcherAssert.assertThat;

import java.time.LocalDate;
import java.util.Arrays;
import java.util.Collections;
import java.util.Optional;
import static org.hamcrest.Matchers.*;
import static org.mockito.Mockito.*;


@ExtendWith(MockitoExtension.class)
@SpringBootTest
public class ReiseserviceTest {


    private static Reise r1;
    private static Reise r2;

    @Mock
    private ReiseRepository reiseRepository;

    @InjectMocks
    private Reiseservice reiseservice;

    @Before
    public void setup(){
        MockitoAnnotations.initMocks(this);
    }

    @Before
    public void init(){
        r1 = new Reise(1, "Bern", 120, java.sql.Date.valueOf("2020-11-15"));
        r2 = new Reise(2, "Olten", 90, java.sql.Date.valueOf("2020-11-15"));
    }

   @Test
    public void findAllTest_WhenNoRecord(){
        when(reiseRepository.findAll()).thenReturn(Collections.emptyList());
        assertThat(reiseservice.findAll().size(), is(0));
        verify(reiseRepository, times(1)).findAll();
    }

    @Test
    public void findAllTest_WhenRecord(){
        when(reiseRepository.findAll()).thenReturn(Arrays.asList(r1, r2));
        assertThat(reiseservice.findAll().size(), is(2));
        assertThat(reiseservice.findAll().get(0), is(r1));
        assertThat(reiseservice.findAll().get(1), is(r2));
        verify(reiseRepository, times(3)).findAll();
    }

    @Test
    public void findById(){
        when(reiseRepository.findById(1)).thenReturn(Optional.of(r1));
        assertThat(reiseservice.findById(1), is(Optional.of(r1)));
        verify(reiseRepository, times(1)).findById(1);
    }

    @Test
    public void createOrUpdate(){
        when(reiseRepository.save(r1)).thenReturn(r1);
        assertThat(reiseservice.createOrUpdate(r1), is(r1));
        verify(reiseRepository, times(1)).save(r1);

        when(reiseRepository.save(r2)).thenReturn(r2);
        assertThat(reiseservice.createOrUpdate(r2), is(r2));
        verify(reiseRepository, times(1)).save(r2);
    }

    @Test
    public void deleteById (){
        reiseservice.deleteById(1);
        verify(reiseRepository, times(1)).deleteById(1);
    }

}
