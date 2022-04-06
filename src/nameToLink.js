const nameToLink = new Map([
    ['',{name:'logIn',linkTo:'register',strLinkTo:"Haven't registered?",bg:'./identificationBG.css'}],
    ['logIn',{name:'logIn',linkTo:'register',strLinkTo:"Haven't registered?",bg:'./identificationBG.css'}],
    ['register',{name:'register',linkTo:'logIn',strLinkTo:"I already have an account",bg:'./identificationBG.css'}],
    ['webPage',{name:'webPage',linkTo:'logIn',strLinkTo:"Exit",bg:'./webPageBG.css'}]
]);

export default nameToLink;