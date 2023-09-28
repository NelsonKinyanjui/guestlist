const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];
 
for(i = 0; i >= people; i++){
    const admitted = document.querySelector('.admitted');

const refused = document.querySelector('.refused');
refused.textContent = 'Refuse: ';
admitted.textContent = 'Admit: ';
  

    if(person === 'Phil' || person === 'Lola'){
        refused.textContent += `${person}, ` ;
    }
        
else {
    
 admitted.textContent += `${person}, `;
}
}



