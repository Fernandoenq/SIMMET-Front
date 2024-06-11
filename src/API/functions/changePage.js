function decodeToken(token) {
    const [, payloadBase64] = token.split('.');
    const payload = JSON.parse(atob(payloadBase64));
    return payload;
}

function verifyToken(token) {
    try {
        const payload = decodeToken(token);
        const expiracao = new Date(payload.exp * 1000);
        const agora = new Date();
        return expiracao > agora;
    } catch (error) {
        return false;
    }
}


function ChangePage(path) {
    console.log(path)
    const isUserAuthenticated = window.sessionStorage.getItem('token');
    console.log(isUserAuthenticated)

    const isValidToken = verifyToken(isUserAuthenticated);

    if (isValidToken) {
      console.log('Token válido e dentro da data de expiração');
      
    } else {
      console.log('Token expirado ou inválido');
      window.sessionStorage.removeItem('token');
    }
    
    window.location.assign(path);
   

    
  }
  
  export default ChangePage;