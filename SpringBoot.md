# Springboot

- Carpeta templates tiene los html que se usaran
- properties, configurar el servicio
- Carpeta de static, es donde va la carpeta images, css, JS

# anotaciones:

- @SpringBootApplication, equivale a otras 3:

    - @Configuration: beans
    - @EnableAutoConfiguration: leer la dependencias del POM
    - @ComponentScan: genera cosas automaticamente (no haces new)

# Thymeleaf 

Sirve para la union entre HTML y java

para poder pasar data de java al html el html debe tener en la wetiqueta html:

        <!DOCTYPE html>
        <html lang="en" xmlns:th="http://www.thymeleaf.org">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>

# beans y inyeccion de dependencias

- El bean es un objeto global, este vive en springboot, cuando alguien quiere 
- El autowired no es tan bueno como parece, es mejor con constructor pasar los beans