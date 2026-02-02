import {Contentful} from "../../../contentful/Contentful.ts";
import type {Language} from "../../../domain/about/languages/model/Language.ts";

export class LanguageDataSource {

    private contentful = new Contentful()

    public getLanguages(): Language[] {
        return this.contentful.getLanguages()
    }
}
