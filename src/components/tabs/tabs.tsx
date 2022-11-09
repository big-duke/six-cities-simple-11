import cn from 'classnames';
import { Link } from 'react-router-dom';

type TabsProps = {
  activeTab: string;
  onTabClick: (value: string) => void;
}
const tabs = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];
export default function Tabs({ activeTab, onTabClick }: TabsProps): JSX.Element {

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {tabs.map((tab) =>
            (
              <li key={tab} className="locations__item">
                <Link onClick={() => onTabClick(tab)}
                  className={cn('locations__item-link tabs__item', { 'tabs__item--active': tab === activeTab })}
                  to="/"
                >
                  <span>{tab}</span>
                </Link>

              </li>
            )
          )}
        </ul>
      </section>
    </div>

  );
}
