import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

const EcommerceDashboard = () => {
    return (
        <div>
            <h4 className="mb-4">Home</h4>

            <Row>
                {/* Indicador 1 - Total de Vendas */}
                <Col md={3}>
                    <Card className="shadow-sm">
                        <Card.Body>
                            <h6 className="text-muted">Total de Vendas</h6>
                            <h3>R$ 120.000</h3>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Indicador 2 - Clientes Ativos */}
                <Col md={3}>
                    <Card className="shadow-sm">
                        <Card.Body>
                            <h6 className="text-muted">Clientes Ativos</h6>
                            <h3>1.250</h3>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Indicador 3 - Pedidos Pendentes */}
                <Col md={3}>
                    <Card className="shadow-sm">
                        <Card.Body>
                            <h6 className="text-muted">Pedidos Pendentes</h6>
                            <h3>45</h3>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Indicador 4 - Lucro Mensal */}
                <Col md={3}>
                    <Card className="shadow-sm">
                        <Card.Body>
                            <h6 className="text-muted">Lucro Mensal</h6>
                            <h3>R$ 18.500</h3>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export { EcommerceDashboard };
