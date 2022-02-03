import { useState, useEffect } from 'react';
import { UserDto } from 'apis/dtos';
import * as apis from 'apis';

const useUserActive = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<UserDto.Response>();

  useEffect(() => {
    apis.user.getCurrentUser().then((data) => {
      setUser(data);
      setIsLoading(false);
    });
  }, []);

  return {
    id: user?.id,
    email: user?.email,
    nickname: user?.nickname,
    isActive: user?.isActive,
    isLoading,
  };
};

export default useUserActive;
