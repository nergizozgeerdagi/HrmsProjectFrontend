import { useField } from 'formik'
import React from 'react'
import { FormField,Label } from 'semantic-ui-react'

export default function HrmsTextInput({...props}) {
    const [field,meta]=useField(props);
    return (
        <FormField  error={meta.touched && !!meta.error}>
        <label className="text-left">{props.label}</label>
        <input {...field} {...props} />
        {meta.touched && !!meta.error ? (
             <Label className="validation-error-label" basic color='red' prompt pointing content={meta.error}></Label>
        ):null}
       </FormField> 
    )}
