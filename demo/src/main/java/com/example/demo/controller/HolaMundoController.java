package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HolaMundoController {
    @GetMapping("/holamundo")
    public String holaMundo() {
        return "hola_mundo";
    }
}
