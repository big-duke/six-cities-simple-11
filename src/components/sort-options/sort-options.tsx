import cn from 'classnames';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { useState, MouseEvent } from 'react';
import { sortOffers } from 'store/actions';
import { SortOrder, sortOrder } from 'types';


export default function SortOptions(): JSX.Element {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  const activeSortOrder = useAppSelector((state) => state.sortOrder);
  const dispatch = useAppDispatch();
  const handleOptionClick = (event: MouseEvent<HTMLLIElement>) => {
    const { target } = event;
    const newSortOrder = (target as HTMLLIElement).textContent as SortOrder;
    dispatch(sortOffers(newSortOrder));
    toggle();
  };

  return (
    <div className="places__sorting">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={toggle}>
        {activeSortOrder}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={cn('places__options', 'places__options--custom', { 'places__options--opened': open })}>
        {
          sortOrder.map((option) =>
            (
              <li
                key={option}
                onClick={handleOptionClick}
                className={cn('places__option', { 'places__option--active': option === activeSortOrder })}
                tabIndex={0}
                value={option}
              >
                {option}
              </li>
            ))
        }
      </ul>
    </div>);
}
