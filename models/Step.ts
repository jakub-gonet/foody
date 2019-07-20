export default class Step {
  title: string;
  children: Step[];

  constructor(title: string, children: Step[] = []) {
    this.title = title;
    this.children = children;
  }
}
