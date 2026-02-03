import {ExperienceRepository} from "./data/ExperienceRepository.ts";
import type {WorkExperience} from "./model/WorkExperience.ts";

export class GetWorkExperience {

    private repository = new ExperienceRepository()

    public invoke(): WorkExperience[] {
        // TODO Fix this sorting not working
        return this.repository.getExperience()
            .sort((a, b) => a.startDate.getUTCMilliseconds() - b.startDate.getUTCMilliseconds())
    }
}
