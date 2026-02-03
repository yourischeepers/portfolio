import type {Project} from "../../domain/project/model/Project.ts";
import type {Language} from "../../domain/about/languages/model/Language.ts";
import type {WorkExperience} from "../../domain/about/experience/model/WorkExperience.ts";

export class ContentfulData {

    public projects: Project[]
    public languages: Language[]
    public experience: WorkExperience[]

    constructor(
        projects: Project[],
        languages: Language[],
        experience: WorkExperience[],
    ) {
        this.projects = projects
        this.languages = languages
        this.experience = experience
    }
}
