export class Project {

    public name: string
    public slug: string
    public completedYear: number
    public developedFor: string
    public platforms: string[]
    public roles: string[]
    public languages: string[]
    public otherTech: string[]

    public gridImageUrl: string
    public isGridVertical: boolean
    public coverImageUrl: string

    public sourceCodeUrl: string | undefined
    public deploymentUrl: string | undefined

    constructor(
        name: string,
        slug: string,
        completedYear: number,
        developedFor: string,
        platforms: string[],
        roles: string[],
        languages: string[],
        otherTech: string[],
        gridImageUrl: string,
        isGridVertical: boolean,
        coverImageUrl: string,
        sourceCodeUrl: string | undefined,
        deploymentUrl: string | undefined,
    ) {
        this.name = name
        this.slug = slug
        this.completedYear = completedYear
        this.developedFor = developedFor
        this.platforms = platforms
        this.roles = roles
        this.languages = languages
        this.otherTech = otherTech
        this.gridImageUrl = gridImageUrl
        this.isGridVertical = isGridVertical
        this.coverImageUrl = coverImageUrl
        this.sourceCodeUrl = sourceCodeUrl
        this.deploymentUrl = deploymentUrl
    }
}
