import { Button, Container, Input, Col, Row } from "reactstrap";


export default function RegPage({setReg, regUser, er, log, pass, setPs, setLg}) {
  return(
    <Container className="cont">
      <h1>Регистрация</h1>
      {er ? er : null}
      <Input type="email" placeholder="E-Mail" />
      <br />
      <Input  onChange={setLg} value={log} type="text" placeholder="Login" />
      <br />
      <Input  onChange={setPs} value={pass} type="password" placeholder="Password" />
      <br />
      <Row>
        <Col>
          <Button onClick={regUser} color="primary">Регистрация</Button>
        </Col>
      </Row>
    </Container>
  )
}