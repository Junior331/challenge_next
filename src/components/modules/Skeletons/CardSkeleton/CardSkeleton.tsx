import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'
import * as S from './CardSkeletonStyled'

const CardSkeleton = () => {
  return (
    <S.Container>
      <Stack spacing={1}>
        <S.ContainerSkeleton>
          <Skeleton variant="circular" width={60} height={60} />
          <Skeleton variant="text" width={100} height={45} />
          <S.ContainerText>
            <Skeleton variant="text" width={'70%'} height={32} />
            <Skeleton variant="text" width={'55%'} height={32} />
            <Skeleton variant="text" width={'45%'} height={32} />
            <Skeleton variant="text" width={'65%'} height={32} />
            <Skeleton variant="text" width={'75%'} height={32} />
          </S.ContainerText>
        </S.ContainerSkeleton>
      </Stack>
    </S.Container>
  )
}
export default CardSkeleton
