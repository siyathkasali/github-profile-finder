class UI{
  constructor(){
    this.profile = document.getElementById('profile');
  }

  showProfile(user){
    this.profile.innerHTML = `
      <div class="card card-body">
        <div class="row">
        <div class="col-md-3">
        <img src="${user.avatar_url}" alt="${user.login}" height="200" width="200" class="img-fluid mb-2">
        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-3">View Profile</a>
        </div>
        <div class="col-md-9">
         <span class="badge badge-primary">Public Repos: ${user.public_gists}</span>
         <span class="badge badge-primary">Public gists: ${user.public_repos}</span>
         <span class="badge badge-primary">Public Followers: ${user.followers}</span>
         <span class="badge badge-primary">Public Following: ${user.following}</span>
         <br><br>
         <ul class="list-group">
         <li class="list-group-item">Company : ${user.company}</li>
         <li class="list-group-item">Website/Blog: ${user.blog}</li>
         <li class="list-group-item">Location: ${user.location}</li>
         <li class="list-group-item">Member Since: ${user.created_at}</li>
         </ul>
        </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
    `
  }

  clearProfile(){
    this.profile.innerHTML = '';
  }

  showAlert(msg,color){
    this.clearAlert();
    const errorDiv = document.createElement('div');
    errorDiv.className = color;
    errorDiv.appendChild(document.createTextNode(msg));
    const container = document.querySelector('.searchContainer');
    const search = document.querySelector('.search');
    container.insertBefore(errorDiv, search);
    setTimeout(()=>{
      errorDiv.remove();
    },3000);
  }

  clearAlert(){
    const clearAlert = document.querySelector('.alert');
    if(clearAlert){
      clearAlert.remove();
    }
  }
}
