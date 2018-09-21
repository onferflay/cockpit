export class News {
  id : number;
  created : string;
  title : string;
  source : string;
  validated_text : string;
}

export class ChartSeries {
    name : string;
    data : chartData[] = [];
}

export class chartData{
	x : number;
	y : number;
}

export class newsForm {
    constructor(
        public ckid : number,
        public name: string,
        public numberof: number,
        public categories: boolean[]
    ){}
}