import {BodyPart} from "./BodyPart.ts";

export class ImageBlock extends BodyPart {

    public imageUrl: string
    public description: string

    public constructor(
        id: string,
        imageUrl: string,
        description: string,
    ) {
        super(id)
        this.imageUrl = imageUrl
        this.description = description
    }
}
