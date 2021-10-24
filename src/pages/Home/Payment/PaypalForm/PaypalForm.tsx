import classNames from 'classnames';
import { FC } from 'react';
import { Input } from '@components/UI';
import classes from './PaypalForm.module.scss';

const PaypalForm: FC = () => {
  return (
    <div className={classes['card-form']}>
      <Input
        className={classNames(classes.input)}
        id="cardNumber"
        type="number"
        placeholder="Enter card number"
        title={'Card Number'}
      />
      <Input
        className={classNames(classes.input, classes.short)}
        id="expirationDate"
        type="number"
        placeholder="Enter Expiration date"
        title="Expiration Date"
        short
      />
      <Input
        className={classNames(classes.input, classes.short)}
        id="cvv"
        placeholder="Enter CVV number"
        type="password"
        title="CVV"
        short
      />
    </div>
  );
};

export default PaypalForm;
