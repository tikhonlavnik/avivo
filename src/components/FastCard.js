import {Card, CardBody, CardTitle, CardText, Button} from 'reactstrap'

export default function FastCard({item, handleClose, addGood}) {


  return (
    <Card className='fast-card'>
      <div className='fast-c-title'>
          <span className='x' onClick={handleClose}>&#10006;</span>
      </div>
      <CardBody className='fcd'>
        <div className='img-div'>
        <img className='fast-card-img'
          alt="Card image cap"
          src={item.img}
          width="100%"
        />
        </div>
        <CardText className='fast-card-text'>
          <span>{item.title}</span>
          <p>{item.descr}</p>
          <Button onClick={addGood} color='primary'>В Избранное</Button>
        </CardText>
      </CardBody>
    </Card>
  )
}