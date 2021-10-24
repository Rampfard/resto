import classNames from 'classnames';
import classes from './CashForm.module.scss';
import { Input } from '@components/UI';

const CashForm = () => {
  return (
    <div className={classes['card-form']}>
      <Input
        className={classNames(classes.input)}
        id="name"
        placeholder="Enter your name"
        title="Your name"
      />
      <Input
        className={classNames(classes.input)}
        id="phone"
        type="phone"
        placeholder="Enter phone number"
        title="Phone Number"
      />
    </div>
  );
};

export default CashForm;
