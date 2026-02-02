import {ContentfulData} from "../model/ContentfulData.ts";
import {ContentfulAssetMapper} from "./ContentfulAssetMapper.ts";
import {ContentfulAsset} from "../model/asset/ContentfulAsset.ts";
import {Project} from "../../domain/project/model/Project.ts";
import type {ContentfulImage} from "../model/asset/ContentfulImage.ts";
import {TextBlock} from "../model/items/TextBlock.ts";
import type {BodyPart} from "../model/items/BodyPart.ts";
import {ImageBlock} from "../model/items/ImageBlock.ts";
import {Language} from "../../domain/about/languages/model/Language.ts";

export class ContentfulMapper {

    private assetMapper = new ContentfulAssetMapper()

    public map(response: any): ContentfulData {
        const assets = this.assetMapper.mapAssets(response)
        return this.mapEntries(response, assets)
    }

    private mapEntries(response: any, assets: ContentfulAsset[]): ContentfulData {
        const bodyParts: BodyPart[] = []
        const projects: Project[] = []
        const languages: Language[] = []

        response.items.map((it: any) => {
            switch (it.sys.contentType.sys.id) {
                case "project":
                    projects.push(this.mapProject(it, assets))
                    break

                case "textBlock":
                    bodyParts.push(this.mapTextBlock(it))
                    break

                case "imageBlock":
                    bodyParts.push(this.mapImageBlock(it, assets))
                    break

                case "language":
                    languages.push(this.mapLanguage(it))
                    break

                default:
                    throw new Error("Unknown entry type")
            }
        })

        projects.forEach((project) => {
            project.bodyIds.forEach((it) => {
                project.bodyParts.push(
                    bodyParts.find((bodyPart) => {
                        return bodyPart.id == it
                    })
                )
            })
        })

        return new ContentfulData(
            projects,
            languages,
        )
    }

    private mapTextBlock(entryResponse: any): TextBlock {
        return new TextBlock(
            entryResponse.sys.id,
            entryResponse.fields.content,
        )
    }

    private mapImageBlock(entryResponse: any, assets: ContentfulAsset[]): ImageBlock {
        const imageAsset = assets.find((asset) => {
            return asset.id == entryResponse.fields.image.sys.id
        }) as ContentfulImage

        return new ImageBlock(
            entryResponse.sys.id,
            imageAsset.url,
            entryResponse.fields.description,
        )
    }

    private mapProject(entryResponse: any, assets: ContentfulAsset[]): Project {
        const gridImageAsset = assets.find((asset) => {
            return asset.id == entryResponse.fields.gridImage.sys.id
        }) as ContentfulImage

        const coverImageAsset = assets.find((asset) => {
            return asset.id == entryResponse.fields.coverImage.sys.id
        }) as ContentfulImage

        const project = new Project(
            entryResponse.fields.name,
            entryResponse.fields.slug,
            parseInt(entryResponse.fields.completed.split("-")[0]),
            entryResponse.fields.client,
            entryResponse.fields.platforms,
            entryResponse.fields.roles,
            entryResponse.fields.languages,
            entryResponse.fields.otherTech,
            gridImageAsset.url,
            entryResponse.fields.gridImageShape == "Vertical",
            coverImageAsset.url,
            entryResponse.fields.order,
            entryResponse.fields.sourceCodeUrl,
            entryResponse.fields.deploymentUrl,
            [],
        )

        if (entryResponse.fields.body) project.bodyIds = entryResponse.fields.body.map((it) => { return it.sys.id })
        return project
    }

    private mapLanguage(entryResponse: any): Language {
        return new Language(
            entryResponse.fields.name,
            entryResponse.fields.fluency,
            entryResponse.fields.fluencyPercentage,
        )
    }
}
