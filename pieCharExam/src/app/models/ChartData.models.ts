export interface AddChartDataRequest {
  chartID: string;
  labels: string[];
  datasets: Dataset[];
}
export interface Dataset {
  id: number;
  label: string;
  data: number[];
  backgroundColor: string;
}

export interface ChartDat {
  chartID: string;
  labels: string[];
  datasets: Dataset[];
}
