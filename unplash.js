let photos=[];
let page=1;
let searItem=false;
const getPhotos=async()=>{
const response =await fetch(`https://api.unsplash.com/photos?page=${page}&per_page=12&client_id=PahAp0zXIKhw7TJVkW0LGSDpeZuaP2WqbPk3ZQvMmD4`);
const data= await response.json();
photos=data;
const div=document.getElementById("photos");
console.log(div);
for(let photo of photos){
    let img=document.createElement('img');
    img.setAttribute("src",photo.urls.regular);
    // img.src=photo.urls.regular;
    document.getElementById("photos").appendChild(img);
}

}
getPhotos();
// const myDiv = document.querySelector('#container');  
// window.onscroll= () => {  
//     // console.log()
//     // console.log(document.documentElement.offsetHeight+355)
//     // console.log(window.innerHeight)
// if(window.innerHeight+document.documentElement.scrollTop>document.documentElement.offsetHeight+355) {
//     page++;
//     getPhotos();
// } 
// }
const prevPage=()=>{
    
    if(page>1){
        document.getElementById("photos").innerHTML='';
        if(searItem===true){
            page=page-1;
    
            searchItem();
        }
        else{
            page=page-1
        
        
            getPhotos();
        }
        
    }
    else{
        alert("Page 1 arrived")
    }
    // console.log(page);
}
const nextPage=async()=>{
   
    
    document.getElementById("photos").innerHTML='';
    if(searItem===true){
        page=page+1;

        searchItem();
    }
    else{
        page=page+1;
        await getPhotos();
    }
 
    
    console.log(photos)

}
const searchItem=async()=>{
    if(searItem===false){
        page=1;
    }
    
    document.getElementById("photos").innerHTML="";
    searItem=true;
    const search=document.getElementById("search").value;
    const response=await fetch(`https://api.unsplash.com/search/photos?page=${page}&per_page=12&query=${search}&client_id=PahAp0zXIKhw7TJVkW0LGSDpeZuaP2WqbPk3ZQvMmD4`)
    console.log(search);
    const data=await response.json();
    photos=data.results;
    console.log(photos);
const div=document.getElementById("photos");
console.log(div);
for(let photo of photos){
    let img=document.createElement('img');
    img.setAttribute("src",photo.urls.regular);
    // img.src=photo.urls.regular;
    document.getElementById("photos").appendChild(img);
}
}
const home=async()=>{
    page=1;
    if(searItem===true){
        await searchItem();
    }
    else{
        console.log("false")
        document.getElementById("photos").innerHTML="";
        await getPhotos();
    }
}
const clickPhoto=(event)=>{
    console.log(event.target.src);
    document.getElementById("photos").innerHTML="";
    const img=document.createElement("img");
    img.setAttribute("src",event.target.src);
    img.setAttribute("height","100vh");
    img.setAttribute("width","100vw");
    document.getElementById("photos").appendChild(img);
}