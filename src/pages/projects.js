import React from 'react';
import Icon from 'react-eva-icons';
import '../styles/projects.css';

export class Projects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }
  tech = {
    react: { label: 'ReactJS', site: 'reactjs.org' },
    golang: { label: 'Golang', site: 'golang.org' },
    cSharp: { label: 'C#', site: 'microsoft.com/dotnet' },
    angular: { label: 'Angular', site: 'angularjs.org'}
  };

  render() {

    return (
      <div className="projects">
        <div className="title">Projects</div>
        <div className="card">
          <Project
            cardNumber="1"
            name="Pupper-ML"
            appUrl="https://pupper.kvmac.com"
            githubName="pupper-ml-web"
            tech={[this.tech['react'], this.tech['golang']]}
            description="An app that identifies whether you uploaded a picture of a dog or not"
          />
          <Project
            cardNumber="2"
            name="Twitter Search"
            appUrl="https://ts-app.kvmac.com"
            githubName="TwitterSearchApp"
            tech={[this.tech['react']]}
            description="An app that lets you search tweets by hashtag"
          />
          <Project
            cardNumber="3"
            name="Grocery List"
            appUrl="https://gl-app.kvmac.com"
            githubName="gl-web-app"
            tech={[this.tech['angular']]}
            description="A crud app to keep track of your groceries"
          />
        </div>
      </div>
    );
  }
}

const Project = ({ name, githubName, appUrl, tech, description, cardNumber }) => {
  return (
    <div className={`project card ${cardNumber}`}>
      <div className="project-title">
        <a href={appUrl} target="_blank" rel="noopener noreferrer">{name}</a>
      </div>
      <div className="project-tech">
        {tech.forEach(el => <a href={el.site} target="_blank" rel="noopener noreferrer"><label>{el.label}</label></a>)}
      </div>
      <div className="project-description">
        <label>{description}</label>
      </div>
      <div className="links">
        {/* <a href={appUrl} target="_blank" rel="noopener noreferrer"> */}
          <Icon
            name="browser-outline"
            size="large"
            fill="white"
          />
        {/* </a> */}
        <a href={"https://www.github.com/kvmac/" + githubName} target="_blank" rel="noopener noreferrer">
          <Icon
            name="archive-outline"
            size="large"
            fill="white"
          />
        </a>
      </div>
    </div>
  );
}