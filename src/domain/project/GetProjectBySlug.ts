import {GetProjects} from "./GetProjects.ts";
import type {Project} from "./model/Project.ts";

export class GetProjectBySlug {

    private getProjects = new GetProjects()

    public invoke(slug: string): Project | undefined {
        return this.getProjects.invoke()
            .find((project) => { return project.slug == slug })
    }
}
