import {Card, CardBody, CardTitle, CardText, Button, Container} from 'reactstrap'

export default function MainCard({item, addGood, handleClose}) {


  return (
    <Container>
      {/* <Card className='card'> */}
      <div className='main-card'>
        <img
          alt="Card image cap"
          src={item.img}
          width="100%"
        />
        
        <CardBody>
          <div className='main-btns'>
            <CardTitle className='btn-grp' tag="h4">
              <span className='main-title'>{item.title}</span>
              <Button color='danger' onClick={handleClose}>Назад</Button>
            </CardTitle>
          </div>
          <CardText className='main-descr'>
            <span>{item.descr}</span>
          </CardText>
          <CardText className='my-card-text'>
            <h5>Цена: {item.price} руб.</h5> 
            <h5>Город: {item.city}</h5>
          </CardText>
          <Button onClick={() => addGood(item)} color='primary'>В избранное</Button>
        </CardBody>
        </div>
    </Container>
  )
}