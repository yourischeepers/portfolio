import {GetProjects} from "./GetProjects.ts";
import type {Project} from "./model/Project.ts";

export class GetNextProject {

    private getProjects = new GetProjects()

    public invoke(project: Project): Project {
        const projects = this.getProjects.invoke()
        const currentProjectIndex = projects.indexOf(project)
        const nextProject = projects[(currentProjectIndex + 1) % projects.length]

        if (!nextProject) throw Error("No next project found, is projects empty?")
        return nextProject
    }
}
