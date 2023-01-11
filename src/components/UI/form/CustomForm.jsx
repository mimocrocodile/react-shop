import classes from './custom-form.module.css'
import { CustomInput } from '../input/CustomInput'
import { InputBtn } from '../input/InputBtn'
function CustomForm(){
    return(
        <form action="" className={classes.form}>
            <CustomInput />
            <InputBtn />
            {/* <input type="text" value="123" /> */}
        </form>
    )
}

export {CustomForm}