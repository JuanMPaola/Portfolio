export class Tag {
    static readonly ANGULAR = new Tag('../../assets/icons/tech/Angular-Dark.svg', 'Angular');
    static readonly TYPESCRIPT = new Tag('../../assets/icons/tech/TypeScript.svg', 'Typescript');
    static readonly CSHARP = new Tag('../../assets/icons/tech/CS.svg', 'C#');
    static readonly NODEJS = new Tag('../../assets/icons/tech/NodeJS-Dark.svg', 'NodeJS');
    static readonly JAVASCRIPT = new Tag('../../assets/icons/tech/JavaScript.svg', 'JavaScript');
    static readonly REACT = new Tag('../../assets/icons/tech/React-Dark.svg', 'React');
    static readonly NESTJS = new Tag('../../assets/icons/tech/NestJS-Dark.svg', 'NestJS');
    static readonly EXPRESS = new Tag('../../assets/icons/tech/ExpressJS-Dark.svg', 'Express');
    static readonly DOCKER = new Tag('../../assets/icons/tech/Docker.svg', 'Docker');
    static readonly JEST = new Tag('../../assets/icons/tech/Jest.svg', 'Jest');
    static readonly POSTGRESQL = new Tag('../../assets/icons/tech/PostgreSQL-Dark.svg', 'PostgreSQL');
    static readonly SEQUELIZE = new Tag('../../assets/icons/tech/Sequelize-Dark.svg', 'Sequelize');
    static readonly FIREBASE = new Tag('../../assets/icons/tech/Firebase-Dark.svg', 'Firebase');
    static readonly REDUX = new Tag('../../assets/icons/tech/Redux.svg', 'Redux');
    static readonly NEXTJS = new Tag('../../assets/icons/tech/NextJS-Dark.svg', 'NextJS');
    static readonly BOOTSTRAP = new Tag('../../assets/icons/tech/Bootstrap.svg', 'Bootstrap');
    static readonly MONGODB = new Tag('../../assets/icons/tech/MongoDB.svg', 'MongoDB');
    static readonly AWS = new Tag('../../assets/icons/tech/AWS-Dark.svg', 'AWS');
    static readonly HANDLEBARS = new Tag('../../assets/icons/tech/Handlebars.png', 'Handlebars');


    private constructor(private readonly img:string, public readonly alt: string){

    }

    toString(){
        return this.img;
    }

    static getMainStack(){
        return [Tag.NODEJS, Tag.TYPESCRIPT ,Tag.NESTJS, Tag.POSTGRESQL , Tag.REACT, Tag.DOCKER]
    }
    static getOtherSkills(){
        return [Tag.JAVASCRIPT, Tag.CSHARP, Tag.EXPRESS, Tag.NEXTJS, Tag. ANGULAR, Tag.FIREBASE, Tag.REDUX, Tag.SEQUELIZE, Tag.JEST ] 
    }
}