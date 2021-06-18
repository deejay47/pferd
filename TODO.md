
### Mejoras para Entrega Final

+ Mover esta lógica del order a la vista de payment
+ Crear vista PAYMENT (Multipago mock)
+ Mover config de firebase a .env
+ Mejorar vista de ITEM en pantalla wide
+ Implementar Toasters para avisos importantes:
 - Aviso de producto eliminado
 - Aviso de carrito vaciado
 - Confirmación de adición a carrito
 - Confirmación de orden creada
+ Optimizar validación de formularios
+ Seccion distribuidores, quienes somos

### SI HAY TIEMPO, backoffice:

+ Debe permitir ingresar sólo a usuarios autenticados
+ Debe listar todas las órdenes existentes 
+ Debe permitir cambiar su estado:
    Creada: El cliente realiza la compra
    En proceso: El vendedor entra al backoffice y toma esta compra
    Enviada: El vendedor ya envió el pedido
    Entregada: El correo entregó el paquete y el vendedor recibió la confirmación
    Cancelado: por algún motivo el venedor puede cancelar el pedido
+ Crear colección de usuarios en Firestore
+ Crear vista de ordersBackoffice (Podría tener un login en la web) con renderizado condicional del logout
+ ordersBackoffice debe tener su propio Context para manejar usuarios logueados