import { Helmet } from "react-helmet";
import { ProjectBar } from "../molecules/project-bar";
import { ProjectList } from "../molecules/project-list";
import { ProjectTitle } from "../molecules/project-title";

export const Project = () => {
  return (
    <div className="Project">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Jen Tasks</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <ProjectTitle />
      <ProjectBar />
      <ProjectList />
    </div>
  );
};
