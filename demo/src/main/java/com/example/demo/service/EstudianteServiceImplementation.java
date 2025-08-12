package com.example.demo.service;

import java.util.Collection;

import org.springframework.stereotype.Service;

import com.example.demo.entities.Estudiante;
import com.example.demo.repository.EstudianteRepository;


@Service
public class EstudianteServiceImplementation implements EstudianteService {



    // no me gusta el autowired
    EstudianteRepository estudianteRepository;

    public EstudianteServiceImplementation(EstudianteRepository estudianteRepository) {
        this.estudianteRepository = estudianteRepository;

    }
    

    @Override
    public Estudiante findById(Integer id){
        return estudianteRepository.findById(id);
    } 

    @Override
    public Collection<Estudiante> findAll(Integer id){
        return estudianteRepository.findAll(id);
    } 
}
