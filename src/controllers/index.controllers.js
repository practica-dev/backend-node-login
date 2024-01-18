const login = (email, password) => {
  if (email == 'manuelflorezw@gmail.com' && password == '123456') {
    console.log('Se crea un token y se devuelve');
    return 'Token 1';
  }
  throw new Error('Credenciales no coinciden');
};

const logout = (token) => {
  console.log(`se innabilita el token: ${token}`);
  return { name: 'logout', status: 'success' };
};

export {
  login,
  logout
}