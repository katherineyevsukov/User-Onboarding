import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
    .string()
    .trim()
    .required('Name is required')
    .min(3, 'Name must be at least 3 characters'),
    email: yup
    .string()
    .trim()
    .email()
    .required('Email is required'),
    password: yup
    .string()
    .required()
    .trim()
    .min(6, 'password must be at least 6 characters'),
    status: yup
    .string()
    .required('You must select student or teacher')
    .oneOf(['student', 'teacher']),
    age: yup
    .string()
    .required('You must select your age range'),
    terms: yup
    .boolean()
    .oneOf([true],'You must agree to the terms and conditions')
    .required('You must agree to the terms and conditions'),
    newsletter: yup
    .boolean(),
})

export default formSchema