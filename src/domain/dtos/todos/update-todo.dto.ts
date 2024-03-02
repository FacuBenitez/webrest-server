





export class UpdateTodoDto {


    private constructor(
     public readonly text?: string,
     public readonly completedAt?: Date
    ){}
    
    get values(){

        const returnObj:{[ key:string ]: any } = {}
        if(this.text) returnObj.text = this.text
        if(this.completedAt) returnObj.completedAt = this.completedAt
        return returnObj
    }
     static create( props:{ [ key:string ]:any } ): [string?, UpdateTodoDto?] {
         
         const { text,completedAt } = props;
        

 
         return [ undefined, new UpdateTodoDto(text) ]
     }
 
 
 }