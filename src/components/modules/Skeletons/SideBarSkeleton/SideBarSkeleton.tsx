import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import * as S from './SideBarSkeletonStyled';

const sideBarSkeleton = () => {
  return (
    <S.Container>
      <Stack spacing={1}>
        <Skeleton variant="rectangular" width={50} height={50} />
        <Skeleton variant="rectangular" width={50} height={50} />
        <Skeleton variant="rectangular" width={50} height={50} />
        <Skeleton variant="rectangular" width={50} height={50} />
        <Skeleton variant="rectangular" width={50} height={50} />
        <Skeleton variant="rectangular" width={50} height={50} />
      </Stack>
    </S.Container>
  );
};
export default sideBarSkeleton;
