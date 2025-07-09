import React, { useEffect} from 'react'
import styles from './cards.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { selectCards } from './slice/selector';
import { actions } from './slice/slice';
const Cards = () => {
  const dispatch = useDispatch();
  const cards = useSelector(selectCards);


  useEffect(() => {
    console.log("cards");
    dispatch(actions.getCards());
  }, []);
  //   const [cards, setCards]= useState([])
  //   useEffect(() => {
  //       axios.get("http://localhost:5000/api/cards")
  //           .then(res => {
  //               setCards(res.data[0].products);
  //           }).catch(error => {
  //           console.log(error);
            
  //       });
  //   }, [])
  // console.log(cards);
  
  return (
    <div>
      <h2> Your Cards</h2>
      <div className={styles.card_container}>
        {/* <h1>{cards?.length}</h1> */}
        {cards?.map((card) => {
          return (
          <div className={styles.card}>
            <p>Name: {card.product.name}</p>
            <p>Price: {card.product.price}</p>
            <p>Description: {card.product.description}</p>
            <hr></hr>
          </div>)
        })}
      </div>
    </div>
  );
}

export default Cards