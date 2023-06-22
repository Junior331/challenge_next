import {
  deleteClients,
  getClients,
  randomIntFromInterval,
} from '@/services/service'
import * as S from './styled'
import { useEffect, useState } from 'react'

import { ClientType, PostClientType } from '../@types'
import { FormControl, IconButton, OutlinedInput } from '@mui/material'
import { CardClientSkeleton } from '@/components/modules/Skeletons/index'
import { ModalAddClient } from '@/components/modules'
import { useFormik } from 'formik'
import { clientSchema } from './clientSchema'
import { LoadingButton } from '@mui/lab'

export const Clients = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const [loading, setLoading] = useState(true)
  const [clientSelected, setClientSelected] = useState<number>(0)
  const [clients, setClients] = useState<ClientType[]>([])

  const getClient = async () => {
    try {
      const result = await getClients()
      setClients(result)
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }
  const handleDelete = async (clientId: number) => {
    try {
      await deleteClients(clientId)
      setLoading(true)
    } catch (error) {
      console.error('Erro ao enviar a solicitação DELETE:', error)
      // Trate o erro adequadamente
    }
  }
  const handleOpenModal = () => {
    setIsOpen(!isOpen)
  }
  const handleClose = () => {
    setIsOpen(!isOpen)
  }
  const handleEdit = (clientId: number) => {
    setIsEdit(!isEdit)
    setClientSelected(clientId)
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
      console.log({ clientData })
    },
    validationSchema: clientSchema,
  })

  useEffect(() => {
    getClient()
  }, [loading])

  return (
    <S.ClientsContainer maxWidth="sm">
      <S.Title variant="h5">Clients</S.Title>
      {loading ? (
        <S.ContainerCardComponent>
          <CardClientSkeleton />
          <CardClientSkeleton />
          <CardClientSkeleton />
          <CardClientSkeleton />
          <CardClientSkeleton />
        </S.ContainerCardComponent>
      ) : (
        <form onSubmit={formik.handleSubmit}>
          <S.ContainerCardComponent>
            {clients.map((client: ClientType) => (
              <S.CardComponent key={client.id}>
                <S.CardContentComponent>
                  <S.TooltipComponent
                    left
                    title=""
                    onClick={() => handleEdit(client.id)}
                  >
                    <IconButton>
                      {isEdit && client.id === clientSelected ? (
                        <S.CloseIconComponent />
                      ) : (
                        <S.EditIconComponent />
                      )}
                    </IconButton>
                  </S.TooltipComponent>
                  <S.TooltipComponent
                    title=""
                    onClick={() => handleDelete(client.id)}
                  >
                    <IconButton>
                      <S.DeleteIconComponent />
                    </IconButton>
                  </S.TooltipComponent>

                  {isEdit && client.id === clientSelected ? (
                    <form onSubmit={formik.handleSubmit}>
                      <S.ContainerInput
                        error={
                          formik.touched.nome && Boolean(formik.errors.nome)
                        }
                      >
                        <FormControl
                          sx={{ m: 1, width: '25ch' }}
                          variant="outlined"
                        >
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
                            error={
                              formik.touched.nome && Boolean(formik.errors.nome)
                            }
                          />
                        </FormControl>
                        {formik.errors.nome && (
                          <S.TextErro variant="h5">
                            {formik.errors.nome}
                          </S.TextErro>
                        )}
                      </S.ContainerInput>
                      <S.ContainerInput
                        error={
                          formik.touched.tipoDocumento &&
                          Boolean(formik.errors.tipoDocumento)
                        }
                      >
                        <FormControl
                          sx={{ m: 1, width: '25ch' }}
                          variant="outlined"
                        >
                          <OutlinedInput
                            id="tipoDocumento"
                            autoComplete="false"
                            aria-describedby="tipoDocumento"
                            placeholder="Tipo do documento"
                            value={formik.values.tipoDocumento}
                            onChange={formik.handleChange}
                            error={
                              formik.touched.tipoDocumento &&
                              Boolean(formik.errors.tipoDocumento)
                            }
                          />
                        </FormControl>
                        {formik.errors.tipoDocumento && (
                          <S.TextErro variant="h5">
                            {formik.errors.tipoDocumento}
                          </S.TextErro>
                        )}
                      </S.ContainerInput>
                      <S.ContainerInput
                        error={
                          formik.touched.numeroDocumento &&
                          Boolean(formik.errors.numeroDocumento)
                        }
                      >
                        <FormControl
                          sx={{ m: 1, width: '25ch' }}
                          variant="outlined"
                        >
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
                                formik.values.numeroDocumento.replace(
                                  '/s/g',
                                  '',
                                ),
                              )
                            }}
                            error={
                              formik.touched.numeroDocumento &&
                              Boolean(formik.errors.numeroDocumento)
                            }
                          />
                        </FormControl>
                        {formik.errors.numeroDocumento && (
                          <S.TextErro variant="h5">
                            {formik.errors.numeroDocumento}
                          </S.TextErro>
                        )}
                      </S.ContainerInput>
                      <S.ContainerInput
                        error={
                          formik.touched.logradouro &&
                          Boolean(formik.errors.logradouro)
                        }
                      >
                        <FormControl
                          sx={{ m: 1, width: '25ch' }}
                          variant="outlined"
                        >
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
                        {formik.errors.logradouro && (
                          <S.TextErro variant="h5">
                            {formik.errors.logradouro}
                          </S.TextErro>
                        )}
                      </S.ContainerInput>
                      <S.ContainerInput
                        error={
                          formik.touched.numero && Boolean(formik.errors.numero)
                        }
                      >
                        <FormControl
                          sx={{ m: 1, width: '25ch' }}
                          variant="outlined"
                        >
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
                            error={
                              formik.touched.numero &&
                              Boolean(formik.errors.numero)
                            }
                          />
                        </FormControl>
                        {formik.errors.numero && (
                          <S.TextErro variant="h5">
                            {formik.errors.numero}
                          </S.TextErro>
                        )}
                      </S.ContainerInput>
                      <S.ContainerInput
                        error={
                          formik.touched.bairro && Boolean(formik.errors.bairro)
                        }
                      >
                        <FormControl
                          sx={{ m: 1, width: '25ch' }}
                          variant="outlined"
                        >
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
                            error={
                              formik.touched.bairro &&
                              Boolean(formik.errors.bairro)
                            }
                          />
                        </FormControl>
                        {formik.errors.bairro && (
                          <S.TextErro variant="h5">
                            {formik.errors.bairro}
                          </S.TextErro>
                        )}
                      </S.ContainerInput>
                      <S.ContainerInput
                        error={
                          formik.touched.cidade && Boolean(formik.errors.cidade)
                        }
                      >
                        <FormControl
                          sx={{ m: 1, width: '25ch' }}
                          variant="outlined"
                        >
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
                            error={
                              formik.touched.cidade &&
                              Boolean(formik.errors.cidade)
                            }
                          />
                        </FormControl>
                        {formik.errors.cidade && (
                          <S.TextErro variant="h5">
                            {formik.errors.cidade}
                          </S.TextErro>
                        )}
                      </S.ContainerInput>
                      <S.ContainerInput
                        error={formik.touched.uf && Boolean(formik.errors.uf)}
                      >
                        <FormControl
                          sx={{ m: 1, width: '25ch' }}
                          variant="outlined"
                        >
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
                            error={
                              formik.touched.uf && Boolean(formik.errors.uf)
                            }
                          />
                        </FormControl>
                        {formik.errors.uf && (
                          <S.TextErro variant="h5">
                            {formik.errors.uf}
                          </S.TextErro>
                        )}
                      </S.ContainerInput>
                      <LoadingButton
                        type="submit"
                        disabled={!formik.errors}
                        variant="contained"
                        loadingPosition="end"
                      >
                        Save
                      </LoadingButton>
                    </form>
                  ) : (
                    <>
                      <S.BoxComponent>
                        <S.AvatarImage colorIndex={randomIntFromInterval(1, 6)}>
                          {client.nome.slice(0, 1).toLocaleUpperCase()}
                        </S.AvatarImage>
                      </S.BoxComponent>
                      <S.Title variant="h5">{client.nome}</S.Title>
                      <S.Text variant="h5">
                        {client.tipoDocumento.toUpperCase()}:{' '}
                        {client.numeroDocumento}
                      </S.Text>
                      <S.Text variant="h5">
                        Logradouro: {client.logradouro}
                      </S.Text>
                      <S.Text variant="h5">Numero: {client.numero}</S.Text>
                      <S.Text variant="h5">Bairro: {client.bairro}</S.Text>
                      <S.Text variant="h5">Cidade: {client.cidade}</S.Text>
                      <S.Text variant="h5">UF: {client.uf}</S.Text>
                    </>
                  )}
                </S.CardContentComponent>
              </S.CardComponent>
            ))}
            <S.CardComponent>
              <S.CardActionAreaComponent onClick={() => handleOpenModal()}>
                <S.TooltipCenterComponent title="">
                  <IconButton>
                    <S.AddIconComponent />
                  </IconButton>
                </S.TooltipCenterComponent>
              </S.CardActionAreaComponent>
            </S.CardComponent>
          </S.ContainerCardComponent>
        </form>
      )}
      <ModalAddClient isOpen={isOpen} handleClose={handleClose} />
    </S.ClientsContainer>
  )
}
