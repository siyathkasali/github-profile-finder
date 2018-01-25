const ui = new UI;

const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e)=>{
  const userText = e.target.value;
  if(userText !== ''){
    const user = new Github();
    user.getUser(userText)
    .then(res=> {
      if(res.profile.message === 'Not Found'){
        // Show Alert
        ui.showAlert('User Not Found', 'alert alert-danger');
      }else{
         ui.showProfile(res.profile);
      }
    }
    )
  }else{
    // clear profile
    ui.clearProfile();
  }
  
})