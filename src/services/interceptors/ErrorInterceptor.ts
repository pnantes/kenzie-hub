import { AxiosError } from "axios";

export const errorInterceptor = (error: AxiosError) => {
  if (error.message === "Network Error") {
    return Promise.reject(new Error("Erro de conexão"));
  }

  if (error.response?.status === 401) {
    return Promise.reject(new Error("Email já cadastrado"));
  }

  if ((error.message === "contact is required", "course_module is required")) {
    return Promise.reject(
      new Error("Os campos Contato e Módulo do Curso são obrigatórios")
    );
  }

  if (error.message === "password: minimum is 6 characters") {
    return Promise.reject(new Error("A senha necessita de 6 caracteres"));
  }

  if (error.message === "Email already exists") {
    return Promise.reject(new Error("Email já cadastrado"));
  }

  return Promise.reject(error);
};
