import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

const MenuNav= () => {

    return (
        <>
        <div id="top" className="fixed-top">
            <div className="row">
                <div className="col-md-12 col-lg-5">
                    <div className="logo">
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="main-menu">
                        <div className="navbar navbar-expand-lg p-0">
                            <Nav className="navbar-nav flex-fill justify-content-between align-items-center"> 
                                <Nav.Item>
                                    <Nav.Link href="#">INICIO</Nav.Link>
                                </Nav.Item>
                                <NavDropdown href="#" title="¿QUIENES SOMOS?" id="nav-dropdown">
                                    <NavDropdown.Item href="#">NOSOTROS</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#">EQUIPO/AUTORIDADES</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#">FAMILIA GRANDE</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown href="#" title="DISPOSITIVOS" id="nav-dropdown">
                                    {['end'].map((direction) => (
                                    <DropdownButton
                                        drop={direction}
                                        key={direction}
                                        variant="secundario"
                                        title={` CENTROS BARRIALES `}
                                    >
                                        <Dropdown.Item href="#">NAZARETH</Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item href="#">CORAZÓN DE MARÍA</Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item href="#">ASUNCIÓN DE MARÍA</Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item href="#">CASA MUNILLA</Dropdown.Item>
                                    </DropdownButton>
                                    ))}
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#">EPI</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#">REFUGIO</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    {['end'].map((direction) => (
                                    <DropdownButton
                                        drop={direction}
                                        key={direction}
                                        variant="secundario"
                                        title={`   BROTA    `}
                                    >
                                        <Dropdown.Item href="#">PRODUCTOS</Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item href="#">SERVICIOS</Dropdown.Item>
                                    </DropdownButton>
                                    ))}
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#">CASITA LIBERTAD</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown href="#" title="COMO COLABORAR" id="nav-dropdown">
                                    <NavDropdown.Item href="#">DONACIÓN MONETARIA</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#">SER VOLUNTARIO</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#">CONTRATAR SERVICIOS BROTA</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#">COMPRAR PRODUCTOS BROTA</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Item>
                                    <Nav.Link href="#">BLOG</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="#">CONTACTO</Nav.Link>
                                </Nav.Item>
                            </Nav> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default MenuNav;
