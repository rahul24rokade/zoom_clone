const generateID = ( len, k) => {
    const s = (k) => {
        var text = "",
        chars = "635237" 
    for(let i=0; i<k; i++){
        text += chars.charAt(Math.floor(Math.random()* chars.length));
    }
      return text;
}
var id = s(k);
for(let n=0; n<len; n++){
    id =+ '_' + s(k)
}
return id;
}
export default{
      generateID
}