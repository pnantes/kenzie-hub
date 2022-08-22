import * as yup from "yup";

const formSchema = yup.object().shape({
  title: yup.string().required("Nome obrigatório"),
});

export default formSchema;
