package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;

import com.example.demo.entities.Estudiante;
import com.example.demo.service.EstudianteServiceImplementation;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;




@Controller
public class EstudianteController {

    Estudiante estudiante;
    EstudianteServiceImplementation estudianteService;

    public EstudianteController(Estudiante estudiante, EstudianteServiceImplementation estudianteService) {
        this.estudiante = estudiante;
        this.estudianteService = estudianteService; 
    }


    @GetMapping("/{id}")
    public String getMethodName(Model model, @PathVariable("id") Integer id) {

        Estudiante estudiante = estudianteService.findById(id);
        model.addAttribute("estudiante", estudiante);
        return "estudiante";
    }
    

    @GetMapping()
    public String getEstudiantes(Model model) {
        model.addAttribute("estudiantes", estudianteService.findAll(null));
        return "estudiantes";
    }

    @GetMapping("/estudiante")
    public String getEstudiante( Model model) {


        model.addAttribute("estudiante", estudiante);
        return "estudiante" ; // Placeholder for the actual view name
    }

     @PostMapping("/add")
     public String addEstudiante(@ModelAttribute("estudiante") Estudiante estudiante ) { 
         //TODO: process POST request

         // pasar al servicio para luego al repositorio

         //Estudiante entity = estudianteService.save(estudiante);
         
         return "estudiantes";
     }
     
}
