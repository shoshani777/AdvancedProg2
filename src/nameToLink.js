const nameToLink = new Map([
    ['',{name:'logIn',linkTo:'register',strLinkTo:"Haven't registered?"}],
    ['logIn',{name:'logIn',linkTo:'register',strLinkTo:"Haven't registered?"}],
    ['register',{name:'register',linkTo:'logIn',strLinkTo:"I already have an account"}],
    ['webPage',{name:'webPage',linkTo:'logIn',strLinkTo:"Exit"}]
]);

export default nameToLink;