import { useState } from 'react'
import {Container, Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Input, Button} from 'reactstrap'
import Logo from '../images/logo.jpg'

export default function Header({setStart, setLogIn, logged, logOut, handleMyAcc, toggleOpen, setSr,
  changeCat, changeCity, city, cat, isOpenCat, setIsOpenCat, isOpenCity, setIsOpenCity, srch, SEARCH, handleAddGood}) {
  let size = 8;
  logged ? size = 6 : size = 8
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
            <Input onChange={setSr} value={srch} placeholder='Поиск по объявлениям' />
            <Button onClick={SEARCH} color='primary'>Найти</Button>
          </div>
        </Col>
        {/* <Button onClick={handleMyAcc} className='my-acc' color='primary'>Мой аккаунт</Button> */}
        {logged ? <><Col className=' hdr-btns'><Button onClick={handleAddGood} className='my-acc' color='primary'>Разместить объявление</Button><Button onClick={handleMyAcc} className='my-acc' color='primary'>Избранное</Button></Col></>
        : <Col className='centered log-in' xs="2"><Button color='primary' onClick={setLogIn}>Войти</Button></Col>}
      </Row>
    </Container>
  </div> 
  )

}