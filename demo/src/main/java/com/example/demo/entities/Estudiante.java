package com.example.demo.entities;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data // Lombok will generate getters, setters, toString, equals, and hashCode methods
@AllArgsConstructor
public class Estudiante {
    private Integer id;
    private String nombre;
    private String apellido;
    private String imagen;
    
}
