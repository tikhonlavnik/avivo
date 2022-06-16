import {Card, CardBody, CardTitle, CardText, Button} from 'reactstrap'

export default function CardItem({item, handleCheck, showCard}) {


  return (
    <Card className='card card-item'>
      <div onClick={() => handleCheck()}>
      <CardBody>
        <CardTitle tag="h5">
          {item.title}
        </CardTitle>
      </CardBody>
      <img className='card-img'
        alt="Card image cap"
        src={item.img}
        width="100%"
      />
      </div>
      <CardBody>
        <CardText className='cardText'>
          {item.descr}
        </CardText>
        <Button onClick={showCard} color='primary'>Подробнее</Button>
      </CardBody>
    </Card>
  )
}