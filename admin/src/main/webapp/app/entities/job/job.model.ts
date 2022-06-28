import dayjs from 'dayjs/esm';

export interface IJob {
  id?: number;
  name?: string;
  description?: string | null;
  contact?: string | null;
  value?: number;
  date?: dayjs.Dayjs | null;
}

export class Job implements IJob {
  constructor(
    public id?: number,
    public name?: string,
    public description?: string | null,
    public contact?: string | null,
    public value?: number,
    public date?: dayjs.Dayjs | null
  ) {}
}

export function getJobIdentifier(job: IJob): number | undefined {
  return job.id;
}
