import React, {useState, useEffect} from 'react';
import Card from '../card/Card';
import Participant from '../common/participant/Participant';

const Dealer = (props) => {
  const [card, setCard] = useState(null);
  const [cardNumber, updateCardNumber] = useState(null);

  useEffect(() => {
    setCard(props.card);
    updateCardNumber(props.number);
  })

  console.log(props)

  return card !== null ? (
    <div>
      <p>Hidden</p>
    </div>
  ) : card !== null ? cardNumber === 1 (
    <div>
      <p>Dealer</p>
      <Card card={card}/>
    </div>
  ) : (
    <div>
      <p>Loading Dealer...</p>
    </div>
  )
}

export default Dealer;

