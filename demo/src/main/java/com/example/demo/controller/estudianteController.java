package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import com.example.demo.entities.Estudiante;
import org.springframework.ui.Model;


@Controller
public class estudianteController {

    Estudiante estudiante;

    public estudianteController(Estudiante estudiante) {
        this.estudiante = estudiante;
    }

    @GetMapping("/estudiante")
    public String getEstudiante( Model model) {

        

        
        model.addAttribute("estudiante", estudiante);
        return "estudiante" ; // Placeholder for the actual view name
    }

    
}
