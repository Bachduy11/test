import Joi from "joi"

export const registerSchema = Joi.object({
    name: Joi.string().messages({
        // "any.required": "name bắt buộc phải nhập",
        "string.empty": "name không được bỏ trống"
    }),
    email: Joi.string().required().messages({
        "any.required": "email bắt buộc phải nhập",
        "string.empty": "email không được bỏ trống"   
    }),
    password: Joi.string().required().min(6).messages({
        "any.required": "pass bắt buộc phải nhập",
        "string.empty": "pass không được bỏ trống",
        "string.min": "cần tối thiểu 6 kí tự"
    }),
    confinPassword: Joi.string().required().min(6).valid(Joi.ref("password")).messages({
        "any.required": "name bắt buộc phải nhập",
        "string.empty": "name không được bỏ trống",
        "string.min": "cần tối thiểu 6 kí tự"
    }),
    age: Joi.number().required().min(1).max(100).messages({
        "any.required": "age bắt buộc phải nhập",
        "number.empty": "age không được bỏ trống",
        "number.min": "age không được nhỏ hơn 1",
        "number.max": "age không được lớn hơn 100"
    }),
})
export const singinSchema = Joi.object({
    email: Joi.string().required().email().messages({
        "any.required": "email bắt buộc phải nhập",
        "string.empty": "email không được bỏ trống" 
    }),
    password: Joi.string().required().min(6).messages({
        "any.required": "pass bắt buộc phải nhập",
        "string.empty": "pass không được bỏ trống",
        "string.min": "cần tối thiểu 6 kí tự"
    })
})