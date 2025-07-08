import React from 'react';
import { CContainer, CRow, CCol, CCard, CCardBody, CCardTitle, CCardText } from '@coreui/react';
import { Plus } from 'lucide-react';

const StatCard = ({ title, value }) => (
  <CCard className="text-center shadow-sm hover:scale-105 transition-transform duration-300 rounded-4">
    <CCardBody>
      <CCardTitle className="fs-4 mb-2">{title}</CCardTitle>
      <CCardText className="display-5 d-flex justify-content-center align-items-center gap-1 text-primary">
        <Plus size={28} strokeWidth={2.5} />
        {value}
      </CCardText>
    </CCardBody>
  </CCard>
);

const ProjectSummary = ({ stats }) => {
  return (
    <CContainer className="my-5">
      <h2 className="text-center mb-4 fw-bold"></h2>
      <CRow className="g-3">
        <CCol md={6} lg={3}>
          <StatCard title="Total Projects" value={stats.totalProjects} />
        </CCol>
        <CCol md={6} lg={3}>
          <StatCard title="Mobile Apps" value={stats.mobileApps} />
        </CCol>
        <CCol md={6} lg={3}>
          <StatCard title="Web Apps" value={stats.webApps} />
        </CCol>
        <CCol md={6} lg={3}>
          <StatCard title="Desktop Apps" value={stats.desktopApps} />
        </CCol>
      </CRow>
    </CContainer>
  );
};

export default ProjectSummary;
