export class Workout {
  public id: number;
  public date: string; // MM/DD/YYYY
  public time: number = 0; // mins
  public type: string;
  public distance?: number = 0; // miles
}
