export default class Task {
  id: number;
  createDate: string;

  constructor(public title: string, public description: string) {
    this.id = Date.now();
    this.createDate = new Date().toISOString().split('T')[0];
  }
}
