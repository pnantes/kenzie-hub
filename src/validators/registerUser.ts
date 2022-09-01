import * as yup from "yup";

const formSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  name: yup.string().required("Nome obrigatório"),
  password: yup
    .string()
    .min(8, "No minimo 8 caracteres")
    .required()
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
      "8 caracteres (Número, caractere especial, letra maiúscula e minúscula)" //nao aceita caracteres especiais
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Confirmação deve ser igual a senha"),
});

export default formSchema;
