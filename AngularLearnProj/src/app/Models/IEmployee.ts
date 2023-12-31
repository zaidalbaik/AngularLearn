export interface IStatus {
  status: string;
  data: IEmployee[];
  message: string;
}

export interface IEmployee {
  id: number;
  employee_name: string;
  employee_salary: number;
  employee_age: number;
  profile_image: string;
}
