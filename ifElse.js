const password ='1234';
const systemPassword='1234';
if(password==systemPassword){
    console.log('password is correct');
}
else{
    console.log('password is not correct');
}
const username='Samuel';//bernard or wodoame
if(username.toLowerCase()=='bernard'||username.toLowerCase()=='wodoame'){
    console.log('access granted');
}
else{
    console.log('access denied');
}
const acceptedUsernames=['akyen','samuel','klenam','ernest'];
if(acceptedUsernames.includes(username.toLowerCase())){
    console.log('access granted');
}
else{
    console.log('access denied');
}
const n=1;
if(n%2==0){
    console.log('it is divisible by 2');
}
else if(n%5==0){
    console.log('it is divisible by 5');
}
else{
    console.log('not divisible by 2 or 5');
}