import { Button, Container, Input, Col, Row, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";


export default function AddGoods({setTx, txt, setDs, des, setPr, prc, setPc, pctr, addGd, ct, setCt, cath, setCaaat, 
  setOpenCat, openCat, toggleOpen, setOpenCt, openCt}) {
  return(
    <Container className="cont">
      {/* <br /> */}
      <h3>Добавить товар</h3>
      <br />
      <Input onChange={setTx} value={txt} type="text" placeholder="Название" />
      <br />
      <Input  onChange={setDs} value={des} type="text" placeholder="Описание" />
      <br />
      <Input  onChange={setPr} value={prc} type="text" placeholder="Цена" />
      <br />
      {/* <Input  onChange={setCt} value={ct} type="text" placeholder="Город" /> */}
      <Dropdown isOpen={openCt} onClick={() => toggleOpen(openCt, setOpenCt)} toggle={function noRefCheck(){}}>
        <DropdownToggle color='primary' caret>
          {ct}
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={setCt}>
            Санкт-Петербург
          </DropdownItem>
          <DropdownItem onClick={setCt}>
            Москва
          </DropdownItem>
          <DropdownItem onClick={setCt}>
            Минск
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <br />
      {/* <Input  onChange={setCaaat} value={cat} type="text" placeholder="Категория" /> */}
      <Dropdown isOpen={openCat} onClick={() => toggleOpen(openCat, setOpenCat)} toggle={function noRefCheck(){}}>
        <DropdownToggle color='primary' caret>
          {cath}
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={setCaaat}>
            Автомобили
          </DropdownItem>
          <DropdownItem onClick={setCaaat}>
            Электроника
          </DropdownItem>
          <DropdownItem onClick={setCaaat}>
            Личные вещи
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <br />
      <Input  onChange={setPc} value={pctr} type="text" placeholder="Введите url фото" />
      {/* <Input  onChange={setPc} value={pctr} type="file" placeholder="Фото" /> */}
      <br />
      <Row>
        <Col>
          <Button onClick={addGd} color="primary">Опубликовать</Button>
        </Col>
      </Row>
    </Container>
  )
}