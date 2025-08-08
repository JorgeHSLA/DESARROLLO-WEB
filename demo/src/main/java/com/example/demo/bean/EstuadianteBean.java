package com.example.demo.bean;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.example.demo.entities.Estudiante;

@Configuration
public class EstuadianteBean {

    @Bean
    public Estudiante estudiante() {
        return new Estudiante(1, "Juan", "Perez", "https://example.com/imagen.jpg");
    }

    
}
