import * as yup from "yup";


export const registerSchema = yup.object({
    user_name: yup.string().required("Введите имя"),
    email: yup.string().email("Неверный email").required("Введите email"),
    age: yup
        .number()
        .typeError("Возраст должен быть числом")
        .positive()
        .integer()
        .required("Введите возраст"),
    password: yup.string().min(6, "Минимум 6 символов").required(),
    confirm_password: yup
        .string()
        .oneOf([yup.ref("password")], "Пароли не совпадают")
        .required(),
});


export const postSchema = yup.object({
    title: yup.string().required("Введите заголовок"),
    body: yup.string().required("Введите текст"),
});