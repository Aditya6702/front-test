import React, { useState } from 'react';
import { Row,Col,InputGroup,FormControl,Button,Container } from 'react-bootstrap';
import Particle from '../../Particle'; // Assuming you have a Particle component
import ProjectCard from './ProjectCards'; // Assuming you have a ProjectCard component

function Logs() {
  const [searchQuery, setSearchQuery] = useState('');
  const [logs, setLogs] = useState([
    
    { id: 1, text: 'Log entry 1' },
    { id: 2, text: 'Log entry 2' },
    
  ]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredLogs = logs.filter((log) =>
    log.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Logs 
        </h1>
        <Row className="justify-content-center align-items-center">
          <Col lg={6} md={8} sm={10}>
            <InputGroup className="align-items-center">
              <FormControl
                type="search"
                id="form1"
                className="form-control rounded-pill"
                value={searchQuery}
                onChange={handleSearchChange}
                style={{ backgroundColor: '#9CD5F0', border: 'none', paddingRight: '1rem' ,paddingTop:'1rem',marginTop:'2rem'}} // Brighter color
              />
              <Button
                type="button"
                style={{
                  marginTop: '1.758rem',
                  marginBottom: '0.2rem',
                  marginLeft:'0.3rem',
                  borderRadius: '8px',
                  padding: '0.6rem'
                }}
                className="btn btn-primary"
                data-mdb-ripple-init
              >
                <i className="fas fa-search"></i> Search
              </Button>
            </InputGroup>
          </Col>
        </Row>

        <p style={{ color: 'white' }}>Check all your Logs here</p>
        {filteredLogs.map((log) => (
          <ProjectCard key={log.id} text={log.text} />
        ))}
      </Container>
    </Container>
  );
}

export default Logs;
