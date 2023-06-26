import * as yup from 'yup'

export const carSchema = yup.object().shape({
  placa: yup
    .string()
    .min(3, 'Placa inválida, mínimo de 3 ou mais caracteres')
    .required('Campo obrigatório'),
  kmAtual: yup
    .number()
    .typeError('O campo deve ser um número')
    .positive('O número deve ser positivo')
    .min(1, 'Km inválido, mínimo de 1 KM')
    .required('Campo obrigatório'),
  marcaModelo: yup
    .string()
    .min(3, 'Placa inválida, mínimo de 3 ou mais caracteres')
    .required('Campo obrigatório'),
  anoFabricacao: yup.number().required('Campo obrigatório'),
})
