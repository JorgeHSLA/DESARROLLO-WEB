package com.example.demo.service;

import java.util.Collection;


import com.example.demo.entities.Estudiante;


public interface EstudianteService {
    
    public Estudiante findById(Integer id) ;

    public Collection<Estudiante> findAll(Integer id) ;
}
