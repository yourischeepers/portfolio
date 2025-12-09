import {ContentfulData} from "../model/ContentfulData.ts";
import {ContentfulAssetMapper} from "./ContentfulAssetMapper.ts";
import {ContentfulAsset} from "../model/asset/ContentfulAsset.ts";
import {Project} from "../../domain/project/model/Project.ts";
import type {ContentfulImage} from "../model/asset/ContentfulImage.ts";

export class ContentfulMapper {

    private assetMapper = new ContentfulAssetMapper()

    public map(response: any): ContentfulData {
        const assets = this.assetMapper.mapAssets(response)
        return this.mapEntries(response, assets)
    }

    private mapEntries(response: any, assets: ContentfulAsset[]): ContentfulData {
        const projects: Project[] = []

        response.items.map((it: any) => {
            switch (it.sys.contentType.sys.id) {
                case "project":
                    projects.push(this.mapProject(it, assets))
                    break

                default:
                    throw new Error("Unknown entry type")
            }
        })

        return new ContentfulData(
            projects,
        )
    }

    private mapProject(entryResponse: any, assets: ContentfulAsset[]): Project {
        const gridImageAsset = assets.find((asset) => {
            return asset.id == entryResponse.fields.gridImage.sys.id
        }) as ContentfulImage

        const coverImageAsset = assets.find((asset) => {
            return asset.id == entryResponse.fields.coverImage.sys.id
        }) as ContentfulImage

        return new Project(
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
            entryResponse.fields.sourceCodeUrl,
            entryResponse.fields.deploymentUrl,
        )
    }
}
