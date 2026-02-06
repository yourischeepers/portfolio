import {ExperienceRepository} from "./data/ExperienceRepository.ts";
import type {WorkExperience} from "./model/WorkExperience.ts";

export class GetWorkExperience {

    private repository = new ExperienceRepository()

    public invoke(): WorkExperience[] {
        return this.repository.getExperience()
            .sort((a, b) => b.startDate.getTime() - a.startDate.getTime())
    }
}
