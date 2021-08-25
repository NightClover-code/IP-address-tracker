interface ItemProps {
  headline: string;
  data: string;
}

const Item: React.FC<ItemProps> = ({ data, headline }) => {
  return (
    <div className="address__details__item">
      <h2>{headline}</h2>
      <p>{data}</p>
    </div>
  );
};

export default Item;
