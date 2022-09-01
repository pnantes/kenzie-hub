import { useForm } from "react-hook-form";
import formSchema from "../../validators/addTech";
import { LargeButton, TitleForm } from "../Form";
import { Form } from "../Form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { ITech, TechContext } from "../../contexts/TechContext";

export const AddModal = () => {
  const { createTech } = useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ITech>({
    resolver: yupResolver(formSchema),
  });

  return (
    <div>
      <div>
        <TitleForm>Cadastrar Tecnologia</TitleForm>
        <p>X</p>
      </div>
      <Form className="form" onSubmit={handleSubmit(createTech)}>
        <label htmlFor="title">Nome</label>
        <input
          type="text"
          placeholder="Digite aqui sua tecnologia"
          id="title"
          {...register("title")}
        />
        <span>{errors.title?.message}</span>

        <label htmlFor="status">Selecionar status</label>
        <select id="status" {...register("status")}>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>

        <LargeButton buttonStyle={"login"} type="submit">
          Cadastrar Tecnologia
        </LargeButton>
      </Form>
    </div>
  );
};
