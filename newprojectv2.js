//insert form validator for each section 


class Show {
  constructor(title, platform, reason, seasons, friends, comments) {
      this.title = title;
    this.platform = platform;
    this.reason = reason;
    this.seasons = seasons;
    this.friends = friends;
    this.comments = comments;
  }
}

class UI {
   addshowtolist(show) {
     const list = document.getElementById('showtable');

      const newRow = document.createElement('tr');
      newRow.innerHTML = `
        
        <td>${show.title}</td>
        <td>${show.platform}</td>
        <td>${show.reason}</td>
        <td>${show.seasons}</td>
        <td>${show.friends}</td>
        <td>${show.comments}</td>
        <td><a href="#" class="delete">x</a></td>
      `;
      list.appendChild(newRow);
   }

   showMessage(message, className) {
      // create div
      const div = document.createElement('div');
      //add Classes
       div.className = `alert ${className}`;
       //add text
     div.appendChild(document.createTextNode(message));
     //container of project
      const container = document.querySelector('.container');
      //getform
      const form = document.querySelector('#addshows');
      //insert alert
      container.insertBefore(div, form);

      setTimeout(() => {
        document.querySelector('.alert').remove();
      } , 3000);
 }

   deleteShow(target) {
      if(target.className === 'delete') {
        target.parentElement.parentElement.remove();
      }


   }

   clearData() {
      document.getElementById('showname').value = '';
        document.getElementById('platform').value = '';
        document.getElementById('whyagain').value = '';
        document.getElementById('seasons').value = '';
        document.getElementById('whoelse').value = '';
        document.getElementById('comments').value = '';
   }

   erroricon() {
       const span = document.createElement('span');
       
         span.innerHTML = `
          <i  class="fas fa-exclamation-triangle"></i>
        `;   
        //get parent
        const form = document.querySelector('form');
        const titlename = document.querySelector('#errorlabel');
        //insert Alert
        form.insertBefore(span, titlename);
        //disapear after 3 seconds
        setTimeout(() => {
            document.querySelector('.fa-exclamation-triangle').remove()
        }, 3000);
   }
}


 //addshow event listener
 document.getElementById('addshows').addEventListener('submit', (e) => {
    // get form values
    const title = document.getElementById('showname').value,
          platform = document.getElementById('platform').value,
          reason = document.getElementById('whyagain').value,
          seasons = document.getElementById('seasons').value,
          friends = document.getElementById('whoelse').value,
          comments = document.getElementById('comments').value;

     //new Show object
     const show = new Show(title, platform, reason, seasons, friends, comments);
    
     //new ui object
     const ui = new UI();
    
     //validate
     if(title === '') {
       //error alert
       ui.erroricon(); 
     } 
     else {
        ui.addshowtolist(show);

        ui.showMessage('Added a Favorite Show', 'success')
        ui.clearData();
     }

     //clear fields
     ui.clearData();


    e.preventDefault();
 })

 //delete event listener

 document.getElementById('showtable').addEventListener('click', (e) => {
    const ui = new UI();

    ui.deleteShow(e.target);
    e.preventDefault();

    ui.showMessage('Removed Show from list', 'error');
 });