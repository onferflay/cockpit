export class News {
  id : number;
  created : string;
  title : string;
  source : string;
  validated_text : string;
}

export class ChartSeries {
    name : string;
    data : chart[] = [];
}

class chartData{
	date : number;
	value : number;
}