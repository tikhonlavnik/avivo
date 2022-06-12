import {Container, Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Input, Button} from 'reactstrap'
import CardItem from './CardItem'

export default function StartPage({list, handleCheck, showCard, logUser}) {

  return(
    <div>
      <Container>
        <h1>Avivo - лучшая площадка для продажи</h1>
        <h2>Убедись в этом сам! Зарегистрируйся и выбирай любые товары, используя необходимые фильтры, добавляй свои вещи и многое другое ждет тебя с нами</h2>
        {/* <Button onClick={logUser} color='primary'>Попробовать</Button> */}
        <h4>Рекомендации для вас</h4>
        {/* <Row>
          <Col xs='4'>
            <CardItem item={list[0]}/>
          </Col>
          
        </Row> */}
        <ul>
          {list.map((item, i) => {
            return <li  key={i}><CardItem showCard={() => showCard(item)} handleCheck={() => handleCheck(item)} item={item} /></li>
          })}
        </ul>
      </Container>
    </div>
  )
}