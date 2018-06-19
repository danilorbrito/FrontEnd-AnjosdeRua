import store from '../store/index.js'
import axios from 'axios'

function requireAuth (to, from, next)
{
  let jwt = store.modules.system.state.token
  if( jwt.headers ) 
    next()
  else
  {
    alert('Usuário não autenticado!')
    next('/login')
  }
}

export default requireAuth