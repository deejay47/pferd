import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useCart } from "../../contexts/cartContext";
import { useHistory, Link, Redirect } from "react-router-dom";
import {Check, X, ChevronDoubleRight, ChevronDoubleLeft} from "react-bootstrap-icons"
import Loading from "../Loading/Loading";
import { getFirestore } from "../../firebase";
import CheckoutStepper from "../CheckoutStepper/CheckoutStepper";

import "./CheckoutForm.scss";

function CheckoutForm() {  
  const history = useHistory();
  const cart = useCart();
  const [loading, setLoading] = useState(false);
  const [formFields, setFormFields] = useState(
    {
      firstname: "",
      lastname: "",
      phone: "",
      dni: "",
      email: "",
      address: "",
      city: "",
      zipcode: "",
      state: "",
      country: "ARG"
    }
  )
  const[orderId, setOrderId] = useState(null)
  const numberFormat = new Intl.NumberFormat("de-DE");

  //Watch de los campos del form para deshabilitar registrar órden con datos faltantes
  const onValueChange = (event) => {
    setFormFields({...formFields, [event.target.name]: event.target.value})
  }

  //Chequeo de campos completos
  const formFieldsCheck = () => {
    let checkedForm = true
    Object.values(formFields).forEach(field => {
      if(field === ""){
        checkedForm = false
      }
    });
    return checkedForm
  }

  //Obtener momento de compra
  const getDate = () => {
    const today = new Date();
    const date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const dateTime = date+' '+time;
    return dateTime
  }

  const purchaseConfirm = (event) => {
    event.preventDefault();

    setLoading(true)

    const address = {
      address: formFields.address,
      city: formFields.city,
      zipcode: formFields.zipcode,
      state: formFields.state,
      country: formFields.country
    };

    const orderedItems = []
  cart.cart.items.forEach(item => {
      orderedItems.push({
        id: item.item.id, 
        title: item.item.title, 
        price: item.item.price,
        quantity: item.quantity
    })
  });

    const order = {
      buyer: {
        name: formFields.firstname,
        lastname: formFields.lastname,
        phone: formFields.phone,
        dni: formFields.dni,
        email: formFields.email,
      },
      addresses: {
        delivery: address,
        billing: address,
      },
      date: getDate(),
      orderedItems: orderedItems,
      orderTotalPrice: cart.cart.totalPrice,
      status: "CREATED"
    };

    //Instanciar Firestore
    const db = getFirestore();

    //Setear colección a utilizar
    const ordersCollection = db.collection("orders");

    //Guardar el registro correspondiente a esta órden
    ordersCollection.add(order).then(({ id }) => {
      setOrderId(id)
      cart.clear()
      setLoading(false)
    });
  };

  return (

    <div>
    {loading ? (
      <Loading></Loading>
    ) : (

        orderId === null ? (
          <Row>
            <CheckoutStepper active={1}></CheckoutStepper>
          <Col>
            {cart.cart.items.length === 0 ? (
              //Redirigir a cart si está vacío
              history.push("/cart")
            ) : (
              <div className="container">
                <br/>
                <div className="row">

                  <div className="col-md-8 order-md-2">
                    <h4 className="mb-3">Tus datos</h4>
                    <form
                      className="needs-validation"
                      noValidate
                      onSubmit={purchaseConfirm}
                    >
                      <div className="row">
                        <div className="col-md-4 mb-3">
                          <label htmlFor="firstname">Nombre/s</label>
                          <input
                            type="text"
                            className="form-control"
                            id="firstname"
                            name="firstname"
                            placeholder="Juan"
                            onChange={onValueChange}
                            required
                          />

                        </div>

                        <div className="col-md-4 mb-3">
                          <label htmlFor="lastname">Apellido/s</label>
                          <input
                            type="text"
                            className="form-control"
                            id="lastname"
                            name="lastname"
                            placeholder="Perez"
                            onChange={onValueChange}
                            required
                          />

                        </div>

                        <div className="col-md-4 mb-3">
                          <label htmlFor="dni">DNI</label>
                          <input
                            type="text"
                            className="form-control"
                            id="dni"
                            name="dni"
                            placeholder="12345678"
                            onChange={onValueChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label htmlFor="email">
                            E-mail <span className="text-muted"></span>
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            placeholder="alguien@ejemplo.com"
                            onChange={onValueChange}
                            required
                          />

                        </div>
                        <div className="col-md-6 mb-3">
                          <label htmlFor="phone">Teléfono</label>
                          <input
                            type="text"
                            className="form-control"
                            id="phone"
                            name="phone"
                            placeholder="0111565854854"
                            onChange={onValueChange}
                            required
                          />

                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-12 mb-3">
                          <label htmlFor="address">Dirección</label>
                          <input
                            type="text"
                            className="form-control"
                            id="address"
                            name="address"
                            placeholder="Calle falsa 1234"
                            onChange={onValueChange}
                            required
                          />

                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-4 mb-3">
                          <label htmlFor="city">Ciudad</label>
                          <input
                            type="text"
                            className="form-control"
                            id="city"
                            name="city"
                            placeholder="Córdoba"
                            onChange={onValueChange}
                            required
                          />
                        </div>
                        <div className="col-md-2 mb-3">
                          <label htmlFor="zipcode">CP</label>
                          <input
                            type="text"
                            className="form-control"
                            id="zipcode"
                            name="zipcode"
                            placeholder="XXXX"
                            onChange={onValueChange}
                            required
                          />

                        </div>

                        <div className="col-md-4 mb-3">
                          <label htmlFor="state">Provincia</label>
                          <select
                            className="form-control custom-select d-block w-100"
                            id="state"
                            name="state"
                            onChange={onValueChange}
                            required
                            defaultValue=""
                          >
                            <option disabled value="">Seleccionar...</option>
                            <option value="BUE">Buenos Aires</option>
                            <option value="CAP">Capital Federal</option>
                            <option value="CAT">Catamarca</option>
                            <option value="CHA">Chaco</option>
                            <option value="CHU">Chubut</option>
                            <option value="COR">Córdoba</option>
                            <option value="COO">Corrientes</option>
                            <option value="ENR">Entre Ríos</option>
                            <option value="FOR">Formosa</option>
                            <option value="JUJ">Jujuy</option>
                            <option value="LAP">La Pampa</option>
                            <option value="LAR">La Rioja</option>
                            <option value="MEN">Mendoza</option>
                            <option value="MIS">Misiones</option>
                            <option value="NEU">Neuquén</option>
                            <option value="RNE">Río Negro</option>
                            <option value="SAL">Salta</option>
                            <option value="SJU">San Juan</option>
                            <option value="SLU">San Luis</option>
                            <option value="SCR">Santa Cruz</option>
                            <option value="SFE">Santa Fe</option>
                            <option value="SES">Santiago del Estero</option>
                            <option value="TDF">Tierra del Fuego</option>
                            <option value="TUC">Tucumán</option>
                          </select>

                        </div>
                        <div className="col-md-2 mb-3">
                          <label htmlFor="country">País</label>
                          <input
                            type="text"
                            className="form-control"
                            id="country"
                            name="country"
                            placeholder="ARG"
                            disabled
                            onChange={onValueChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="same-address"
                          checked={true}
                          readOnly
                                                  />
                        <label
                          className="custom-control-label"
                          htmlFor="same-address"
                        >
                          La dirección de entrega es la misma que la de
                          facturación
                        </label>
                      </div>
                      <hr className="mb-4" />

                      <button
                        disabled={formFieldsCheck()===false}
                        className="btn btn-outline-success btn-lg btn-block float-end"

                        type="submit"
                      >
                        {formFieldsCheck()===false ? (
                            <div className="text-danger fade-in">
                            <X size="25"></X>Proceder al pago
                          </div>
                      ) : (
                        <div className="fade-in">
                         Proceder al pago<ChevronDoubleRight size="25"></ChevronDoubleRight>
                      </div>
                      )}
                      </button>
                      {formFieldsCheck()===false ? (
                            <div className="text-danger fade-in">
                            <X size="25"></X>Para continuar, completá los datos faltantes
                          </div>
                      ) : (
                        <div className="text-success fade-in">
                        <Check size="25"></Check> Correcto!
                      </div>
                      )}
                      
                    </form>
                  </div>
                  <div className="col-md-4 order-md-1 mb-4">
                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                      <span className="text-muted">Tu pedido</span>
                      <span className="badge badge-secondary badge-pill">
                        {cart.cart.totalItems} producto/s
                      </span>
                    </h4>
                    <ul className="list-group mb-3">
                      {cart.cart.items[0]
                        ? cart.cart.items?.map((item) => (
                            <li key={item.item.id} className="list-group-item d-flex justify-content-between lh-condensed">
                              <div>
                                <h6 className="my-0">{item.item.title}</h6>
                                <small className="text-muted">
                                  X {item.quantity}
                                </small>
                              </div>
                              <span className="text-muted">
                                $ {numberFormat.format(item.item.price)}
                              </span>
                            </li>
                          ))
                        : ""}

                      <li className="list-group-item d-flex justify-content-between">
                        <span>Total</span>
                        <strong>
                          $ {numberFormat.format(cart.cart.totalPrice)}
                        </strong>
                      </li>
                    </ul>
                    <Button
                        type="button"
                        as={Link}
                        to="/cart"
                        variant="outline-primary"
                        className="button shop-button float-end"
                      >
                        <ChevronDoubleLeft size="25"></ChevronDoubleLeft>{" "}
                        Modificar pedido
                      </Button>
                  </div>
                </div>
              </div>
            )}
          </Col>
        </Row>
        ) : (
          <Redirect to={'/payment/' + orderId}/>
          //TODO: Enviar E-mail. con link de órden para retomar pago en caso de no finalizar
        )
)}  
</div>
  );

}

export default CheckoutForm;
