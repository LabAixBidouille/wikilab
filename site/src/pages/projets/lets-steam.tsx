import React from 'react';
import ProjectPage from '../../components/ProjectPage';
import {projectsInfo} from '../../data/projects';

export default function Page() {
  return <ProjectPage project={projectsInfo['lets-steam']} />;
}
