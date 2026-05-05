## Casos de uso 1: Enviar Formulario de cotización
    Actor principal: Cliente
    Precondiciones: Debe completar todos los campos del formulario
    Flujo principal:
        1. El actor debe rellenar todo el formulario y poder enviar correctamente la solicitud
        2. El sistema debe enviar la solicitud al correo electrónico de la empresa y guardar en una base de datos
        3. En caso de error el sistema debe enviar una alerta al desarrollador
        4. En caso de error se le debe alertar al usuario cliente 
## Caso de uso 2: Conexion con sistema externos
    Actor principal: Cliente
    Precondiciones: No aplica
    Flujo principal: 
        1. El Cliente apreta el boton de wsp
        2. El sistema debe redirigirlo al contacto
