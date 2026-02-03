export class WorkExperience {

    public role: string
    public isViaPlatform: boolean
    public company: string
    public isInSoftware: boolean
    public startDate: Date
    public endDate?: Date

    constructor(
        role: string,
        isViaPlatform: boolean,
        company: string,
        isInSoftware: boolean,
        startDate: Date,
        endDate?: Date,
    ) {
        this.role = role
        this.isViaPlatform = isViaPlatform
        this.company = company
        this.isInSoftware = isInSoftware
        this.startDate = startDate
        this.endDate = endDate
    }
}
