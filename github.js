class Github{
  constructor(){
    this.client_id = '06a210b5863ae2a5594e';
    this.client_secret = 'f1449d3422b953d8a4d5ea34fd16341f2fbf20c0';
  }

 async getUser(user){
   const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
   const profile = await profileResponse.json();

   return{
     profile
   }
 }
}