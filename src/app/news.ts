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
    yAxis : number;
}

export class chartData{
	x : number;
	y : number;
}

export class newsForm {
    constructor(
        public ckid : number,
        public name: string,
        public search : string,
        public numberof: number,
        public categories: boolean[] 
        // 11
    ){} 
}