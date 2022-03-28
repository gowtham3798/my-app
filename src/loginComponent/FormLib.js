import { Style } from "@mui/icons-material";
import { useField } from "formik";
import {StyledTitle} from './loginComponent/styles.js'

export const TextInput = ({...props}) => {
      const [field,meta] = useField(props);
      
      return(
          <div>
            <StyledTitle htmlFor={props.name}>
                {props.label}
            </StyledTitle>
            <StyledTitle 
            {...props}
            {...field}
             />
          </div>
      )
}