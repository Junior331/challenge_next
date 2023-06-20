import { ReactElement, Ref, forwardRef, useState } from 'react'
import { Button, FormControl, OutlinedInput, Slide } from '@mui/material'

import { TransitionProps } from '@mui/material/transitions'
import { useFormik } from 'formik'
import { clientSchema } from '@/pages/Clients/clientSchema'
import * as S from './ModalAddClientStyled'
import { ModalAddClientType } from './@types'
import { postClients } from '@/services/service'
import { PostClientType } from '@/pages/@types'

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<any, any>
  },
  ref: Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />
})

const ModalAddClient = ({
  isOpen = false,
  handleClose = () => {},
}: ModalAddClientType) => {
  const [open] = useState(isOpen)

  const closeModal = () => {
    handleClose(!open)
  }

  const handlePost = async (client: PostClientType) => {
    try {
      await postClients(client)
    } catch (error) {
      console.error('Erro ao enviar a solicitação DELETE:', error)
      // Trate o erro adequadamente
    }
  }

  const formik = useFormik({
    initialValues: {
      uf: '',
      nome: '',
      numero: '',
      bairro: '',
      cidade: '',
      logradouro: '',
      tipoDocumento: '',
      numeroDocumento: '',
    },
    onSubmit: ({
      bairro,
      cidade,
      uf,
      numero,
      logradouro,
      nome,
      tipoDocumento,
      numeroDocumento,
    }) => {
      const clientData: PostClientType = {
        uf,
        nome,
        cidade,
        numero,
        bairro,
        logradouro,
        tipoDocumento,
        numeroDocumento,
      }
      console.log('clientData ::', clientData)
      handlePost(clientData)
    },
    validationSchema: clientSchema,
  })

  return (
    <S.DialogComponent
      open={isOpen}
      keepMounted
      onClose={closeModal}
      TransitionComponent={Transition}
      aria-describedby="alert-dialog-slide-description"
    >
      <S.CardComponent>
        <S.CardContentComponent>
          <form onSubmit={formik.handleSubmit}>
            <S.ContainerInput
              error={formik.touched.nome && Boolean(formik.errors.nome)}
            >
              <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                <OutlinedInput
                  id="nome"
                  autoComplete="false"
                  aria-describedby="nome"
                  placeholder="Nome"
                  value={formik.values.nome}
                  onChange={formik.handleChange}
                  onKeyUp={() => {
                    formik.setFieldValue(
                      'nome',
                      formik.values.nome.replace('/s/g', ''),
                    )
                  }}
                  error={formik.touched.nome && Boolean(formik.errors.nome)}
                />
              </FormControl>
              <S.TextErro variant="h5">{formik.errors.nome}</S.TextErro>
            </S.ContainerInput>
            <S.ContainerInput
              error={
                formik.touched.tipoDocumento &&
                Boolean(formik.errors.tipoDocumento)
              }
            >
              <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                <OutlinedInput
                  id="tipoDocumento"
                  autoComplete="false"
                  aria-describedby="tipoDocumento"
                  placeholder="Tipo do documento"
                  value={formik.values.tipoDocumento}
                  onChange={formik.handleChange}
                  onKeyUp={() => {
                    formik.setFieldValue(
                      'tipoDocumento',
                      formik.values.tipoDocumento.replace('/s/g', ''),
                    )
                  }}
                  error={
                    formik.touched.tipoDocumento &&
                    Boolean(formik.errors.tipoDocumento)
                  }
                />
              </FormControl>
              <S.TextErro variant="h5">
                {formik.errors.tipoDocumento}
              </S.TextErro>
            </S.ContainerInput>
            <S.ContainerInput
              error={
                formik.touched.numeroDocumento &&
                Boolean(formik.errors.numeroDocumento)
              }
            >
              <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                <OutlinedInput
                  id="numeroDocumento"
                  autoComplete="false"
                  aria-describedby="numeroDocumento"
                  placeholder="Numero do documento"
                  value={formik.values.numeroDocumento}
                  onChange={formik.handleChange}
                  onKeyUp={() => {
                    formik.setFieldValue(
                      'numeroDocumento',
                      formik.values.numeroDocumento.replace('/s/g', ''),
                    )
                  }}
                  error={
                    formik.touched.numeroDocumento &&
                    Boolean(formik.errors.numeroDocumento)
                  }
                />
              </FormControl>
              <S.TextErro variant="h5">
                {formik.errors.numeroDocumento}
              </S.TextErro>
            </S.ContainerInput>
            <S.ContainerInput
              error={
                formik.touched.logradouro && Boolean(formik.errors.logradouro)
              }
            >
              <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                <OutlinedInput
                  id="logradouro"
                  autoComplete="false"
                  aria-describedby="logradouro"
                  placeholder="Logradouro"
                  value={formik.values.logradouro}
                  onChange={formik.handleChange}
                  onKeyUp={() => {
                    formik.setFieldValue(
                      'logradouro',
                      formik.values.logradouro.replace('/s/g', ''),
                    )
                  }}
                  error={
                    formik.touched.logradouro &&
                    Boolean(formik.errors.logradouro)
                  }
                />
              </FormControl>
              <S.TextErro variant="h5">{formik.errors.logradouro}</S.TextErro>
            </S.ContainerInput>
            <S.ContainerInput
              error={formik.touched.numero && Boolean(formik.errors.numero)}
            >
              <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                <OutlinedInput
                  id="numero"
                  autoComplete="false"
                  aria-describedby="numero"
                  placeholder="numero"
                  value={formik.values.numero}
                  onChange={formik.handleChange}
                  onKeyUp={() => {
                    formik.setFieldValue(
                      'numero',
                      formik.values.numero.replace('/s/g', ''),
                    )
                  }}
                  error={formik.touched.numero && Boolean(formik.errors.numero)}
                />
              </FormControl>
              <S.TextErro variant="h5">{formik.errors.numero}</S.TextErro>
            </S.ContainerInput>
            <S.ContainerInput
              error={formik.touched.bairro && Boolean(formik.errors.bairro)}
            >
              <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                <OutlinedInput
                  id="bairro"
                  autoComplete="false"
                  aria-describedby="bairro"
                  placeholder="Bairro"
                  value={formik.values.bairro}
                  onChange={formik.handleChange}
                  onKeyUp={() => {
                    formik.setFieldValue(
                      'bairro',
                      formik.values.bairro.replace('/s/g', ''),
                    )
                  }}
                  error={formik.touched.bairro && Boolean(formik.errors.bairro)}
                />
              </FormControl>
              <S.TextErro variant="h5">{formik.errors.bairro}</S.TextErro>
            </S.ContainerInput>
            <S.ContainerInput
              error={formik.touched.cidade && Boolean(formik.errors.cidade)}
            >
              <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                <OutlinedInput
                  id="cidade"
                  autoComplete="false"
                  aria-describedby="cidade"
                  placeholder="Cidade"
                  value={formik.values.cidade}
                  onChange={formik.handleChange}
                  onKeyUp={() => {
                    formik.setFieldValue(
                      'cidade',
                      formik.values.cidade.replace('/s/g', ''),
                    )
                  }}
                  error={formik.touched.cidade && Boolean(formik.errors.cidade)}
                />
              </FormControl>
              <S.TextErro variant="h5">{formik.errors.cidade}</S.TextErro>
            </S.ContainerInput>
            <S.ContainerInput
              error={formik.touched.uf && Boolean(formik.errors.uf)}
            >
              <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                <OutlinedInput
                  id="uf"
                  autoComplete="false"
                  aria-describedby="uf"
                  placeholder="UF"
                  value={formik.values.uf}
                  onChange={formik.handleChange}
                  onKeyUp={() => {
                    formik.setFieldValue(
                      'uf',
                      formik.values.uf.replace('/s/g', ''),
                    )
                  }}
                  error={formik.touched.uf && Boolean(formik.errors.uf)}
                />
              </FormControl>
              <S.TextErro variant="h5">{formik.errors.uf}</S.TextErro>
            </S.ContainerInput>
            <Button type="submit" variant="contained">
              Save
            </Button>
          </form>
        </S.CardContentComponent>
      </S.CardComponent>
    </S.DialogComponent>
  )
}

export default ModalAddClient
