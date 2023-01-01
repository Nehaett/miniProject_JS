////////script des courses/////////

var content = document.getElementById('contenu');
function creationCours(path, title, price) {
    let div = document.createElement('div'); // <div></div>
    div.setAttribute('class', 'card col-3 me-2 mb-2'); //<div class="card col-3 me-2 mb-2 "></div>
    let img = document.createElement('img'),
        p = document.createElement('p'),
        span = document.createElement('span');

    img.src = path;
    img.setAttribute('class', 'card-img');
    p.appendChild(document.createTextNode(title));
    p.setAttribute('class', 'card-title');
    span.appendChild(document.createTextNode(price));
    span.setAttribute('class', 'card-text');

    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(span);

    content.append(div);
}

courses.forEach(function(element) {
    creationCours(element.image, element.title, element.price)
})


/*var list = document.querySelector('#categories');

function creationCategory() {
    var tab = courses.map(function(v) { return v.category.toUpperCase() });
    var categories = ['all', ...new Set(tab)];

    categories.forEach((v) => {
        let li = document.createElement('button'); // <button></button>
        li.setAttribute("class","btn btn-light btn-lg");
        li.appendChild(document.createTextNode(v)); // <button>v</button>
        list.append(li);
        let br=document.createElement('br');
        list.append(br);
       
    })
    
}
creationCategory();
*/



/*search.addEventListener("keyup",function search()
{
    var input,filtre,a,txtValue;
     input=document.getElementById("search");
     filtre=input.value.toUpperCase();
     for(var i=0;courses.length;i++)
     {
       
        if (courses[i].title.indexOf(filtre)!=0)
        {
            alert(courses[i].title);
           // creationCours(courses[i].image,courses[i].title,courses[i].price);
        }
     }

})*/

//var search=document.getElementById("search");
/*function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
} */
//button filter all---------------------------------------------------
all.addEventListener("click",function()
 { 
  content.textContent="";
  console.log(courses.length);
  courses.forEach(function(element) {
  creationCours(element.image, element.title, element.price)})
});


//button filter  java---------------------------------------------------
javaBtn.addEventListener("click",function()
{
var temp=new Array;
for(var i=0;i<courses.length;i++)
{
  if (courses[i].category.includes("JS"))
  {
    temp[i]=courses[i];
    console.log(temp[i]);
    content.textContent="";
  }
}
temp.forEach(function(element){ creationCours(element.image, element.title, element.price) })
})

//button filter html-----------------------------------------------------
htmlBtn.addEventListener("click",function()
{
  var h=new Array;
for(var i=0;i<courses.length;i++)
{
  if (courses[i].category.includes("HTML") )
  {
    h[i]=courses[i];
    console.log(h[i]);
    content.textContent="";
  }
  
}
h.forEach(function(element){ creationCours(element.image, element.title, element.price) })

})
//-----------button filter php-------------

phpBtn.addEventListener("click",function()
{
  var ph=new Array;
 for(var i=0;i<courses.length;i++)
{
  
  if (courses[i].category.includes("php") )
  {
    ph[i]=courses[i];
    console.log(ph[i]);
    content.textContent="";
  }
  
}
ph.forEach(function(element){ creationCours(element.image, element.title, element.price) })

})
//---------button filter CSS-------------

cssBtn.addEventListener("click",function()
{
  var cs=new Array;
 for(var i=0;i<courses.length;i++)
{
  
  if (courses[i].category.includes("CSS") )
  {
    cs[i]=courses[i];
    console.log(cs[i]);
    content.textContent="";
  }
  
}
cs.forEach(function(element){ creationCours(element.image, element.title, element.price) })
})

//------------filter  price --------------------------------------

function pricefilter()
{
  var prix=document.getElementById("prixInput").value;
console.log(prix);
document.getElementById('res').innerHTML=prix +"$";
var px=new Array;
for (var i=0  ;i<courses.length;i++)
{
  if (courses[i].price<=prix  )
  {
   px[i]=courses[i];
    console.log(px[i]);
    content.textContent="";
  }
}
px.forEach(function(element){ creationCours(element.image, element.title, element.price) })

}
searchbtn.addEventListener("click",function()
{
  var t=new Array;
  var  wordkey=document.getElementById('search').value;//input id="search"
 for(var i=0;i<courses.length;i++)
{
  
  if (courses[i].title.includes(wordkey)||courses[i].title.includes(wordkey.charAt(0).toUpperCase())||courses[i].category.includes(wordkey.toUpperCase()) )
  {
    t[i]=courses[i];
    console.log(t[i]);
    content.textContent="";
  }
  
}
t.forEach(function(element){ creationCours(element.image, element.title, element.price) })

})

