export class Hero{
	// 这是一个少量需求和零行为的贫血模型
	constructor(
      public id: number,
      public name: string,
      public power: string,
      public alterEgo?: string
	){}
}