export const getAccessTokenFromLS = () => {
  if (typeof localStorage !== 'undefined') {
    const accessToken = localStorage.getItem('accessToken');
    return accessToken;
  } else {
    console.error('Local Storage is not available.');
    return null;
  }
};

export const saveAccessTokenToLS = (accessToken: string) => {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('accessToken', accessToken);
    return true;
  } else {
    console.error('Local Storage is not available.');
    return false;
  }
};

export const clearAccessTokenFromLS = () => {
  if (typeof localStorage !== 'undefined') {
    localStorage.removeItem('accessToken');
    return true;
  } else {
    console.error('Local Storage is not available.');
    return false;
  }
};
