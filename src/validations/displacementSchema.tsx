import * as yup from 'yup'

export const displacementSchema = yup.object().shape({
  motivo: yup
    .string()
    .min(3, 'mínimo de 3 ou mais caracteres')
    .required('Campo obrigatório'),
  kmInicial: yup
    .number()
    .typeError('O campo deve ser um número')
    .positive('O número deve ser positivo')
    .min(1, 'mínimo de 1 KM')
    .required('Campo obrigatório'),
  idVeiculo: yup
    .number()
    .typeError('O campo deve ser um número')
    .positive('O número deve ser positivo')
    .min(1, 'mínimo de 1 KM')
    .required('Campo obrigatório'),
  idCliente: yup
    .number()
    .typeError('O campo deve ser um número')
    .positive('O número deve ser positivo')
    .min(1, 'mínimo de 1')
    .required('Campo obrigatório'),
  idCondutor: yup
    .number()
    .typeError('O campo deve ser um número')
    .positive('O número deve ser positivo')
    .min(1, 'mínimo de 1')
    .required('Campo obrigatório'),
  checkList: yup
    .string()
    .min(3, 'mínimo de 3 ou mais caracteres')
    .required('Campo obrigatório'),
  observacao: yup
    .string()
    .min(3, 'mínimo de 3 ou mais caracteres')
    .required('Campo obrigatório'),
  inicioDeslocamento: yup.string().required('Campo obrigatório'),
})
