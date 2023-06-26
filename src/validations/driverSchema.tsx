import * as yup from 'yup'

export const driverSchema = yup.object().shape({
  nome: yup
    .string()
    .min(3, 'Nome inválido, mínimo de 3 ou mais caracteres')
    .required('Campo obrigatório'),
  numeroHabilitacao: yup
    .string()
    .min(3, 'Numero da Habilitação inválido, mínimo de 3 ou mais caracteres')
    .required('Campo obrigatório'),
  catergoriaHabilitacao: yup.string().required('Campo obrigatório'),
  vencimentoHabilitacao: yup
    .date()
    .min(new Date(), 'A data de vencimento deve ser posterior à data atual')
    .required('O campo de vencimento é obrigatório'),
})
