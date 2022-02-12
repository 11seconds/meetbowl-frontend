import { useCallback, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import useCurrentUser from 'hooks/useCurrentUser';

import TimetableTemplate from 'components/templates/TimetableTemplate';
import ScreenSpinner from 'components/common/ScreenSpinner';
import HeaderContainer from 'containers/timetable/HeaderContainer';
import TimetableContainer from 'containers/timetable/TimetableContainer';
import BottomSheetContainer from 'containers/timetable/BottomSheetContainer';

const TimetablePage = () => {
  const navigate = useNavigate();
  const { timetableId } = useParams();
  const { isLoading: isCurrentUserLoading, isActive } = useCurrentUser();

  useEffect(() => {
    if (!isCurrentUserLoading && !isActive) {
      navigate(`/sign-up?redirect=/timetable/${timetableId}`);
    }
  }, [navigate, isCurrentUserLoading, isActive, timetableId]);

  const handleHeaderError = useCallback(() => {
    navigate('/');
  }, [navigate]);

  if (isCurrentUserLoading) return <ScreenSpinner />;

  return (
    <TimetableTemplate
      header={<HeaderContainer timetableId={timetableId as string} onError={handleHeaderError} />}
      timetable={<TimetableContainer timetableId={timetableId as string} />}
      bottomSheet={<BottomSheetContainer timetableId={timetableId as string} />}
    />
  );
};

export default TimetablePage;
