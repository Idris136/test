import React, { useState } from 'react';
import { type UserType } from '../../../types/user';
import './userItem.css'

type Props = {
  user: UserType;
};

export default function UserItem({ user }: Props): JSX.Element {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = (): void => {
    setShowDetails((prev) => !prev);
  };

  return (
    <article className="episode">
      <div className="episode__number">{user.id}</div>
      <div className="episode__content">
        <div className="title">{user.name}</div>
        <div className="story">
          <p>{user.email}</p>
          <p>{user.phone}</p>
          <div className={`details ${showDetails ? 'open' : ''}`}>
            <div className="title">Адрес</div>
            <div className="story">
              <p>{user.address.city}</p>
              <p>{user.address.street}</p>
              <p>{user.address.suite}</p>
              <p>{user.address.zipcode}</p>
            </div>
            <div className="title">Компания</div>
            <div className="story">
              <p>{user.company.name}</p>
              <p>{user.company.catchPhrase}</p>
              <p>{user.company.bs}</p>
            </div>
          </div>
        </div>
        <button type='button' className="toggle-button" onClick={toggleDetails}>
          {showDetails ? 'Скрыть детали' : 'Показать детали'}
        </button>
      </div>
    </article>
  );
}
