import { Navbar, Nav, NavItem, NavDropdown, DropdownButton, Dropdown} from 'react-bootstrap';
import { useRouter } from "next/router";

const MenuNav = () => {
  const router = useRouter();

  return (
    <>
      <Navbar collapseOnSelect
        id="top"
        className="fixed-top"
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <div className="container">
          <Navbar.Brand className="col-md-8 col-lg-4" href="/">
            <img
              src="/LOGO-HDC-blanco.png"
              className=""
              alt="logo"
              style={{ width: "7.5rem" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto navbar-nav flex-fill justify-content-between align-items-center">
              <Nav.Item>
                <Nav.Link onClick={() => router.push("/")}>INICIO</Nav.Link>
              </Nav.Item>
              <NavDropdown title="¿QUIÉNES SOMOS?" id="nav-dropdown">
                <NavDropdown.Item onClick={() => router.push("/quienes")} >
                  NOSOTROS
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={() => router.push("/quienes#equipo")}>
                  EQUIPO
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={() => router.push("/quienes#familiagrande")}>
                  FAMILIA GRANDE
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown href="#" title="DISPOSITIVOS" id="nav-dropdown">
                {["end"].map((direction) => (
                  <DropdownButton
                    drop={direction}
                    key={direction}
                    variant="secundario"
                    title={` CENTROS BARRIALES `}
                  >
                    <Dropdown.Item onClick={() => router.push("/centros#nazareth")}>NAZARETH</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={() => router.push("/centros#corazondemaria")}>CORAZÓN DE MARÍA</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={() => router.push("/centros#asunciondemaria")}>ASUNCIÓN DE MARÍA</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={() => router.push("/centros#casamunilla")}>CASA MUNILLA</Dropdown.Item>
                  </DropdownButton>
                ))}
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={() => router.push("/depi")}>EPI JESÚS NIÑO</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={() => router.push("/drefugio")}>REFUGIO</NavDropdown.Item>
                <NavDropdown.Divider />
                {["end"].map((direction) => (
                  <DropdownButton
                    drop={direction}
                    key={direction}
                    variant="secundario"
                    title={`   BROTA    `}
                  >
                    <Dropdown.Item onClick={() => router.push("/dbrotaproductos")}>
                      PRODUCTOS
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={() => router.push("/dbrotaservicios")}>
                      SERVICIOS
                    </Dropdown.Item>
                  </DropdownButton>
                ))}
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={() => router.push("/dcasita")}>
                  CASITA LIBERTAD
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown href="#" title="CÓMO COLABORAR" id="nav-dropdown">
                <NavDropdown.Item
                  href="https://donaronline.org/hogar-de-cristo-gualeguaychu/ampliando-el-hogar-de-cristo-agrandando-el-abrazo?preview=true"
                  target="_blank"
                >
                  DONACIÓN MONETARIA
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={() => router.push("/voluntariado")}>SER VOLUNTARIO</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={() => router.push("/dbrotaservicios")}>
                  CONTRATAR SERVICIOS BROTA
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={() => router.push("/dbrotaproductos")}>
                  COMPRAR PRODUCTOS BROTA
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Item>
                <Nav.Link onClick={() => router.push("/novedades")}>NOVEDADES</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={() => router.push("#contacto")}>CONTACTO</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
};

export default MenuNav;

