import {Container, Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Input, Button} from 'reactstrap'
import CardItem from './CardItem'
// import CardItem from './CardItem'

export default function SearchPage({changeCity, city, isOpenCity, setIsOpenCity, toggleOpen, updatedList,
  newList, showCard, handleCheck, isOpenPrice, setIsOpenPrice, price, changePrice, updateChoose, cat}) {

  return(
    <div className='search-div'>
      <Container>
        <Row>
          <Col className='drops' xs='2'>
            <Row>
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
            </Row>
            <Row>
              {cat === 'Личные вещи'?  <Dropdown className='drop-price' isOpen={isOpenPrice} onClick={() => toggleOpen(isOpenPrice, setIsOpenPrice)} toggle={function noRefCheck(){}}>
                <DropdownToggle color='primary' caret>
                  {price}
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem onClick={changePrice}>
                    до 1000
                  </DropdownItem>
                  <DropdownItem onClick={changePrice}>
                    от 1000 до 5000
                  </DropdownItem>
                  <DropdownItem onClick={changePrice}>
                    больше 5000
                  </DropdownItem>
                  <DropdownItem onClick={changePrice}>
                    Любая цена
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown> : cat === 'Автомобили' ? <Dropdown className='drop-price' isOpen={isOpenPrice} onClick={() => toggleOpen(isOpenPrice, setIsOpenPrice)} toggle={function noRefCheck(){}}>
                <DropdownToggle color='primary' caret>
                  {price}
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem onClick={changePrice}>
                    до 100 тыс
                  </DropdownItem>
                  <DropdownItem onClick={changePrice}>
                    от 100 тыс. до 1 млн.
                  </DropdownItem>
                  <DropdownItem onClick={changePrice}>
                    больше 1 млн.
                  </DropdownItem>
                  <DropdownItem onClick={changePrice}>
                    Любая цена
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown> : cat === 'Электроника' ? <Dropdown className='drop-price' isOpen={isOpenPrice} onClick={() => toggleOpen(isOpenPrice, setIsOpenPrice)} toggle={function noRefCheck(){}}>
                <DropdownToggle color='primary' caret>
                  {price}
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem onClick={changePrice}>
                    до 2000
                  </DropdownItem>
                  <DropdownItem onClick={changePrice}>
                    от 2000 до 10000
                  </DropdownItem>
                  <DropdownItem onClick={changePrice}>
                    больше 10000
                  </DropdownItem>
                  <DropdownItem onClick={changePrice}>
                    Любая цена
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown> : cat === 'Все категории' ? null : console.log(1)}

            </Row>
            <Row>
              <Button onClick={updateChoose} className='drop-btn' color='primary'>Применить</Button>
            </Row>
          </Col>
          <Col xs='10'>
            {updatedList.length === 0 ? 
            //  <ul >{newList.map((item, i) => {
            //   // console.log(updatedList.length)
            //   // console.log(newList)
            //   return <li  key={i}><CardItem showCard={() => showCard(item)} handleCheck={() => handleCheck(item)} item={item} /></li>
            // })}</ul>
            <ul className='new-ul'>
            {newList.map((item, i) => {
              return <li  key={i}><CardItem showCard={() => showCard(item)} handleCheck={() => handleCheck(item)} item={item} /></li>
            })}
          </ul>
               :
              // <ul >{updatedList.map((item, i) => {
              //   <h6>По вашему запросу выдано:</h6>
              //   // console.log(updatedList.length)
              //   // console.log(updatedList)
              //   return <li  key={i}><CardItem showCard={() => showCard(item)} handleCheck={() => handleCheck(item)} item={item} /></li>
              // })}</ul>
              <ul className='new-ul'>
              {updatedList.map((item, i) => {
                return <li  key={i}><CardItem showCard={() => showCard(item)} handleCheck={() => handleCheck(item)} item={item} /></li>
              })}
            </ul>
            } 
            
            {/* {newList.length > 0 ? <ul className='ul-search'>{newList.map((item, i) => {
              return <li  key={i}><CardItem showCard={() => showCard(item)} handleCheck={() => handleCheck(item)} item={item} /></li>
            })}</ul> : <h2>По вашему запросу ничего не найдено</h2>} */}
          
          </Col>
        </Row>
      </Container>
    </div>
  )
}