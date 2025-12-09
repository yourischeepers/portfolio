import {BodyPart} from "./BodyPart.ts";

export class TextBlock extends BodyPart {

    public content: string

    public constructor(
        id: string,
        content: string,
    ) {
        super(id)
        this.content = content
    }
}
