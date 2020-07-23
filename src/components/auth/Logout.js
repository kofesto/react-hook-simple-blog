const Logout =() => {
    const current_user = window.sessionStorage.getItem('current_user');
    if(!current_user) return ;
    window.sessionStorage.removeItem('current_user');
    window.location.reload();
}

export default Logout;