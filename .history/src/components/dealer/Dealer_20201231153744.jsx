import React, {useState, useEffect} from 'react';
import Card from '../card/Card';
import Participant from '../common/participant/Participant';

const Dealer = (props) => {
  const [card, setCard] = useState(null);

  useEffect(() => {
    setCard(props.card);
  })

  return card !== null ? (
    <div>
      <p>Dealer</p>
      <Card card={card}/>
    </div>
  ) : card  (
    <div>
      <p>Loading Dealer...</p>
    </div>
  )
}

export default Dealer;

