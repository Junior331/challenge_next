/* eslint-disable react-hooks/exhaustive-deps */
import { DisplacementType, PutDisplacementType, paramsProps } from '../@types'
import * as S from '../subStyles'
import {
  deleteDisplacements,
  getDisplacement,
  putDisplacements,
  randomIntFromInterval,
} from '@/services/service'
import { useContext, useEffect, useState } from 'react'
import { IconButton } from '@mui/material'
import { FormikValues } from 'formik'
import { DateTimePickerComponent, Input } from '@/components/elements'
import { Actions } from '@/state/modalMessage/@types/actions'
import { MessageContext } from '@/state/modalMessage/state'
import { useRouter } from 'next/navigation'
import { hasError } from '@/utils/utils'
import { displacementSchema } from '@/validations/displacementSchema'

export const Displacement = ({ params }: paramsProps) => {
  const { push } = useRouter()
  const [loading, setLoading] = useState(true)
  const [isEdit, setIsEdit] = useState(false)
  const [isSave, setIsSave] = useState(false)
  const { dispatch } = useContext(MessageContext)
  const [date, setDate] = useState<string>(new Date().toISOString())

  const [displacementData, setDisplacementData] = useState<DisplacementType>({
    id: 0,
    motivo: '',
    kmFinal: 0,
    kmInicial: 0,
    idVeiculo: 0,
    idCliente: 0,
    checkList: '',
    idCondutor: 0,
    observacao: '',
    fimDeslocamento: '',
    inicioDeslocamento: '',
  })

  const getDisplacementData = async () => {
    try {
      const result = await getDisplacement(parseFloat(params.id))
      setDisplacementData(result)
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }
  const handleMessage = (message = '', type = '', open = false) => {
    dispatch({
      type: Actions.SET_MESSAGE,
      payload: {
        open,
        type,
        message,
      },
    })
  }
  const handleDelete = async () => {
    try {
      setLoading(true)
      await deleteDisplacements(parseFloat(params.id))
      handleMessage('Displacement successfully deleted', 'success', true)
      push('/displacements')
    } catch (error: any) {
      handleMessage(error.response.data, 'error', true)
    }
  }
  const handlePutDisplacement = async (values: FormikValues) => {
    setIsSave(true)
    const displacementData: PutDisplacementType = {
      kmFinal: values.kmFinal,
      id: parseFloat(params.id),
      observacao: values.observacao,
      fimDeslocamento: date,
    }

    try {
      await putDisplacements(displacementData)
      setIsSave(false)
      setLoading(true)
      setIsEdit(!isEdit)
      handleMessage('Displacement successfully updated', 'success', true)
    } catch (error: any) {
      setIsSave(false)
      setIsEdit(!isEdit)
      handleMessage(error.response.data, 'error', true)
    }
  }

  const handleDate = async (values: Date | null) => {
    const originalDate = new Date(values?.toString() || '')
    const formattedDate = originalDate.toISOString()
    setDate(formattedDate)
  }

  useEffect(() => {
    getDisplacementData()
  }, [loading])

  return (
    <S.MainContainer maxWidth="sm">
      <S.CardCenterComponent>
        <S.Content>
          <S.BoxComponent>
            <S.AvatarImage colorIndex={randomIntFromInterval(1, 6)}>
              {displacementData.motivo.slice(0, 1).toLocaleUpperCase()}
            </S.AvatarImage>
          </S.BoxComponent>
          <S.Title variant="h5">
            {displacementData.motivo[0]?.toUpperCase() +
              displacementData.motivo.substring(1)}
          </S.Title>
        </S.Content>
        <S.ContainerButtons>
          <S.LoadingButtonComponent
            startIcon
            type="submit"
            variant="contained"
            loadingPosition="start"
            onClick={() => setIsEdit(!isEdit)}
          >
            {isEdit ? 'Cancel' : 'Edit'}
          </S.LoadingButtonComponent>
          <S.LoadingButtonComponent
            startIcon
            type="submit"
            color="error"
            disabled={isEdit}
            variant="contained"
            onClick={handleDelete}
            loadingPosition="start"
          >
            Delete
          </S.LoadingButtonComponent>
        </S.ContainerButtons>
      </S.CardCenterComponent>
      <S.CardComponent>
        <S.FormikComponent
          initialValues={{
            kmFinal: '',
            observacao: '',
            fimDeslocamento: date,
            id: displacementData.id,
          }}
          validateOnMount
          onSubmit={handlePutDisplacement}
          validationSchema={displacementSchema}
        >
          {({ handleBlur, errors, touched, isValid }) => (
            <S.FormComponent isEdit={isEdit}>
              <S.ContainerInfo>
                <S.Info>
                  <S.Title variant="h5">Motivo</S.Title>
                  {isEdit ? (
                    <Input
                      nome="motivo"
                      placeholder="Motivo"
                      onBlur={handleBlur}
                      helpText={errors?.motivo as string}
                      error={hasError(errors, touched, 'motivo')}
                    />
                  ) : (
                    <S.Text variant="h5">{displacementData.motivo}</S.Text>
                  )}
                </S.Info>
                <S.Info>
                  <S.Title variant="h5">Car</S.Title>
                  {isEdit ? (
                    <Input
                      nome="idVeiculo"
                      placeholder="Car"
                      onBlur={handleBlur}
                      helpText={errors?.idVeiculo as string}
                      error={hasError(errors, touched, 'idVeiculo')}
                    />
                  ) : (
                    <S.Text variant="h5">{displacementData.idVeiculo}</S.Text>
                  )}
                </S.Info>
                <S.Info>
                  <S.Title variant="h5">Client</S.Title>
                  {isEdit ? (
                    <Input
                      nome="idCliente"
                      placeholder="Cliente"
                      onBlur={handleBlur}
                      helpText={errors?.idCliente as string}
                      error={hasError(errors, touched, 'idCliente')}
                    />
                  ) : (
                    <S.Text variant="h5">{displacementData.idCliente}</S.Text>
                  )}
                </S.Info>
                <S.Info>
                  <S.Title variant="h5">Driver</S.Title>
                  {isEdit ? (
                    <Input
                      nome="idCondutor"
                      placeholder="Driver"
                      onBlur={handleBlur}
                      helpText={errors?.idCondutor as string}
                      error={hasError(errors, touched, 'idCondutor')}
                    />
                  ) : (
                    <S.Text variant="h5">{displacementData.idCondutor}</S.Text>
                  )}
                </S.Info>
                <S.Info>
                  <S.Title variant="h5">CheckList</S.Title>
                  {isEdit ? (
                    <Input
                      nome="checkList"
                      placeholder="CheckList"
                      onBlur={handleBlur}
                      helpText={errors?.checkList as string}
                      error={hasError(errors, touched, 'checkList')}
                    />
                  ) : (
                    <S.Text variant="h5">{displacementData.checkList}</S.Text>
                  )}
                </S.Info>
              </S.ContainerInfo>
              <S.ContainerInfo>
                <S.Info>
                  <S.Title variant="h5">Start KM</S.Title>
                  {isEdit ? (
                    <Input
                      onBlur={handleBlur}
                      nome="kmInicial"
                      helpText={errors?.kmInicial as string}
                      placeholder="Start KM"
                      error={hasError(errors, touched, 'kmInicial')}
                    />
                  ) : (
                    <S.Text variant="h5">{displacementData.kmInicial}</S.Text>
                  )}
                </S.Info>
                <S.Info>
                  <S.Title variant="h5">Final KM</S.Title>
                  {isEdit ? (
                    <Input
                      onBlur={handleBlur}
                      nome="kmFinal"
                      helpText={errors?.kmFinal as string}
                      placeholder="Final KM"
                      error={hasError(errors, touched, 'kmFinal')}
                    />
                  ) : (
                    <S.Text variant="h5">{displacementData.kmFinal}</S.Text>
                  )}
                </S.Info>
                <S.Info>
                  <S.Title variant="h5">Observation</S.Title>
                  {isEdit ? (
                    <Input
                      onBlur={handleBlur}
                      nome="observacao"
                      helpText={errors?.observacao as string}
                      placeholder="Observation"
                      error={hasError(errors, touched, 'observacao')}
                    />
                  ) : (
                    <S.Text variant="h5">{displacementData.observacao}</S.Text>
                  )}
                </S.Info>
                <S.Info>
                  <S.Title variant="h5">Final displacement</S.Title>
                  {isEdit ? (
                    <DateTimePickerComponent
                      helpText={errors?.fimDeslocamento as string}
                      error={hasError(errors, touched, 'fimDeslocamento')}
                      handleDate={handleDate}
                      placeholder={''}
                    />
                  ) : (
                    <S.Text variant="h5">
                      {displacementData.fimDeslocamento}
                    </S.Text>
                  )}
                </S.Info>
                <S.Info>
                  <S.Title variant="h5">Start displacement</S.Title>
                  {isEdit ? (
                    <DateTimePickerComponent
                      helpText={errors?.inicioDeslocamento as string}
                      error={hasError(errors, touched, 'inicioDeslocamento')}
                      handleDate={handleDate}
                      placeholder={''}
                    />
                  ) : (
                    <S.Text variant="h5">
                      {displacementData.inicioDeslocamento}
                    </S.Text>
                  )}
                </S.Info>
              </S.ContainerInfo>
              {isEdit && (
                <S.LoadingButtonComponent
                  startIcon
                  type="submit"
                  loading={isSave}
                  disabled={!isValid}
                  variant="contained"
                  loadingPosition="start"
                >
                  Save
                </S.LoadingButtonComponent>
              )}
            </S.FormComponent>
          )}
        </S.FormikComponent>
      </S.CardComponent>
      <S.ButtonBack href={'/displacements'}>
        <S.TooltipComponent title="">
          <IconButton>
            <S.ChevronLeftIconComponent />
          </IconButton>
        </S.TooltipComponent>
      </S.ButtonBack>
    </S.MainContainer>
  )
}
