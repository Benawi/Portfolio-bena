import React from 'react';
import { CContainer, CRow, CCol, CCard, CCardBody, CCardTitle, CCardText } from '@coreui/react';

const Services = ({ heading, servicesList }) => {
  return (
    <CContainer className="my-5" id='services'>
<h2 className="display-4 mb-5 text-center">{heading}</h2>
      <CRow className="g-3">
        {servicesList.map((service, index) => (
          <CCol md={6} lg={3} key={index}>
            <CCard className="text-center shadow-sm h-100 hover:scale-105 transition-transform duration-300 rounded-4">
              <CCardBody>
                <div className="display-3">{service.icon}</div>
                <CCardTitle className="fs-5 mt-2">{service.title}</CCardTitle>
                <CCardText className="small mt-2">{service.description}</CCardText>
              </CCardBody>
            </CCard>
          </CCol>
        ))}
      </CRow>
    </CContainer>
  );
};

export default Services;
