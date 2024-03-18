export class Tags {

  static readonly ANGULAR = new Tags('ANGULAR' , 'red')
  static readonly TYPESCRIPT = new Tags('TYPESCRIPT' , 'darkred')
  static readonly JAVA = new Tags('JAVA' , 'pink')
  static readonly NODEJS = new Tags('NODEJS' , 'green')
  static readonly JAVASCRIPT = new Tags('JAVASCRIPT' , 'orange')
  static readonly HTML5 = new Tags('HTML' , 'brown')
  static readonly CSS3 = new Tags('CSS' , 'purple')
  static readonly SPRINGBOOT = new Tags('SPRINGBOOT' , 'blue')
  static readonly JAVAFX = new Tags('JAVAFX' , 'yellow')

  private constructor(private readonly key: string, public readonly color: string) {
  }

  toString() {
    return this.key
  }
}
