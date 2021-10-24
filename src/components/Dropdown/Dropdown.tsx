import { useState, useEffect, useRef, FC } from 'react';
import classNames from 'classnames';

import { ReactComponent as ArrowIcon } from '../../assets/arrow.svg';

import classes from './Dropdown.module.scss';
import useOutsideClick from '../../hooks/use-outside-click';

interface DropdownProps {
  options: { name: string }[];
  className?: string;
  value?: string;
  icon?: JSX.Element;
  highlighted?: boolean;
  invert?: boolean;
  onChange: (tabName: string) => void;
}

const Dropdown: FC<DropdownProps> = ({
  options,
  className,
  value,
  icon,
  invert,
  highlighted,
  onChange,
}) => {
  const initialOptions = options ? options : [{ name: 'Empty' }];

  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState<boolean>();
  const [selected, setSelected] = useState(initialOptions[0].name);

  const onToggleHandler = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    if (value) {
      setSelected(value);
    }
  }, [value]);

  const selectorChangeHandler = (tabName: string) => {
    setSelected(tabName);
    if (onChange) {
      onChange(tabName);
    }
  };

  useOutsideClick(dropdownRef, () => {
    setIsActive(false);
  });

  const dropdownOptions = initialOptions.map((option) => {
    return (
      <button
        key={option.name}
        className={classNames(classes.item)}
        type="button"
        onClick={() => selectorChangeHandler(option.name)}
      >
        {option.name}
      </button>
    );
  });

  return (
    <div
      ref={dropdownRef}
      className={classNames(classes.dropdown, className, {
        [classes.active]: isActive,
        [classes.highlight]: highlighted,
        [classes.invert]: invert,
      })}
    >
      <button
        onClick={onToggleHandler}
        className={classNames('form-element', classes['dropdown-btn'], {
          [classes.active]: isActive,
        })}
        type="button"
      >
        {icon ? icon : <ArrowIcon />}
        <span>{selected}</span>
      </button>
      <div className={classNames(classes.items)}>{dropdownOptions}</div>
    </div>
  );
};

export default Dropdown;
