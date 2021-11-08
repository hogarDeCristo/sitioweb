import ControlledCarousel from "../components/ControlledCarousel";
import CardsCausas from "../components/CardsCausas";
import Voluntariado from "../components/Voluntariado";
import MenuNav from "../components/MenuNav";

function HomePage() {
  return (
    <>
      <MenuNav />
      <div>
        <ControlledCarousel></ControlledCarousel>
        <CardsCausas/>
        <Voluntariado/>
      </div>
    </>
  );
}

export default HomePage;
