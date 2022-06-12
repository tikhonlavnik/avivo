import {Container, Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Input, Button} from 'reactstrap'
import CardItem from './CardItem'

export default function MainPage({list, handleCheck}) {

  return(
    <div>
      <Container>
        <br />
        <h4>Все предложения</h4>
        <br />
        {/* <Row>
          <Col xs='4'>
            <CardItem item={list[0]}/>
          </Col>
          
        </Row> */}
        <ul>
          {list.map((item, i) => {
            return <li  key={i}><CardItem handleCheck={() => handleCheck(item)} item={item} /></li>
          })}
        </ul>
      </Container>
    </div>
  )
}