import {ExperienceDataSource} from "../../../../data/about/experience/ExperienceDataSource.ts";
import type {WorkExperience} from "../model/WorkExperience.ts";

export class ExperienceRepository {

    private dataSource = new ExperienceDataSource()

    public getExperience(): WorkExperience[] {
        return this.dataSource.getExperience()
    }
}
