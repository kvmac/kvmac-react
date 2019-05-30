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
      <div className="card">
        <div className="title">Projects</div>
        <Project
          cardNumber="1"
          name="Pupper-ML"
          url="https://pupper.kvmac.com"
          github="pupper-ml-web"
          tech={[this.tech['react'], this.tech['golang']]}
          description="An app that identifies whether you uploaded a picture of a dog or not"
        />
        <Project
          cardNumber="2"
          name="Twitter Search"
          url="https://ts-app.kvmac.com"
          github="TwitterSearchApp"
          tech={[this.tech['react']]}
          description="An app that lets you search tweets by hashtag"
        />
        <Project
          cardNumber="3"
          name="Grocery List"
          url="https://gl-app.kvmac.com"
          github="gl-web-app"
          tech={[this.tech['angular']]}
          description="A crud app to keep track of your groceries"
        />
        <Project
          cardNumber="3"
          name="Grocery List"
          url="https://gl-app.kvmac.com"
          github="gl-web-app"
          tech={[this.tech['angular']]}
          description="A crud app to keep track of your groceries"
        />
        <Project
          cardNumber="3"
          name="Grocery List"
          url="https://gl-app.kvmac.com"
          github="gl-web-app"
          tech={[this.tech['angular']]}
          description="A crud app to keep track of your groceries"
        />
        </div>
      </div>
    );
  }
}

const Project = ({ name, url, github, tech, description, cardNumber }) => {
  return (
    <div className={`project card ${cardNumber}`}>
      <div className="project-title">
        <a href={url} target="_blank" rel="noopener noreferrer">{name}</a>
      </div>
      <div className="project-tech">
        {tech.forEach(el => <a href={el.site} target="_blank" rel="noopener noreferrer"><label>{el.label}</label></a>)}
      </div>
      <div className="project-description">
        <label>{description}</label>
      </div>
      <div className="links">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <Icon
            name="browser-outline"
            size="large"
            fill="white"
          />
        </a>
        <a href={"https://www.github.com/kvmac/" + github} target="_blank" rel="noopener noreferrer">
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