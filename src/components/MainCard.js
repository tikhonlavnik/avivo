import {Card, CardBody, CardTitle, CardText, Button, Container} from 'reactstrap'

export default function MainCard({item, addGood, handleClose}) {


  return (
    <Container>
    <div>
      {/* <Card className='card'> */}
      <div className='main-card'>

      <CardBody>
        <CardTitle className='btn-grp' tag="h4">
          <span>{item.title}</span>
          <Button color='danger' onClick={handleClose}>Назад</Button>
        </CardTitle>
      </CardBody>
      <img
        alt="Card image cap"
        src={item.img}
        width="100%"
      />
      </div>
      <CardBody>
        <CardText>
          {item.descr}
        </CardText>
        <CardText className='my-card-text'>
          <h5>Цена: {item.price} руб.</h5> 
          <h5>Город: {item.city}</h5>
        </CardText>
        <Button onClick={() => addGood(item)} color='primary'>Отложить</Button>
      </CardBody>
    </div>
    </Container>
  )
}