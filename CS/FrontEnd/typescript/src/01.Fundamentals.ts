// string
let str:string = 'hello world';

// number
let num : number = 2022;

// boolean
let isLoggedIn:boolean = true;

// array
let arr1 : number[] = [1,2,3];
let arr2 : Array<string> = ['1','2','3'];

// tuple
let arr3 : [string,number] = ['hi',20];

// enum
enum Family {father, mother, sister,brother};
let myFamily : Family = Family.sister;

// function
function sum (a:number, b:number):number{
    return a+b;
}
const minus = (a:number,b:number):number => {return a-b};

// interface
interface PersonAge{
    age : number;
    name? : string;
    readonly marriage : boolean;
}
function myAge(obj:PersonAge){
    console.log(obj.age);
    
}
let me = {name:'moonjung',age:30, marriage:false};
myAge(me);

// class
class Developer{
    name : string;
    constructor(theName:string){
        this.name = theName;
    }
}
let mike = new Developer("mike");
mike.name = "mike"

// 'abstract'가 붙으면 상속 받은 클래스에서 무조건 구현해야 한다.
abstract class FE {
    abstract coding():void;
    study():void{
        console.log("study typescript");
        
    }
}
class FEDeveloper extends FE{
    coding(): void {
        console.log("web front-end");
        
    }
    design():void{
        console.log("design pattern");
        
    }
}

// Generics
function getAnswer<T>(text:T):T{
    return text;
}
getAnswer<string>('Success');

// Type Aliases
// interface와 달리 타입의 확장(extends)이 불가능하다.
type FEstack = {
    name : string;
    language : string;
}