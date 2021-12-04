import React from "react";
import CardDispositivosSinMapa from "./CardDispositivosSinMapa";
import ContactosIndividuales from "./ContactosIndividuales";
import Testimonios from "./Testimonios";

const Nazareth = () => {
  const testimonios = [
    {
      testimonio:
        "Nazareth para mí, es amor al prójimo",
      testigo: "Marcos, 45 años",
    },
    {
      testimonio:
        "Nazareth para mi es amor al prójimo, aceptar, valorar,aprender, creer, crecer como persona, y hacia los demás.Te brinda herramientas para mejorar tu vida y ser feliz",
      testigo: "Gonzalo, 31 años.",
    },
    {
      testimonio:
        "Nazareth para mí es punto de partida para reiniciar la vida como se debe, como cualquier persona, mostrándome el camino, las herramientas y la posibilidad de ver las cosas con claridad. Lo principal,mi casa, mi familia, así lo siento y sentiré siempre!! Agradecido por la ayuda que se me brindó. Me hicieron ver que con esfuerzo y lucha se logran los objetivos  y así ser una persona responsable y de bien.",
      testigo: "Santiago 51 años",
    },
  ];
  return (
    <>
      <CardDispositivosSinMapa
        imagen={"/dispositivos/Nazareth.jpg"}
        titulo={"NAZARETH"}
        subtitulo={""}
        texto={"Nazareth se ubica en el barrio “La Cuchilla” de nuestra ciudad. Abrió sus puertas en enero de 2015 y fue el primer dispositivo del Hogar de Cristo en Gualeguaychú.  Nació por la necesidad de dar respuesta a la problemática del consumo de sustancias en el barrio y en la ciudad."}
        textoDos={"En este lugar se llevan a cabo diversas actividades tales como talleres de marroquinería, carpintería, espacios de espiritualidad, espacios de escucha, grupos de familia, asesoramiento legal, entre otras.El Centro Barrial Nazareth también aloja a personas durante la noche, lo cual implica el gran desafío de ofrecer contención las 24hrs del día, los siete días de la semana."}
      />
      <Testimonios testimonios={testimonios}></Testimonios>
      <ContactosIndividuales titulo="Centro Barrial Nazareth" mail="hogarcristonazareth@gmail.com" linkRedes="https://www.facebook.com/hogardecristonazareth" facebook="facebook.com/hogardecristonazareth"></ContactosIndividuales>
    </>
  );
};

export default Nazareth;
