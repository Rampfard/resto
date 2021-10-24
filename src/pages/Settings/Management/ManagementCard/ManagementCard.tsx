import classNames from 'classnames';
import classes from './ManagementCard.module.scss';
import { Button } from '@components/UI';
import { FC } from 'react';
import { IProduct } from '$types/index';

type ChangeFn = (
  item: Omit<IProduct, 'maxQuantity' | 'totalPrice' | 'art'>
) => void;

interface ManagementCardProps {
  type: string;
  id: string;
  img_src: string;
  name: string;
  activeClass?: string | null;
  price: number;
  quantity: number;
  onChange: ChangeFn;
}

const ManagementCard: FC<ManagementCardProps> = (props) => {
  const { type, id, img_src, name, price, quantity, activeClass } = props;

  const active = activeClass && classes.active;

  return (
    <li id={id} className={classNames(classes.card, active)} data-type={type}>
      <img src={img_src} alt={name} />
      <h3 className={classNames(classes.title)}>{name}</h3>
      <div className={classes.info}>
        <p className={classNames(classes.price)}>$ {price.toFixed(2)}</p>
        <div className={classNames(classes.quantity)}>{quantity} Bowls</div>
      </div>
      <Button
        onClick={(e) => {
          console.log('work');
        }}
        className={classNames(classes['card-btn'])}
        disabled={quantity === 0}
      >
        Edit Dish
      </Button>
    </li>
  );
};

export default ManagementCard;
