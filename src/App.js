import {useState} from 'react'
import Header from './components/Header';
import StartPage from './components/StartPage';
import Footer from './components/Footer';
import LogInPage from './components/LogInPage';
import RegPage from './components/RegPage';
import FastCard from './components/FastCard';
import './App.css';
import { Button, Container } from 'reactstrap';
import MainPage from './components/SearchPage';
import MyAcc from './components/MyAcc';
import MainCard from './components/MainCard';
import SearchPage from './components/SearchPage';
import AddGoods from './components/AddGoods';

function App() {
  let [list, setList] = useState([
    {title:"Сумка", img:"https://etiqueta.ru/image/data/products/alexander-ts/alexander-ts-w0023-black/alexander-ts-w0023-black1.jpg", descr:"Кожаная сумка, женская, в отличном состоянии", price:"1500", city:"Москва", cat:"Личные вещи"},
    {title:"Мужские сапоги", img:"https://71.img.avito.st/image/1/1.ahEQfLaxxvgmy0T1SB1eT8Xfxvys3cz6.tc3eFiFMMu_tLUfSkDRe6bQbs7s9H5U6xEwel5VhKt4", descr:"Сапоги мужские, 43 размер, кожзам, состояние нормальное, торг уместен", price:"1700", city:"Санкт-Петербург", cat:"Личные вещи"},
    {title:"Футбольный мяч", img:"https://i.postimg.cc/66LzGJb7/Screenshot-3.png", descr:"Мяч футбольный, не рваный, продаю из-за переезда", price:"800", city:"Москва", cat:"Личные вещи"},
    {title:"Расческа", img:"https://i.postimg.cc/hj4vymgR/Screenshot-1.png", descr:"Расческа женская, без торга, в хорошем состоянии", price:"300", city:"Минск", cat:"Личные вещи"},
    {title:"Велосипед forward 1332", img:"https://98.img.avito.st/image/1/1.314MELa6c7c6ubGyPi_2L92zdbO4M3t1vbN3v7i7cQ.g0mi4fTZRPG5VMcDnYa_T6IQ9PkFY48nKXvjvpckvdc", descr:"Добрый день, в продаже отличный велосипед в хорошем техническом состоянии, новая резина, из вложений требуется замена задних тормозных колодок.", price:"16000", city:"Санкт-Петербург", cat:"Личные вещи"},
    {title:"Диван", img:"https://sun9-66.userapi.com/s/v1/ig2/7JYE13l8xJlo3tM2OfabaTB0FagI8XBajYUoC3-x89gmMqSc4vK8DOeDwi-S0i69exC9m9-FJCaj3FEsARSmi7qA.jpg?size=829x748&quality=96&type=album", descr:"Диван новый, раскладной, 2м на 1.5м, состояние отличное, торг уместен", price:"22000", city:"Минск", cat:"Личные вещи"},
    {title:"Opel Antara", img:"https://i.postimg.cc/JzGbKGmF/Screenshot-6.png", descr:"По факту я втрой владелец данного автомобиля, до меня в одной семье ( дочь - отец) фамилия одна, ПТС оригинальный, записи 3. ", price:"570000", city:"Санкт-Петербург", cat:"Автомобили"},
    {title:"Kia Rio 2016", img:"https://i.postimg.cc/ZnSSst6B/Screenshot-2.png", descr:"Двигать , коробка , сцепление , работают идеально . Заводится с пол тычка .Расход минимальный . Масло поменяно .Музыка играет , песка дует , дно идеальное . ", price:"55000", city:"Москва", cat:"Автомобили"},
    {title:"Hyundai Accent", img:"https://i.postimg.cc/nVSbgPBP/Screenshot-5.png", descr:"На ходу. Торг. Пишите только сообщение. Я не в городе тел недоступен.", price:"42000", city:"Минск", cat:"Автомобили"},
    {title:"Hyundai Solaris", img:"https://sun9-61.userapi.com/s/v1/ig2/QHSLKRws_ElNhoTMCp8Beki17QPnMpHcyWVgvixxZuVMv3A5BYBwgkBFdfsuyRixvzr4xLMTi9jsHl6hIhx7jnNY.jpg?size=938x791&quality=96&type=album", descr:"Есть предложение от другого дилера – улучшим! Звоните прямо сейчас и получите специальное предложение на покупку авто лично от руководителя отдела продаж", price:"890000", city:"Минск", cat:"Автомобили"},
    {title:"Kia Rio", img:"https://i.postimg.cc/zfg6s2zn/Screenshot-4.png", descr:"В стоимость автомобиля включено дополнительное оборудование дилера на сумму 255425 р., подробную информацию уточняйте в отделе продаж", price:"1852500", city:"Москва", cat:"Автомобили"},
    {title:"Chevrolet Captiva", img:"https://sun9-67.userapi.com/s/v1/ig2/8pcCmd2nWxRSnSJb8xMS-zwJ9aUo4brNBwOTS8X3EhKk_0pM1pNBnfPrGJibuKMYYTnfc6ql5fTgokwsNolm-_c6.jpg?size=837x786&quality=96&type=album", descr:"Авто в достоинном состоянии ,долгое время в одних руках,родная краска,техническая часть без проблем,подвеска вся обслужена,мотор (обслужен) тянет как надо при этом расход вас приятно удивит", price:"1200000", city:"Санкт-Петербург", cat:"Автомобили"},
    {title:"Кнопочный телефон nokia", img:"https://sun9-5.userapi.com/s/v1/ig2/2XMVTHy5ZdnRFBYpVihV0wVn86lLypUzupJsDpi43VSwovShEDL0vCDiibDuypv-DID76eRtued1rh0j3Qfqzc1G.jpg?size=616x698&quality=96&type=album", descr:"Рабоичй, обычная звонилка, все в рабочем состоянии", price:"1000", city:"Минск", cat:"Электроника"},
    {title:"iPhone 8", img:"https://45.img.avito.st/image/1/1.DOTzoba6oA3FCGII5_lv1CMCpglHgqjPQgKkBUcKog.ZzkU1kp4FV7eDZJ53b2eNN92gDrQ1P2ZXvfO_f4KjbY", descr:"Iphone 8, 32Гб, состояние хорошее, есть пару царапин, touch id рабочий", price:"8000", city:"Минск", cat:"Электроника"},
    {title:"наушники проводные iphone", img:"https://i.postimg.cc/jjRRtJ5g/Screenshot-7.png", descr:"Наушники обычные, одно ухо тише другого", price:"500", city:"Москва", cat:"Электроника"},
    {title:"PS4 1TB", img:"https://tex-soyuz.ru/image/cache/catalog/easyphoto/258/sony-playstation-4-slim-500-gb-vremya-igrat-ogranichennaya-seriya-1-650x650.jpg", descr:"без дисков, могу за доп плату отдать аккаунт с играми, приставку не разбирал, можно проверить", price:"20000", city:"Москва", cat:"Электроника"},
    {title:"Игровой ПК", img:"https://avatars.mds.yandex.net/get-zen_doc/127081/pub_5b9084fabd739500aacfafa2_5b914b1847a3c100aa990bb7/scale_1200", descr:"i7 6700k gtx1060 6gb 16 ram 1tb hdd без торга", price:"45258", city:"Санкт-Петербург", cat:"Электроника"},
    {title:"Мышь", img:"https://static.onlinetrade.ru/img/items/b/mysh_sharkoon_skiller_sgm1_chernyy_1294898_3.jpg", descr:"Торг уместен", price:"5000", city:"Санкт-Петербург", cat:"Электроника"},
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
    if(state === 'start') {
      setUpdatedList([])
      setNewList([])
      setCity('Все города')
      setCat('Все категории')
      setPrice('Любая цена')
    }
    setState(state)

  }

  // WORK WITH CARDS

  let [ITEM, setITEM] = useState()

  let [bodyState, setBodyState] = useState('normal')

  let [logged, setLogged] = useState(false)

  let handleCheck = (id) => {
    let item =  list.filter(item => item == id)
    console.log(state)
    // setState('onHotel')
    setState('fast-c')
    setITEM(item[0])
    setBodyState('fast-c')
    console.log(item[0])
  }

  let handleClose = () => {

      setState('start') // TYT PRIKOL
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
      alert('Товар добавлен в избранное')
      handleClose()
    } else {
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

// SEARCHHHHHHHHHHH

let [isOpenCat, setIsOpenCat] = useState(false)
let [isOpenCity, setIsOpenCity] = useState(false)
let [isOpenPrice, setIsOpenPrice] = useState(false)
let [openCat, setOpenCat] = useState(false)
let [openCt, setOpenCt] = useState(false)

let [city, setCity] = useState('Все города')
let [cat, setCat] = useState('Все категории')
let [price, setPrice] = useState('Любая цена')

let [newList, setNewList] = useState([])
let [srch, setSrch] = useState()
let [updatedList, setUpdatedList] = useState([])

let setSr = (e) => {
  console.log(e.target.value)
  setSrch(e.target.value)
}

let changeCity = (e) => {
  setCity(e.target.innerText)
}

let changeCat = (e) => {
  setCat(e.target.innerText)
}

let changePrice = (e) => {
  setPrice(e.target.innerText)
}

let toggleOpen = (state, changeState) => {
  changeState(!state)
}

let SEARCH = () => {
  // console.log(newList)
  setUpdatedList([])
  // setNewList([])
  setState('search')
  setSrch(srch)
  setNewList([])
  console.log(cat)
  // set
  list.forEach((item) => {
    if (cat === item.cat && item.title.includes(srch)) {
      console.log(item)
      setNewList((st) => [...st, item])
    } else if (cat === item.cat) {
      // console.log(item)
      console.log(!updatedList)
      setNewList((st) => [...st, item])
    } else if (item.title.includes(srch)) {
      // console.log(item)
      setNewList((st) => [...st, item])
    } else if (srch === undefined && cat === 'Все категории') {
      // console.log(item)
      setNewList((st) => [...st, item])
    }
  })
  // setUpdatedList([])
  console.log(updatedList.length)
}

let updateChoose = () => {
  // newList.forEach(item => {
  //   let items =  list.filter(item => item == id)
  // })
  setUpdatedList([])
  let items
  if (cat === 'Личные вещи') {
    if (price === 'до 1000') {
      items =  newList.filter(item => {
        if (city === 'Все города') {
          return Number(item.price) < 1000
        } else {
          return item.city === city && Number(item.price) < 1000
        }
      })
      setUpdatedList(items)
    } else if (price === 'от 1000 до 5000') {
      items =  newList.filter(item => {
        if (city === 'Все города') {
          return Number(item.price) >= 1000 && Number(item.price) < 5000
        } else {
          return item.city === city && Number(item.price) >= 1000 && Number(item.price) < 5000
        }
      })
      setUpdatedList(items)
    } else if (price === 'больше 5000') {
      items =  newList.filter(item => {
        if (city === 'Все города') {
          return Number(item.price) > 5000
        } else {
          return item.city === city && Number(item.price) > 5000
        }
        
      })
      setUpdatedList(items)
    } else if (price === 'Любая цена') {
      items =  newList.filter(item => {
        if (city === 'Все города') {
          return item
        } else {
          return item.city === city 
        }
      }) 
      setUpdatedList(items)
  } 

  } else if (cat === 'Электроника'){
    //////////////////////////////////////////////////////////////////////////////// CARS
    if (price === 'до 2000') {
      items =  newList.filter(item => {
        if (city === 'Все города') {
          return Number(item.price) < 2000
        } else {
          return item.city === city && Number(item.price) < 2000
        }
      })
      setUpdatedList(items)
    } else if (price === 'от 2000 до 10000') {
      items =  newList.filter(item => {
        if (city === 'Все города') {
          return Number(item.price) >= 2000 && Number(item.price) < 10000
        } else {
          return item.city === city && Number(item.price) >= 2000 && Number(item.price) < 10000
        }
      })
      setUpdatedList(items)
    } else if (price === 'больше 10000') {
      items =  newList.filter(item => {
        if (city === 'Все города') {
          return Number(item.price) > 10000
        } else {
          return item.city === city && Number(item.price) > 1000
        }
        
      })
      setUpdatedList(items)
    } else if (price === 'Любая цена') {
      items =  newList.filter(item => {
        if (city === 'Все города') {
          return item
        } else {
          return item.city === city 
        }
      }) 
      setUpdatedList(items)
  }} else if (cat === 'Автомобили'){
    //////////////////////////////////////////////////////////////////////////////// CARS
    if (price === 'до 100 тыс') {
      items =  newList.filter(item => {
        if (city === 'Все города') {
          return Number(item.price) < 100000
        } else {
          return item.city === city && Number(item.price) < 100000
        }
      })
      setUpdatedList(items)
    } else if (price === 'от 100 тыс. до 1 млн.') {
      items =  newList.filter(item => {
        if (city === 'Все города') {
          return Number(item.price) >= 100000 && Number(item.price) < 1000000
        } else {
          return item.city === city && Number(item.price) >= 100000 && Number(item.price) < 1000000
        }
      })
      setUpdatedList(items)
    } else if (price === 'больше 1 млн.') {
      items =  newList.filter(item => {
        if (city === 'Все города') {
          return Number(item.price) > 1000000
        } else {
          return item.city === city && Number(item.price) > 100000
        }
        
      })
      setUpdatedList(items)
    } else if (price === 'Любая цена') {
      items =  newList.filter(item => {
        if (city === 'Все города') {
          return item
        } else {
          return item.city === city 
        }
      }) 
      setUpdatedList(items)
  }}  else if (cat === 'Все категории') {
    items =  newList.filter(item => {
      if (city === 'Все города') {
        return item
      } else {
        return item.city === city 
      }
    }) 
    setUpdatedList(items)
}
  // } else if (city === 'Все города') {
  //   items =  newList.filter(item => {
  //     // console.log(Number(item.price) > 5000, item.price)
  //     return item.price === price
  //   }) 
  //   setUpdatedList(items)
  // } 
  console.log(!updatedList, newList)
  console.log(items)
}


////////////////////// ADD GOODS
  let [txt, setTxt] = useState()
  let [des, setDes] = useState()
  let [prc, setPrc] = useState()
  let [pctr, setPctr] = useState()
  let [ct, setCit] = useState('Санкт-Петербург')
  let [cath, setCath] = useState('Личные вещи')

  let setTx = event => {
    setTxt(event.target.value)
  }

  let setDs = event => {
    setDes(event.target.value)
  }

  let setPr = event => {
    setPrc(event.target.value)
  }

  let setPc = event => {
    setPctr(event.target.value)
  }

  let setCt = event => {
    setCit(event.target.innerText)
  }

  let setCaaat = event => {
    console.log()
    setCath(event.target.innerText)
  }

  let handleAddGood = () => {
    setState('addGood')
  }

  let addGd = () => {
    console.log(txt, des, prc, ct, pctr, cat)
    setList([...list, {title:txt, img:pctr, descr:des, price:prc, city:ct, cat:cath}])
  }



  let bd = <><StartPage handleCheck={handleCheck} list={list}/></>
  let fc
  if (state == 'login') {
    bd = <LogInPage setPs={setPs} setLg={setLg} logUser={logUser} log={log} pass={pass} setReg={() => changeThisState('registration')}/>
  } else if (state == 'start') {
    bd = <StartPage logUser={logUser} logged={logged} showCard={showCard} handleCheck={handleCheck} list={list}/>
  } else if (state == 'registration') {
    bd = <RegPage setPs={setPs2} setLg={setLg2} regUser={regUser} log={rlog} pass={rpass} />
  } else if (state == 'erLg') {
    bd = <LogInPage er={<h2>Неправильный логин или пароль</h2>} setPs={setPs} setLg={setLg} logUser={logUser} log={log} pass={pass} setReg={() => changeThisState('registration')}/>
  } else if (state == 'logged') {
    bd = <StartPage logUser={logUser} showCard={showCard} handleCheck={handleCheck} list={list}/>
  } else if (state == 'erRg') {
    bd = <RegPage er={<h2>Такой пользователь уже существует</h2>} setPs={setPs} setLg={setLg} regUser={regUser} log={log} pass={pass} />
  } else if (bodyState === 'fast-c' || state === 'fast-c') {
    fc = <FastCard logged={logged} addGood={() => addGood(ITEM)} handleClose={handleClose} item={ITEM} />
  } else if (state == 'myAcc') {
    bd = <MyAcc delGood={delGood} handleCheck={handleCheck} list={myGoods}/>
  } else if (state === 'onCard') {
    bd = <MainCard logged={logged} handleClose={handleClose} item={ITEM} addGood={addGood}/>
  } else if (state === 'search') {
    bd = <SearchPage cat={cat} updatedList={updatedList} updateChoose={updateChoose} showCard={showCard} handleCheck={handleCheck} newList={newList} isOpenCity={isOpenCity} changePrice={changePrice} price={price}
    changeCity={changeCity} toggleOpen={toggleOpen} city={city} setIsOpenCity={setIsOpenCity} setIsOpenPrice={setIsOpenPrice} isOpenPrice={isOpenPrice} />
  } else if (state === 'addGood') {
    bd = <AddGoods txt={txt} des={des} prc={prc} pctr={pctr} setTx={setTx} setDs={setDs} setPr={setPr} setPc={setPc} addGd={addGd} ct={ct} setCt={setCt}
     cath={cath} setCaaat={setCaaat} setOpenCat={setOpenCat} openCat={openCat} toggleOpen={toggleOpen} setOpenCt={setOpenCt} openCt={openCt} />
  }

  return (
    <div className=' main-div'>
      {ITEM ? fc : null}
      <div className={bodyState}>
        <Header 
          handleAddGood={handleAddGood}
          isOpenCat={isOpenCat} setIsOpenCat={setIsOpenCat} isOpenCity={isOpenCity} setIsOpenCity={setIsOpenCity}
          changeCity={changeCity} changeCat={changeCat} toggleOpen={toggleOpen} city={city} cat={cat} SEARCH={SEARCH}
          handleMyAcc={handleMyAcc} logOut={logOut} logged={logged} setStart={() => changeThisState('start')} setLogIn={() => changeThisState('login')}
          setSr={setSr} srch={srch}/>
        {/* body wich will be chnaged */}
        <div className='app'>{bd}</div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
