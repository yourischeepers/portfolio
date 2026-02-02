export class Language {

    public name: string
    public fluency: string
    public fluencyPercentage: number

    constructor(
        name: string,
        fluency: string,
        fluencyPercentage: number,
    ) {
        this.name = name
        this.fluency = fluency
        this.fluencyPercentage = fluencyPercentage
    }
}
