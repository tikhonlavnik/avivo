import { Button, Container, Input, Col, Row } from "reactstrap";


export default function LogInPage({setReg, logUser, er, log, pass, setPs, setLg}) {
  return(
    <Container className="cont">
      <h1>Войти</h1>
      {er ? er : null}
      <Input type="text" onChange={setLg} value={log} placeholder="Login" />
      <br />
      <Input type="password" onChange={setPs} value={pass} placeholder="Password" />
      <br />
      <Row>
        <Col>
          <Button onClick={logUser} color="primary">Войти</Button>
        </Col>
        <Col>
          <Button onClick={setReg} color="primary">Регистрация</Button>
        </Col>
      </Row>
    </Container>
  )
}