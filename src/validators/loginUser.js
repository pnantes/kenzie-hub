import * as yup from "yup";

const formSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup.string().min(8).required(),
});

export default formSchema;
