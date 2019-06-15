import Step from "./Step";
import Tag from "./Tag";

export default class Recipe {
    title: string
    steps: Step[]
    tags: Tag[]
    preparationTime: number
    starred: boolean
    lastCooked: Date
    timesCooked: number

    constructor({ title, steps, tags, preparationTime, starred, lastCooked, timesCooked }: Recipe) {
        this.title = title
        this.steps = steps
        this.tags = tags
        this.preparationTime = preparationTime
        this.starred = starred
        this.lastCooked = lastCooked
        this.timesCooked = timesCooked
    }
};