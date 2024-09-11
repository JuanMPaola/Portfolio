export class Tag {
    static readonly ANGULAR = new Tag('Angular', 'red');
    static readonly TYPESCRIPT = new Tag('TypeScript', 'darkblue');
    static readonly CSHARP = new Tag('C#', 'green');
    static readonly NODEJS = new Tag('Node.Js', 'brown');
    static readonly JAVASCRIPT = new Tag('JavaScript', 'orange');
    static readonly REACT = new Tag('React', 'blue');
    static readonly NESTJS = new Tag('Nest Js', 'darkred');
    static readonly EXPRESS = new Tag('Express', 'gray');

    private constructor(private readonly key:string, public readonly color: string){

    }

    toString(){
        return this.key;
    }
}