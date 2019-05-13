import React from 'react';
import { Card, Circle } from '../shared';
import '../styles/tech-skills.css';

export const TechSkills = (Card) => {

  return (
    <div className="tech-skills">
    Tech-skills
      <div className="flex-wrapper">
      <Card>
        <Circle percent={"75"} color={"blue"} />
      </Card>
        <span></span>
        <Circle percent={"50"} color={"purple"} />
        <span></span>
        <Circle percent={"25"} color={"red"} />
        <span></span>
        <Circle percent={"90"} color={"orange"} />
        <span></span>
        <Circle percent={"60"} color={"green"} />
      </div>
    </div>
  );
}