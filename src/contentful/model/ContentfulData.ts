import type {Project} from "../../domain/project/model/Project.ts";
import type {Language} from "../../domain/about/languages/model/Language.ts";

export class ContentfulData {

    public projects: Project[]
    public languages: Language[]

    constructor(
        projects: Project[],
        languages: Language[],
    ) {
        this.projects = projects
        this.languages = languages
    }
}
