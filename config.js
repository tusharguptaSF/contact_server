module.exports = {
  users: {
    admin: {password: 'password', scopes: 'contacts:all contacts:read contacts:edit'.split(' ')},
    stranger: {password: 'password', scopes: 'contacts:all contacts:read'.split(' ')}
  },
  jwtSecret: '08098grrgaorugh',
  port: 3000,
  enableAuth: true
}
