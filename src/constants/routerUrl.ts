export const AUTH_URL = {
  login: '/login',
  register: '/register',
  forgot_password: '/forgot-password',
  logout: '/logout'
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
