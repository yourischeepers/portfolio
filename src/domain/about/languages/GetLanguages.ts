import {LanguageRepository} from "./data/LanguageRepository.ts";
import type {Language} from "./model/Language.ts";

export class GetLanguages {

    private repository = new LanguageRepository()

    public invoke(): Language[] {
        return this.repository.getLanguages()
            .sort((a, b) => b.fluencyPercentage - a.fluencyPercentage)
    }
}
