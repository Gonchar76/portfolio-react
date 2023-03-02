import Project from './../components/project/Project';
import { projects } from '../helpers/projectsList';

const Projects = () => {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Проекты</h2>
        <ul className="projects">
          {projects.map(() => {
            return <Project />;
          })}

          {/* <Project />
          <Project />
          <Project /> */}
        </ul>
      </div>
    </main>
  );
};

export default Projects;
