import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLButtonElement> {
    imageMusic: any
    textMusic: any
    titleMusic: any
}

export const MusicElem = ({ imageMusic, textMusic, titleMusic }: CardProps) => {
  return (
    <div>
      <div className="MusicElem">
        <img src={imageMusic} alt="Album" />
        <div className="music__description">
          <p className="main__text">{titleMusic}</p>
          <p className="secondary__text">{textMusic}</p>
        </div>
        <div className="plus-button _active"></div>
      </div>
    </div>
  );
}
