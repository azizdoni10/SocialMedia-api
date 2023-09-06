import React from 'react'

export const UserParameter = () => {
  return (
    <div className="user__description">
    <h1 className="user__name">Sasuke Uchiha</h1>
    <div className="user__info">
      <div className="parameter">
        <span className="key">Друзья</span>
        <span className="value">130</span>
      </div>
      <div className="parameter">
        <span className="key">Подписчики</span>
        <span className="value">923</span>
      </div>
      <div className="parameter">
        <span className="key">Подписки</span>
        <span className="value">246</span>
      </div>
    </div>
  </div>
  )
}
