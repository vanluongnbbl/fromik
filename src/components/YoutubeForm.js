import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const  initialValues ={
    name: '',
    email: '',
    channel: '',
}

const onSubmit = (values) => {
    console.log(values)
    return false
}

const validate = values => {
    let errors = {}

    if (!values.name) {
        errors.name = 'Require'
    }

    if (!values.email) {
        errors.email = 'Require'
    } 

    if (!values.channel) {
        errors.channel = 'Require'
    }

    return errors

}

const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    channel: Yup.string().required('Required')

})  

function YoutubeForm() {

  
    const formik = useFormik({
        
        initialValues,
        onSubmit,
        validationSchema
    })

    console.log("field: ", formik.touched);
  return (
    <div>
        <form onSubmit={formik.handleSubmit}> 
            <label htmlFor='name'>Name</label>
            <input 
                type='text' 
                id='name' 
                name='name'
                onBlur={formik.handleBlur}

                onChange={formik.handleChange}
                value={formik.values.name}
            />
            {formik.touched.name && <div style={{color: 'red'}}>{formik.errors.name}</div>}
            <br/>
            <label htmlFor='email'>Email</label>
            <input 
                type='text' 
                id='email' 
                name='email' 
                onBlur={formik.handleBlur}

                onChange={formik.handleChange}
                value={formik.values.email}
            />
            {formik.touched.email && <div style={{color: 'red'}}>{formik.errors.email}</div>}

            <br/>
            <label htmlFor='channel'>Channel</label>
            <input 
                type='text' 
                id='channel' 
                name='channel' 

                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.channel}
            />
            {formik.touched.channel && <div style={{color: 'red'}}>{formik.errors.channel}</div>}

            <br/>

            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default YoutubeForm