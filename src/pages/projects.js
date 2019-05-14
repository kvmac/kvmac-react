import React from 'react';
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
    cSharp: { label: 'C#', site: 'microsoft.com/dotnet' }
  };

  render() {

    return (
      <div className="projects">
        <Project
          name={"Pupper-ML"}
          url={"https://www.pupper.kvmac.com"}
          github={"pupper-ml-web"}
          tech={[this.tech['react'], this.tech['golang']]}
          description={"An app that identifies whether you uploaded a picture of a dog or not"}
        />
        <Project
          name={"Twitter Search"}
          url={"https://www.ts-app.kvmac.com"}
          github={"TwitterSearchApp"}
          tech={[this.tech['react']]}
          description={"An app that lets you search tweets by hashtag"}
        />
      </div>
    );
  }
}

const Project = ({ name, url, github, tech, description }) => {
  return (
    <div className="project">
      <div className="project-header">
        <a href={url} target="_blank" rel="noopener noreferrer"><label>{name}</label></a>
      </div>
      <div className="project-tech">
        {tech.forEach(el => <a href={el.site} target="_blank" rel="noopener noreferrer"><label>{el.label}</label></a>)}
      </div>
      <div className="project-description">
      <label>{description}</label>
      </div>
      <div>
        {/* github icon */}
        <a href={"https://www.github.com/kvmac/" + github} target="_blank" rel="noopener noreferrer"><label>Code</label></a>
      </div>
    </div>
  );
}