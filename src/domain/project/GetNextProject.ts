import {GetProjects} from "./GetProjects.ts";
import type {Project} from "./model/Project.ts";

export class GetNextProject {

    private getProjects = new GetProjects()

    public invoke(project: Project): Project {
        const projects = this.getProjects.invoke()
        const currentProjectIndex = projects.indexOf(project)
        return projects[(currentProjectIndex + 1) % projects.length]
    }
}
