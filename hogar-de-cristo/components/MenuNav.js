import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

const MenuNav= () => {

    return (
        <>
        <div id="top" className="fixed-top">
            <div className="row">
                <div className="col-md-12 col-lg-6">
                    <div className="logo">
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="main-menu">
                        <div className="navbar navbar-expand-lg p-0">
                            <Nav className="navbar-nav flex-fill justify-content-between align-items-center"> 
                                <Nav.Item>
                                    <Nav.Link>HOME</Nav.Link>
                                </Nav.Item>
                                <NavDropdown title="SOBRE" id="nav-dropdown">
                                    <NavDropdown.Item>HISTORIA</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item>EQUIPO/AUTORIDADES</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item>FAMILIA GRANDE</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="CAUSAS" id="nav-dropdown">
                                    {['end'].map((direction) => (
                                    <DropdownButton
                                        drop={direction}
                                        variant="secundario"
                                        title={` CENTROS BARRIALES `}
                                    >
                                        <Dropdown.Item>NAZARETH</Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item>CORAZÓN DE MARÍA</Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item>ASUNCIÓN DE MARÍA</Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item>CASA MUNILLA</Dropdown.Item>
                                    </DropdownButton>
                                    ))}
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item>EPI</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item>REFUGIO</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    {['end'].map((direction) => (
                                    <DropdownButton
                                        drop={direction}
                                        variant="secundario"
                                        title={`   BROTA    `}
                                    >
                                        <Dropdown.Item>PRODUCTOS</Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item>SERVICIOS</Dropdown.Item>
                                    </DropdownButton>
                                    ))}
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item>CASITA LIBERTAD</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="PAGINAS" id="nav-dropdown">
                                    <NavDropdown.Item>DONACIÓN MONETARIA</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item>SER VOLUNTARIO</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item>CONTRATAR SERVICIOS BROTA</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item>COMPRAR PRODUCTOS BROTA</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Item>
                                    <Nav.Link>BLOG</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link>CONTACTO</Nav.Link>
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