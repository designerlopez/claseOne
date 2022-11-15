const Card = ({title, item1, item2, item3, item4, colorCard}) => {


  return (
    <div className="card" style={{background:colorCard}}>
      <h3>{title}</h3>
      <ul>
        <li>{item1}</li>
        <li>{item2} </li>
        <li>{item3} </li>
        <li>{item4} </li>
      </ul>
    </div>
  );
};

export default Card;   
