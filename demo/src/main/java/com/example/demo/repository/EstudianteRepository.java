package com.example.demo.repository;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Repository;
import com.example.demo.entities.Estudiante;
@Repository
public class EstudianteRepository {

        private Map<Integer, Estudiante> estudiantes = new HashMap<>();

        //despues de esto se traerian los datos de la base de datos, sin embargo los vamos s aquemar

        public EstudianteRepository() {
            estudiantes.put(1, new Estudiante(1, "Juan", "Perez", "https://example.com/imagen.jpg"));
            estudiantes.put(2, new Estudiante(2, "Maria", "Gomez", "https://example.com/imagen.jpg"));
            estudiantes.put(3, new Estudiante(3, "Pedro", "Lopez", "https://example.com/imagen.jpg"));

        }

        public Estudiante findById(Integer id) {
            return estudiantes.get(id);
        }

        public Collection<Estudiante> findAll(Integer id) {
            return estudiantes.values();
        }
}
