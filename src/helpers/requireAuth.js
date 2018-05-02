function requireAuth (to, from, next)
{
  let loggedIn = false

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