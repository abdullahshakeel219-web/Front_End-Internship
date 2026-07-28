const addBook=(Book,{title,author,pages,available=true})=>{
    let newBook=[...Book,{title,author,pages,available}];
    return newBook;
}
const getBookInfo=(Book)=>{
    const{title,author}=Book;
    console.log(`${title} by ${author}`);
}
const getAvailableBooks=(Books)=>{
    for(let i=0;i<Books.length;i++){
        const{title,available}=Books[i];
        if(available===true){
            console.log(title);
        }
    }
}
const logMultipleAuthors=(...authors)=>{
    console.log(authors);
}
let Book=[{title:'Odyssey',author:'Christopher Nolan',pages:200,available:false}];
Book=addBook(Book,{title:'Titanic',author:'James Cameron',pages:500,available:true});
Book=addBook(Book,{title:'HarryPotter',author:'J.K Roeling',pages:300});
console.log(Book);
getBookInfo(Book[0]);
getAvailableBooks(Book);
logMultipleAuthors('Ridley Scott','Mil Gibson','Sylvester Stallone');