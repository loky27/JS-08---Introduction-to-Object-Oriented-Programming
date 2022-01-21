var id=0;
var x
class Hola{
    allBooks = [];
    constructor(title, genre, author, read, read_date){
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = read;
        this.read_date = read_date;
        this.id=id
    }
    get leer(){
        this.title=document.getElementById('title').value
        this.read=document.getElementById('validation').value
        this.author=document.getElementById('autor').value
        this.genre=document.getElementById('genre').value
        this.id=id
        this.allBooks.push(
            JSON.stringify(
                {id:this.id,title:this.title,author:this.author,genero:this.genre,status:this.read}
                )
                )
        localStorage.setItem('Boo',this.allBooks)
        id++
        console.log (JSON.parse( localStorage.getItem('Boo')))
    }

}



let hola=new Hola
text=`<ul class="list-group list-group-horizontal">
<li class="list-group-item">An item</li>
<li class="list-group-item">A second item</li>
<li class="list-group-item">A third item</li>
</ul>`

class Book {
    constructor(title, genre, author, read, read_date){
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = read;
        this.read_date = read_date;
    }
    Print(){ return "El libro es: " + this.title + " de " + this.author + " del género " + this.genre + ". El estado de lectura es " + this.read + " y  la fecha de lectura es " + this.read_date;
    }
}
