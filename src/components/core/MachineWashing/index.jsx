import React from 'react';
import './styles.scss';
const MachineWashing = () => (
  <div>
    <div className="playground">
      <div className="shadow"></div>
      <div className="washing-machine">
        <div className="board">
          <button className="button"></button>
          <button className="button"></button>
          <button className="button circle"></button>
          <button className="button circle"></button>
        </div>
        <div className="window">
          <div className="content">
            <div className="sock orange"></div>
            <div className="sock green"></div>
            <div className="sock red"></div>
            <div className="cat">
              <div className="head">
                <div className="ear"></div>
                <div className="ear right"></div>
                <div className="eye"></div>
                <div className="eye"></div>
              </div>
              <div className="body"></div>
              <div className="feet"></div>
              <div className="tail"></div>
            </div>
          </div>
          <div className="bubbles">
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
          </div>
        </div>
        <div className="badge">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
      <div className="clothes">
        <div className="shirt white"></div>
        <div className="shirt orange"></div>
        <div className="shirt"></div>
      </div>
    </div>
  </div>
);

export default MachineWashing;
