let Baseurl='';
// console.log(process.env.NODE_ENV);
if(process.env.NODE_ENV==='production'){
  Baseurl='';
}else{
  Baseurl='./api/';
}

const Url={
  // request c# webapi
  GET_TEST: Baseurl + 'Test/Getresponsetest',
  POST_TEST: Baseurl + 'Test/Postresponsetest',

  // request python django
  POST_TESTMODEL_SAVECONTACT: Baseurl + 'testmodel/contact/save'
}

export default Url;