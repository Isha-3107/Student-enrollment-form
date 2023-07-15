let submit=document.querySelector(".submit");

submit.addEventListener('click',()=>
{
  var output=document.querySelector(".output");
  console.log(output);
  const data={
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        GitHubLink: document.getElementById("GitHubLink").value,
        Phonenumber: document.getElementById("Phonenumber").value
    };
    console.log(data);

    let newlist=document.createElement('div');
    newlist.classList.add('addData');
    newlist.innerHTML=
    `<div class="NameContainer">${data.name}</div>
    <a href="google.com">${data.email}</a><br>
    <a href="gmail.com">${data.GitHubLink}</a>
    <div class="Phonenumber">${data.Phonenumber}</div>`
    console.log(newlist);
    
  output.appendChild(newlist);
  let input=document.querySelectorAll('input');
  input.forEach(input => 
    {
      input.value = '';
      }
  );
})