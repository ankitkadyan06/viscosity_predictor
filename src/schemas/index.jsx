import * as Yup from "yup";

export const predictorSchema = Yup.object({
    ci_water: Yup.number().min(1).required("Please enter a  number").typeError('Please enter a valid number'),
    citric: Yup.number().min(1).required("Please enter a  number").typeError('Please enter a valid number'),
    citric_acid: Yup.number().min(1).required("Please enter a  number").typeError('Please enter a valid number'),
    aarbopol: Yup.number().min(1).required("Please enter a  number").typeError('Please enter a valid number'),
    capb: Yup.number().min(1).required("Please enter a  number").typeError('Please enter a valid number'),
    silicon: Yup.number().min(1).required("Please enter a  number").typeError('Please enter a valid number'),
    sles: Yup.number().min(1).required("Please enter a  number").typeError('Please enter a valid number'),
    salt1: Yup.number().min(1).required("Please enter a  number").typeError('Please enter a valid number'),
    salt2: Yup.number().min(1).required("Please enter a  number").typeError('Please enter a valid number'),
    viscosity: Yup.number().min(1).required("Please enter a  number").typeError('Please enter a valid number'),
    pH: Yup.number().min(1).required("Please enter a  number").typeError('Please enter a valid number')
})