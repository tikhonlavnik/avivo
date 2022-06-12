import {useState} from 'react'
import Header from './components/Header';
import StartPage from './components/StartPage';
import Footer from './components/Footer';
import LogInPage from './components/LogInPage';
import RegPage from './components/RegPage';
import FastCard from './components/FastCard';
import './App.css';
import { Button, Container } from 'reactstrap';
import MainPage from './components/MainPage';
import MyAcc from './components/MyAcc';
import MainCard from './components/MainCard';

function App() {
  let [list, setList] = useState([
    {title:"Сумка", img:"https://etiqueta.ru/image/data/products/alexander-ts/alexander-ts-w0023-black/alexander-ts-w0023-black1.jpg", descr:"Кожаная сумка, женская, в отличном состоянии", price:"1500", city:"Москва", cat:"Личные вещи"},
    {title:"Мужские сапоги", img:"https://antarestorg.ru/upload/resize_cache/iblock/459/1200_1200_140cd750bba9870f18aada2478b24840a/4596ec80595cafbfd8f3001a5a5f6fcc.jpg", descr:"Сапоги мужские, 43 размер, кожзам, состояние нормальное, торг уместен", price:"1700", city:"Санкт-Петербург", cat:"Личные вещи"},
    {title:"Футбольный мяч", img:"https://static.beloris.ru/content/catalog_image/144397/src/700-nw.jpg", descr:"Мяч футбольный, не рваный, продаю из-за переезда", price:"800", city:"Москва", cat:"Личные вещи"},
    {title:"Расческа", img:"https://diamondelectric.ru/images/1307/1306732/shetka_salon_professional_1.jpg", descr:"Расческа женская, без торга, в хорошем состоянии", price:"300", city:"Минск", cat:"Личные вещи"},
    {title:"Велосипед forward 1332", img:"https://98.img.avito.st/image/1/1.314MELa6c7c6ubGyPi_2L92zdbO4M3t1vbN3v7i7cQ.g0mi4fTZRPG5VMcDnYa_T6IQ9PkFY48nKXvjvpckvdc", descr:"Добрый день, в продаже отличный велосипед в хорошем техническом состоянии, новая резина, из вложений требуется замена задних тормозных колодок.", price:"16000", city:"Санкт-Петербург", cat:"Личные вещи"},
  ])

  let [users,setUser] = useState([
    {login: 'admin', password: 'admin'},
    {login: 1, password: 1}
  ])

  let [myGoods, setMyGoods] = useState([
    {title:"Велосипед forward 1332", img:"https://98.img.avito.st/image/1/1.314MELa6c7c6ubGyPi_2L92zdbO4M3t1vbN3v7i7cQ.g0mi4fTZRPG5VMcDnYa_T6IQ9PkFY48nKXvjvpckvdc", descr:"Добрый день, в продаже отличный велосипед в хорошем техническом состоянии, новая резина, из вложений требуется замена задних тормозных колодок.", price:"16000", city:"Санкт-Петербург", cat:"Личные вещи"},
  ])

  let [state, setState] = useState('start') // main state of app

  let [log, setLog] = useState()
  let [pass, setPass] = useState()

  
  let [rlog, regLog] = useState()
  let [rpass, regPass] = useState()

  let setLg = event => {
    console.log(event.target.value)
    setLog(event.target.value)
  }

  let setPs = event => {
    setPass(event.target.value)
  }

  //FOR REGISTRATION

  let setLg2 = event => {
    console.log(event.target.value)
    regLog(event.target.value)
  }

  let setPs2 = event => {
    regPass(event.target.value)
  }

  let logUser = () => {
    setLog(log)
    setPass(pass)
    console.log(users)
    users.forEach(item => {
      // console.log(typeof(item.password), typeof(pass))
      console.log(String(log), String(item.login), String(pass), String(item.password))
      if (String(log) == String(item.login) && String(pass) == String(item.password)) {
        console.log(true)
        setState('logged')
      } else {
        console.log(false)
        setState('erLg')
      }
    })
    setLog(null)
    setPass(null)
    setLogged(true)
  }

  let regUser = () => {
    regLog(rlog)
    regPass(rpass)
    // console.log(users)
    users.forEach(item => {
      if(item.password == rpass && item.login == rlog) {
        setState('erRg')
      } else {
        console.log("Вы успешно зарегистрировались!")
        // users.push({login: rlog, password: rpass})
        setUser([...users, {login: rlog, password: rpass}])
        setState('logged')
      }
    })
    regLog(null)
    regPass(null)
    setLogged(true)
    // users = users.filter(function(item, pos) {
    //   return users.indexOf(item) == pos;
    // })
    console.log(users)
  }

  let changeThisState = (state) => {
    setState(state)
  }

  // WORK WITH CARDS

  let [ITEM, setITEM] = useState()

  let [bodyState, setBodyState] = useState('normal')

  let [logged, setLogged] = useState(false)

  let handleCheck = (id) => {
    let item =  list.filter(item => item == id)
    // console.log(hotel[0].title)
    // setState('onHotel')
    setState('fast-c')
    setITEM(item[0])
    setBodyState('fast-c')
    console.log(item[0])
  }

  let handleClose = () => {
    setBodyState('normal')
    setITEM(null)
    setState('start')
  }

  let logOut = () => {
    // setState('start')
    setLogged(false)
  }

  let handleMyAcc = () => {
    setState('myAcc')
  }

  let delGood = (id) => {
    console.log(id)
    let items =  myGoods.filter(item => item !== id)
    setMyGoods(items)
  }

  let addGood = (item) => {
    // console.log(id)
    // let item =  myGoods.filter(item => item === id)
    // console.log(item)
    if (logged === true) {
    setMyGoods([...myGoods, item]);
    handleClose()} else {
      // alert('Войдите или заре')
      setBodyState('normal')
      setITEM(null)
      setState('login')
    }
  }

  let showCard = (id) => {
    console.log(id)
    let item =  list.filter(item => item == id)
    // console.log(hotel[0].title)
    // setState('onHotel')
    setState('fast-c')
    setITEM(item[0])
    setState('onCard')
  }


  let bd = <><StartPage handleCheck={handleCheck} list={list}/></>
  let fc
  if (state == 'login') {
    bd = <LogInPage setPs={setPs} setLg={setLg} logUser={logUser} log={log} pass={pass} setReg={() => changeThisState('registration')}/>
  } else if (state == 'start') {
    bd = <StartPage setLogIn={logUser} logged={logged} showCard={showCard} handleCheck={handleCheck} list={list}/>
  } else if (state == 'registration') {
    bd = <RegPage setPs={setPs2} setLg={setLg2} regUser={regUser} log={rlog} pass={rpass} />
  } else if (state == 'erLg') {
    bd = <LogInPage er={<h2>Неправильный логин или пароль</h2>} setPs={setPs} setLg={setLg} logUser={logUser} log={log} pass={pass} setReg={() => changeThisState('registration')}/>
  } else if (state == 'logged') {
    bd = <StartPage setLogIn={logUser} showCard={showCard} handleCheck={handleCheck} list={list}/>
  } else if (state == 'erRg') {
    bd = <RegPage er={<h2>Такой пользователь уже существует</h2>} setPs={setPs} setLg={setLg} regUser={regUser} log={log} pass={pass} />
  } else if (state == 'fast-c') {
    fc = <FastCard logged={logged} addGood={() => addGood(ITEM)} handleClose={handleClose} item={ITEM} />
  } else if (state == 'myAcc') {
    bd = <MyAcc delGood={delGood} handleCheck={handleCheck} list={myGoods}/>
  } else if (state === 'onCard') {
    bd = <MainCard logged={logged} handleClose={handleClose} item={ITEM} addGood={addGood}/>
  }

  return (
    <div className='main-div'>
      {ITEM ? fc : null}
      <div className={bodyState}>
        <Header handleMyAcc={handleMyAcc} logOut={logOut} logged={logged} setStart={() => changeThisState('start')} setLogIn={() => changeThisState('login')}/>
        {/* body wich will be chnaged */}
        <div className='app'>{bd}</div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
