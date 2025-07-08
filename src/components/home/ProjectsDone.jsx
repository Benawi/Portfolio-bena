import React from 'react';
import {
  CContainer,
  CRow,
  CCol,
  CCard,
  CCardBody,
  CCardTitle,
  CCardText,
  CBadge
} from '@coreui/react';

const ProjectsDone = ({ heading, projectsList }) => {
  return (
    <CContainer className="my-5">
      <h2 className="text-center fw-bold mb-4">{heading}</h2>
      <CRow className="g-3">
        {projectsList.map((project, index) => (
          <CCol key={index} md={6} lg={4}>
            <CCard className="text-center shadow-sm h-100 hover:scale-105 transition-transform duration-300 rounded-4">
              <CCardBody>
                <div className="display-3 mb-2">{project.icon}</div>
                <CCardTitle className="fs-5">{project.title}</CCardTitle>
                <CBadge color="info" className="mt-2">{project.category}</CBadge>
                <CCardText className="small mt-3">{project.description}</CCardText>
              </CCardBody>
            </CCard>
          </CCol>
        ))}
      </CRow>
    </CContainer>
  );
};

export default ProjectsDone;
