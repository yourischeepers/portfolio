import {LanguageDataSource} from "../../../../data/about/languages/LanguageDataSource.ts";
import type {Language} from "../model/Language.ts";

export class LanguageRepository {

    private dataSource = new LanguageDataSource()

    public getLanguages(): Language[] {
        return this.dataSource.getLanguages()
    }
}
