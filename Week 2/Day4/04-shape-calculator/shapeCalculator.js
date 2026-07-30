const calculateArea=(shape,dimension)=>{
    if(shape==="Circle"){
        return Math.PI*dimension*dimension;
    }
    else if(shape==="Rectangle"){
        let{width,height}=dimension;
        return width*height;
    }
    else{
        return "UnknownShape";
    }
}
export default calculateArea;