# Forms en html

Como buena practica el form se debe iniciar asi:

<img width="282" height="86" alt="image" src="https://github.com/user-attachments/assets/39e116f4-af61-41a8-a7be-a8e27e2f69f7" />

las etiquetas alrededor es lo indicado:

A continuacion estare un codigo de los formatos y este estara comentado:

    <form class="center">
      <fieldset>
      
          <!-- nombre que se le va a dar al forms  --> 
        <legend>Realiza tu pedido</legend>

        <!-- nombre del input, se relacionan usando el for y el id  --> 
        <label for="txtNombre" class="titulo">Nombre</label>
        <input type="text" placeholder="Nombre" name="nombree" id="txtNombre" />

        <!-- lo mismo que el anterior pero con el type number  -->  
        <label for="txtNumero" class="titulo">Número</label>
        <input
          type="number"
          placeholder="Numero"
          name="numero"
          id="txtNumero"
        />

        <!-- Aca se nos dan opciones recomendadas pero se puede escribir igual, ahora se ve como el list expresa el id del datalist  -->  
        <label for="selectCiudad" class="titulo">Ciudad</label>
        <input list="selectCiudad" name="ciudad" />
        <datalist id="selectCiudad">
          <option value="Bogota"></option>
          <option value="Cali"></option>
          <option value="Md">Medellin</option>
        </datalist>

        <!-- Aca se debe elegir si o si una opcion, se usa el id del select para establecer union entre las dos partes -->  
        <label for="selectPizza" class="titulo">Sabor</label>
        <select name="pizza" id="selectPizza">
          <option value="Muzzarella">Mozzarella</option>
          <option value="Napolitana">Napolitana</option>
          <option value="Calabresa">Calabresa</option>
        </select>

        <!-- Es lo mismo que lo anterior pero lo hace mostrando todas las opciones y seleccionas en un circulo cual quieres -->
        <strong class="titulo">Seleccione su postre</strong>
        <div class="horizontal">
          <label for="chocolate">Chocolate</label>
          <input type="radio" name="postre" value="chocolate" id="chocolate" />

          <label for="vainilla">Vainilla</label>
          <input type="radio" name="postre" value="vainilla" id="vainilla" />

          <label for="frutilla">Frutilla</label>
          <input type="radio" name="postre" value="frutilla" id="frutilla" />
        </div>

        <!-- check box, se puede elegir mas de una opcion  --> 
        <strong class="titulo">Adicionales</strong><br />
        <div class="horizontal">
          <label for="salsa">Salsa</label>
          <input type="checkbox" name="salsa" id="salsa" value="yes" />

          <label for="queso">Queso</label>
          <input type="checkbox" name="queso" id="queso" value="yes" />

          <label for="jamon">Jamon</label>
          <input type="checkbox" name="jamon" id="jamon" value="yes" />
        </div>

         <!-- un comentario muy grande  -->  
        <label for="txtComentarios" class="titulo">Comentarios</label>
        <textarea
          name="comentarios"
          id="txtComentarios"
          cols="80"
          rows="10"
        ></textarea>
        <button type="submit">Enviar</button>
      </fieldset>
    </form>

## Importante

para validar el sumbit se pone:

     form.addEventListener("sumbit",(e) => {
       //contenido

     })


existe preventDefault(), para evitar que se lance el sumbit y se pone ahi