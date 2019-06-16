import Recipe from "./Recipe";
import Step from "./Step";
import Tag from "./Tag";

export const recipe = new Recipe({ title: "", steps: [], tags: [], preparationTime: 0, starred: false, lastCooked: new Date(1970), timesCooked: 0 });
export const tag = new Tag();
export const step = new Step("");
