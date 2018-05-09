function requireAuth (to, from, next)
{
  let loggedIn = true

  if (loggedIn)
  {
    next()
  } 
  else
  {
    alert('não está autenticado')
    next('/')
  }
}

export default requireAuth