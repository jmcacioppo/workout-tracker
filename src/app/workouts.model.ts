export interface Workout {
  id: number;
  date: string; // MM/DD/YYYY
  time: number; // mins
  type: string;
  distance?: number; // miles
}
