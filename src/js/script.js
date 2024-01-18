import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js";
import { getFirestore, collection ,getDocs, addDoc, serverTimestamp, doc, deleteDoc /*setDoc*/, onSnapshot, updateDoc } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-firestore.js";
import { countDown } from "./countdown.js";
const firebaseConfig = {
  apiKey: "AIzaSyAbDNHc72qZ4mSOZYOP5Yfe56qF8RAzNtU",
  authDomain: "testing-firebase-ed8b9.firebaseapp.com",
  projectId: "testing-firebase-ed8b9",
  storageBucket: "testing-firebase-ed8b9.appspot.com",
  messagingSenderId: "204071893005",
  appId: "1:204071893005:web:ee3ec992f5dc603cb4fd44",
  measurementId: "G-K4B4KCL6HZ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const guests = []

getDocs(collection(db, 'games'))
  .then(querySnapshot => {
    const authGuest = []
    const otherNamesGuest = []
    const inp = document.getElementById('meuInput').value 
    querySnapshot.docs.forEach(doc => {
      const nameInput = doc.data().name;
      const others = doc.data().otherNames;
      authGuest.push(nameInput)
      otherNamesGuest.push(others)
    })

    for(let i = 0; i < authGuest.length; i++){
        if(inp.includes(authGuest[i])){
            const index = authGuest.indexOf(authGuest[i])
            guests.push(otherNamesGuest[index])
        }
    }
  })
  .catch(console.log);

setTimeout(
    document.addEventListener('DOMContentLoaded', function() {
    const urlPart = window.location.pathname.split('/').pop()
    document.getElementById('meuInput').value = urlPart;

}), 5000)

let count = 0
function x(){
  count++;
  document.querySelector('.carde').style.backgroundPosition=count+"px";
}
 

const receiveList = document.querySelector('.receiveList')

  function renderizarLista() {
    const value = document.getElementById('meuInput').value 
    const enterPass = window.location.pathname.split('/').pop() + '358902'
    const array = guests
    console.log("guests", array)
    if(value != enterPass){
        alert('Senha Inválida')
    } else {
        if (Array.isArray(array) && array.length > 0) {
            const lista = document.createElement('ul');
            lista.setAttribute('class', 'list-group')
            array[0].unshift(value.split(".")[0])
            let count = 0
            array[0].forEach(item => {
              count++
              const listItem = document.createElement('li');
              listItem.setAttribute('class','list-group-item')
              listItem.textContent = `${count} - ${item}`;
              lista.appendChild(listItem);
            });
      
            document.body.appendChild(lista);
   
            document.querySelector('.receiveList').style.display = 'none';
            document.getElementById('meuInput').style.display = 'none';
            document.querySelector('.pAdm').style.display = 'none'
          } else {
            alert('O array não é válido.');
          }
    }
  }
  receiveList.addEventListener('click', renderizarLista)
countDown()
setInterval(x, 15);



