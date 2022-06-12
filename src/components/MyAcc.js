import CardItem from './CardItem'
import {Container, Button, Card, CardBody, CardTitle, CardText} from 'reactstrap'

export default function MyAcc({list, delGood}) {


  console.log(list)
  return(
    <div>
    <Container className='my-div'>
      <br />
      <h4>Мои товары</h4>
      <br />
      <ul>
        {list.lenght !== 0 ? list.map((item, i) => {
          return <li  key={i}>
            <Card className='card'>
            <div>
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
              <CardText className='card-text'>
                {item.descr}
              </CardText>
            <div className='btn-grp'>
              <Button color='primary'>Подробнее</Button>
              <Button onClick={() => delGood(item)} color='danger'>Удалить</Button>
            </div>
            </CardBody>
          </Card>
          </li>
        }) : <h2>Вы ничего не отложили</h2>}
      </ul>
    </Container>
  </div>
  )
}