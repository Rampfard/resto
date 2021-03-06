import classNames from 'classnames';
import getCurrentDate from '@utils/getCurrentDate';

import { Button } from '@components/UI';
import { TotalCard, Table, StatisticCard, Graph } from '@components/index';

import { ReactComponent as DollarIcon } from '@assets/dollar.svg';
import { ReactComponent as BookmarkIcon } from '@assets/bookmark.svg';
import { ReactComponent as PeopleIcon } from '@assets/people.svg';

import classes from './Dashboard.module.scss';

const Dashboard = () => {
  const { date, day, month, year } = getCurrentDate();

  const cardDropdownOptions = [
    { name: 'Today' },
    { name: 'Yesterday' },
    { name: 'Week' },
  ];

  const topOrders = [
    {
      imgUrl:
        'https://firebasestorage.googleapis.com/v0/b/resto-5634a.appspot.com/o/Propducts%2Fcard-1.png?alt=media&token=4f9c78d7-7a27-40f6-9867-bcbffa8e418b',
      name: 'Spicy seasoned seafood noodles',
      quantity: 200,
    },
    {
      imgUrl:
        'https://firebasestorage.googleapis.com/v0/b/resto-5634a.appspot.com/o/Propducts%2Fcard-7.png?alt=media&token=d9df8110-e408-4e42-bada-6fcc88435994',
      name: 'Hot spicy fried rice with omelet',
      quantity: 150,
    },
    {
      imgUrl:
        'https://firebasestorage.googleapis.com/v0/b/resto-5634a.appspot.com/o/Propducts%2Fcard-3.png?alt=media&token=cc592a53-08bc-4a08-afb1-aa4be78214d1',
      name: 'Beef dumpling in hot and sour soup',
      quantity: 80,
    },
  ];

  const topOrdersItems = topOrders.map((order, i) => {
    return (
      <li key={i} className={classes['top-item']}>
        <img
          className={classes['top-item__img']}
          src={order.imgUrl}
          alt="Dish"
        />
        <div className={classes['top-item__info']}>
          <div className={classes['top-item__name']}>{order.name}</div>
          <div className={classes['top-item__quantity']}>
            {order.quantity} dishes ordered
          </div>
        </div>
      </li>
    );
  });

  return (
    <section className={classes.dashboard}>
      <div className={classes.header}>
        <h2 className={classNames('title', classes.title)}>Dashboard</h2>
        <p className={classes.date}>
          {day}, {date} {month} {year}
        </p>
      </div>
      <div className={classes.container}>
        <div className={classes['total-cards']}>
          <TotalCard
            className={classNames(classes['money-card'], classes['total-card'])}
            percent={32.4}
            descr={'Total Revenue'}
            value={'$10,243.00'}
            icon={<DollarIcon />}
          />
          <TotalCard
            className={classNames(classes['order-card'], classes['total-card'])}
            percent={-12.4}
            descr={'Total Dish Ordered'}
            value={'23,456'}
            icon={<BookmarkIcon />}
          />
          <TotalCard
            className={classNames(
              classes['customer-card'],
              classes['total-card']
            )}
            percent={2.4}
            descr={'Total Customer'}
            value={'1, 234'}
            icon={<PeopleIcon />}
          />
        </div>
        <Table className={classes.table} />
      </div>
      <div className={classes.aside}>
        <StatisticCard
          className={classes['most-ordered']}
          title={'Most Ordered'}
          dropdownOptions={cardDropdownOptions}
        >
          <ul className={classes['top-list']}>{topOrdersItems}</ul>
          <Button wide outline hover>
            View All
          </Button>
        </StatisticCard>
        <StatisticCard
          className={classNames(
            classes['most-ordered'],
            classes['most-ordered-type']
          )}
          title={'Most Ordered of Type'}
          dropdownOptions={cardDropdownOptions}
        >
          <Graph />
        </StatisticCard>
      </div>
    </section>
  );
};

export default Dashboard;
