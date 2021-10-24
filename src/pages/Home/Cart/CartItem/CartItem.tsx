import { useDispatch } from 'react-redux';

import { Input, Button } from '@components/UI';
import { ReactComponent as DeleteIcon } from '@assets/delete-icon.svg';

import { removeItem, updateItemQuantity } from '@store/cart-slice';

import classes from './CartItem.module.scss';
import { FC, FormEvent } from 'react';
import { showNotification } from '@utils/showNotification';

interface CartItemProps {
  id: string;
  title: string;
  img_src: string;
  price: number;
  quantity: number;
  totalPrice: number;
  maxQuantity: number;
}

const CartItem: FC<CartItemProps> = (props) => {
  const { id, title, price, quantity, totalPrice, img_src, maxQuantity } =
    props;

  const dispatch = useDispatch();

  const quantityChangeHandler = (e: FormEvent<HTMLInputElement>) => {
    if (+e.currentTarget.value > +e.currentTarget.getAttribute('max')!) {
      return;
    }

    dispatch(
      updateItemQuantity({
        id,
        quantity: +e.currentTarget.value,
      })
    );
  };

  const removeItemHandler = () => {
    dispatch(
      removeItem({
        id,
      })
    );

    showNotification(
      { message: 'item removed form cart', type: 'warn' },
      dispatch
    );
  };

  return (
    <li id={id} className={classes['cart-item']}>
      <div className={classes.left}>
        <div className={classes.inner}>
          <div className={classes.info}>
            <img src={img_src} alt={title} />
            <h3 className={classes.title}>{title}</h3>
            <small className={classes.price}>$ {price}</small>
          </div>
          <Input
            className={classes.quantity}
            value={quantity}
            type="number"
            max={maxQuantity}
            min={1}
            onUserInput={quantityChangeHandler}
          />
        </div>
        <Input className={classes.notice} placeholder="Order Note..." />
      </div>
      <div className={classes['right']}>
        <p className={classes.total}>$ {totalPrice.toFixed(2)}</p>
        <Button className={classes['delete-btn']} onClick={removeItemHandler}>
          <DeleteIcon />
        </Button>
      </div>
    </li>
  );
};

export default CartItem;
