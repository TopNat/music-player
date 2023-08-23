
const addTokenInStorage = (access, refresh, id, username) => {

    localStorage.setItem('refresh', refresh);
    localStorage.setItem('access', access);
    localStorage.setItem('id', id);
    localStorage.setItem('username', username);

   // console.log(refresh);
   /* setTimeout(function() {
        localStorage.removeItem('access');
      }, 200000);*/
}

export const AccessCheck = () => {    
        if (localStorage.getItem('access')) return true;
        return false;
}

export const getToken = () => {

    return localStorage.getItem('access');
}

export default addTokenInStorage;