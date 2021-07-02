
### Backoffice:

* En una etapa siguiente, se implementará un sistema de backoffice para la gestión de pedidos

+ Debe permitir ingresar sólo a usuarios autenticados
 - Utilizar autenticación de firestore
+ Debe listar todas las órdenes existentes 
+ Debe permitir cambiar su estado:
    CREATED: El cliente confirmó la órden sin realizar el pago
    PAID: El pago de la órden se ha registrado
    PROCESSING: El vendedor entra al backoffice y toma esta compra para su procesamiento
    SHIPPED: El vendedor ya envió el pedido
    DELIVERED: El correo entregó el paquete y el vendedor recibió la confirmación
    CANCELLED: por algún motivo el vendedor puede cancelar el pedido
+ Crear vista de ordersBackoffice con renderizado condicional del logout
 - ordersBackoffice debería tener su propio Context para manejar autenticación