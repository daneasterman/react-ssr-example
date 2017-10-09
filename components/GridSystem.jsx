import React from 'react';
import { Row, Col } from 'react-grid-system';

const GridSystem = () => (
  <Row>
    <Col sm={4} debug>
      One of three columns
    </Col>
    <Col sm={4} debug>
      One of three columns
    </Col>
    <Col sm={4} debug>
      One of three columns
    </Col>
  </Row>
);

GridSystem.title = 'GridSystem';

export default GridSystem;