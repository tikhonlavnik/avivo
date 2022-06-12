import { useState } from 'react'
import {Container, Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Input, Button} from 'reactstrap'
import Logo from '../images/logo.jpg'

export default function Header({setStart, setLogIn, logged, logOut, handleMyAcc}) {
  let [isOpenCat, setIsOpenCat] = useState(false)
  let [isOpenCity, setIsOpenCity] = useState(false)

  let [city, setCity] = useState('Все города')
  let [cat, setCat] = useState('Все категории')

  let changeCity = (e) => {
    setCity(e.target.innerText)
  }

  let changeCat = (e) => {
    setCat(e.target.innerText)
  }

  let toggleOpen = (state, changeState) => {
    changeState(!state)
  }
  let size = 8;
  logged ? size = 7 : size = 8
  return (
  <div  className='header'>
    <Container>
      <Row className='centered header-row'>
        <Col onClick={setStart} className='centered' xs="2"><img className='logo' alt='logo' src={Logo}/><b>Avivo</b></Col>
        <Col xs={size}>
          <div className='centered header-group'>
            <Dropdown isOpen={isOpenCat} onClick={() => toggleOpen(isOpenCat, setIsOpenCat)} toggle={function noRefCheck(){}}>
              <DropdownToggle color='primary' caret>
                {cat}
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={changeCat}>
                  Автомобили
                </DropdownItem>
                <DropdownItem onClick={changeCat}>
                  Электроника
                </DropdownItem>
                <DropdownItem onClick={changeCat}>
                  Личные вещи
                </DropdownItem>
                <DropdownItem onClick={changeCat}>
                  Все категории
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Input placeholder='Поиск по объявлениям' />
            <Dropdown className='drop-city' isOpen={isOpenCity} onClick={() => toggleOpen(isOpenCity, setIsOpenCity)} toggle={function noRefCheck(){}}>
              <DropdownToggle color='primary' caret>
                {city}
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={changeCity}>
                  Санкт-Петербург
                </DropdownItem>
                <DropdownItem onClick={changeCity}>
                  Москва
                </DropdownItem>
                <DropdownItem onClick={changeCity}>
                  Минск
                </DropdownItem>
                <DropdownItem onClick={changeCity}>
                  Все города
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Button color='primary'>Найти</Button>
          </div>
        </Col>
        {logged ? <><Col className='centered'><Button onClick={handleMyAcc} className='my-acc' color='primary'>Мой аккаунт</Button><Button color='primary' onClick={logOut}>Выйти</Button></Col></>
        : <Col className='centered log-in' xs="2"><Button color='primary' onClick={setLogIn}>Войти</Button></Col>}
      </Row>
    </Container>
  </div> 
  )

}