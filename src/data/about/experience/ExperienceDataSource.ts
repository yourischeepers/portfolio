import {Contentful} from "../../../contentful/Contentful.ts";
import type {WorkExperience} from "../../../domain/about/experience/model/WorkExperience.ts";

export class ExperienceDataSource {

    private contentful = new Contentful()

    public getExperience(): WorkExperience[] {
        return this.contentful.getExperience()
    }
}
