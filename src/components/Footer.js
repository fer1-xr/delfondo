import React from 'react';
import { CDBFooter, CDBFooterLink, CDBBtn, CDBIcon, CDBContainer , CDBBox} from 'cdbreact';
import logo from "./img/logo.png"
import "./styles/footer.css"
export const Footer = () => {
  return (
    <CDBFooter className="shadow">
      <CDBBox display="flex" flex="column" className="mx-15 py-2" style={{ width: '90%' }}>
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox>
            <a href="/" className="d-flex align-items-center p-0 text-dark">
              <img alt="logo" src={logo} width="80px" className='logo1' />
             
            </a>
            <p className="my" style={{ width: '300px' }}>
              We are creating High Quality Resources and tools to Aid developers during the
              developement of their projects
            </p>
          </CDBBox>
          <CDBBox>
            <p className="h6 mb-8" style={{ fontWeight: '600' }}>
            Del Fondo
            </p>
            <CDBBox flex="column" display="flex" style={{ cursor: 'pointer', padding: '0', color: "white"}}>
             
              <CDBFooterLink href="/">About Us</CDBFooterLink>
              <CDBFooterLink href="/">Contact</CDBFooterLink>
              <CDBFooterLink href="/">Blog</CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h6 mb-8" style={{ fontWeight: '600' }}>
              Ayuda
            </p>
            <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
           
              <CDBFooterLink href="/">Registrate</CDBFooterLink>
              <CDBFooterLink href="/">Inicia Secion</CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h6 mb-8" style={{ fontWeight: '600' }}>
              Productos
            </p>
            <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBFooterLink href="/">Novelas</CDBFooterLink>
              <CDBFooterLink href="/">Mangas</CDBFooterLink>
              <CDBFooterLink href="/">Textos Educ.</CDBFooterLink>
            </CDBBox>
          </CDBBox>
        </CDBBox>
        <CDBBox
          display="flex"
          justifyContent="center"
          style={{ width: '100%' }}
          className="mx-auto mt-4"
        >
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="facebook-f" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="mx-3 p-2">
            <CDBIcon fab icon="twitter" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="instagram" />
          </CDBBtn>
        </CDBBox>
        <small className="text-center mt-5">&copy; Del Fondo, 2022. All rights reserved.</small>
      </CDBBox>
    </CDBFooter>
  );
};
export default Footer