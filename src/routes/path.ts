export const PATH_AUTH = {
  login: '/auth/login',
  register: '/auth/register',
  forgot_password: '/auth/forgot-password',
  logout: '/auth/logout'
}

export const PATH_PUBLIC = {
  home: '/',
  product: {
    index: '/products',
    detail: (slug: string) => `/products/${slug}`
  },
  blog: '/blog',
  introduce: '/introduce',
  contact: '/contact'
}

export const PATH_PRIVATE = {
  profile: '/profile'
}
