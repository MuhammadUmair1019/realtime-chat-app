
// create chatUI class 
class ChatUI{
    constructor(list){
        this.list = list;
    }
    clear(){
        this.list.innerHTML = ""
    }
    render(data){

        const date = dateFns.distanceInWordsToNow(
            data.created_at.toDate(),
            {addSuffix :  true}
        )

        const html = `
        <div class="list-item">
          <li>  <span class="username">${data.username} : </span> ${data.message} </li>
          <small> ${date} </small>
        </div>
        `

        this.list.innerHTML += html;
        
    }
}