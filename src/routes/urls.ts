export const AUTH_URL = {
  login: '/auth/login',
  register: '/auth/register',
  forgot_password: '/auth/forgot-password',
  logout: '/auth/logout'
};

export const PUBLIC_URL = {
  home: '/',
  product: {
    index: '/products',
    detail: (slug: string) => `/products/${slug}`
  },
  blog: '/blog',
  introduce: '/introduce',
  contact: '/contact'
};

export const PRIVATE_URL = {
  profile: '/profile'
};
