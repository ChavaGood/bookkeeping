import { ValidationErrors,AbstractControl,ValidatorFn } from "@angular/forms";

export function datevalidation():ValidatorFn{

return (control:AbstractControl):ValidationErrors|null=>{
if(control.value===null){
    return null
}
const myDate=new Date(control.value)
const today=new Date()
    if(myDate>today){
        return {'date':{today,myDate}}
    }

return null

}

}