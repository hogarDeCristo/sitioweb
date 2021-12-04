import React, { useState } from "react";
import MapDispositivos from "./MapDispositivos";
import Button from "react-bootstrap/Button";

const CardDispositivos = ({
  imagen,
  titulo,
  subtitulo,
  texto,
  textoDos,
  textButton = "",
  source,
}) => {
  const [show, setShow] = useState(true);
  const [mostrar, setMostrar] = useState(true);
  return (
    <div>
      <div className="container movil my-5">
        <div className="row mt-5">
          <div className="col-12 col-md-6">
            {<img src={imagen} className="mt-2 img-fluid" alt="voluntarios" />}
            <div>{!mostrar && <MapDispositivos source={source} />}</div>
          </div>
          <div className="col-12 col-md-6">
            <div className="row title mt-2">
              <h2>{titulo}</h2>
            </div>
            <div className="row mt-1 mb-1">
              <p className="subtitulo-dispositivos">{subtitulo}</p>
            </div>
            <div className="row">
              <p>{texto} </p>
              <div>{!show && <p>{textoDos}</p>}</div>
              <button
                className="btn btn-dispositivos"
                type="button"
                onClick={() => {
                  setShow(!show);
                }}
              >
                {show ? "LEER MÁS" : "LEER MENOS"}
              </button>
              <button
                className="btn btn-ubicaciones"
                type="button"
                onClick={() => {
                  setMostrar(!mostrar);
                }}
              >
                {mostrar? "VER UBICACIÓN" : "OCULTAR UBICACIÓN"}
              </button>
            </div>
            {textButton && (
              <Button className="boton-slider">
                COMPRAR NUESTROS PRODUCTOS
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDispositivos;
