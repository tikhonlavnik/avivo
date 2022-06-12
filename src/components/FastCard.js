import {Card, CardBody, CardTitle, CardText, Button} from 'reactstrap'

export default function FastCard({item, handleClose, addGood}) {


  return (
    <Card className='fast-card'>
      <CardBody>
        <CardTitle className='fast-title' tag="h5">
          <span>{item.title}</span>
          <span className='x' onClick={handleClose}>&#10006;</span>
        </CardTitle>
      </CardBody>
      <img className='fast-card-img'
        alt="Card image cap"
        src={item.img}
        width="100%"
      />
      <CardBody>
        <CardText className='fast-card-text'>
          {item.descr}
        </CardText>
        <Button onClick={addGood} color='primary'>Отложить</Button>
      </CardBody>
    </Card>
  )
}