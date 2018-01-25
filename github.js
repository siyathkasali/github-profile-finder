class Github{
  constructor(){
    this.client_id = '06a210b5863ae2a5594e';
    this.client_secret = 'f1449d3422b953d8a4d5ea34fd16341f2fbf20c0';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

 async getUser(user){
   const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
   const profile = await profileResponse.json();
   const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
   const repos = await reposResponse.json();
   return{
     profile,
     repos
   }
 }
}