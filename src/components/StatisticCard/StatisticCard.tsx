import classNames from 'classnames';
import { Children, cloneElement, FC, isValidElement, useState } from 'react';
import { Dropdown } from '@components/index';
import { Card } from '@components/UI';
import classes from './StatisticCard.module.scss';

interface StatisticCardProps {
  title: string;
  className?: string;
  dropdownOptions: { name: string }[];
}

const StatisticCard: FC<StatisticCardProps> = ({
  title,
  children,
  dropdownOptions,
  className,
}) => {
  const [activeTab, setActiveTab] = useState(dropdownOptions[0]?.name);

  const dropdownChangeHandler = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <Card className={classNames(classes.card, className)}>
      <div className={classes.header}>
        <h3 className={classNames('title', classes.title)}>{title}</h3>
        <Dropdown
          highlighted
          options={dropdownOptions}
          onChange={dropdownChangeHandler}
        />
      </div>
      <div className={classes.content}>
        {Children.map(children, (child) => {
          if (!isValidElement(child)) return child;

          return cloneElement(child, { tab: activeTab });
        })}
      </div>
    </Card>
  );
};

export default StatisticCard;
