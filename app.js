const github = new Github;
const ui = new UI;


const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e)=>{
  const userText = e.target.value;
  if(userText !== ''){
    github.getUser(userText)
    .then(res=> {
      if(res.profile.message === 'Not Found'){
        // Show Alert
        ui.showAlert('User Not Found', 'alert alert-danger');
      }else{
         ui.showProfile(res.profile);
         ui.showRepos(res.repos);
      }
    }
    )
  }else{
    // clear profile
    ui.clearProfile();
  }
  
})