/* eslint-disable no-useless-escape */
import * as yup from 'yup'

export const clientSchema = yup.object().shape({
  nome: yup
    .string()
    .min(3, 'Nome inválido, mínimo de 3 ou mais caracteres')
    .required('Campo obrigatório'),
  logradouro: yup
    .string()
    .min(3, 'logradouro inválido, mínimo de 3 ou mais caracteres')
    .required('Campo obrigatório'),
  tipoDocumento: yup
    .string()
    .min(2, 'Tipo do cumento inválido, mínimo de 2 ou mais caracteres')
    .required('Campo obrigatório'),
  numero: yup.string().required('Campo obrigatório'),
  bairro: yup
    .string()
    .min(3, 'Bairro inválido, mínimo de 3 ou mais caracteres')
    .required('Campo obrigatório'),
  numeroDocumento: yup
    .string()
    .min(11, 'Numero do documento inválido, mínimo de 3 ou mais caracteres')
    .required('Campo obrigatório'),
  cidade: yup
    .string()
    .min(3, 'Cidade inválido, mínimo de 3 ou mais caracteres')
    .required('Campo obrigatório'),
  uf: yup
    .string()
    .min(2, 'UF inválido, mínimo de 2 caracteres')
    .required('Campo obrigatório'),
})
