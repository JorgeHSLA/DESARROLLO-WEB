package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.demo.entities.Estudiante;
import org.springframework.ui.Model;


@Controller
public class estudianteController {


    @GetMapping("/estudiante")
    public String getEstudiante( Model model) {

        Estudiante estudiante = new Estudiante(1, "Juan", "Perez", "https://example.com/imagen.jpg");
        
        model.addAttribute("estudiante", estudiante);
        return "estudiante" ; // Placeholder for the actual view name
    }

    
}
