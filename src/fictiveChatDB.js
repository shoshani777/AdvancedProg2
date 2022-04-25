import oriImg from "./images/ori.jpg";
import giladImg from "./images/gilad.jpg";
import bobImg from "./images/bob.jpg";
import aliceImg from "./images/alice.jpg";
import hemiImg from "./images/hemi.png";
import defualtImg from './images/defualtChat.jpg';

const chat_db = new Map([
    ["shoshani777",
        { image:oriImg , groups:
            [
                {id:1 , isClicked: false, name:"gilad" , image:giladImg ,isgroup:false, unreadMark: 10, unread: 10, messages:
                    [
                        {me: true, body: 'hello to gilad from ori', type: 'text',author:'me'},
                        {me: false, body: 'thank you ori thank you ori thank you ori thank you ori', type: 'text',author:'gilad'},
                        {me: true, body: 'hello to gilad from ori', type: 'text',author:'me'},
                        {me: false, body: 'thank you ori thank you ori thank you ori thank you ori', type: 'text',author:'gilad'},
                        {me: true, body: 'hello to gilad from ori', type: 'text',author:'me'},
                        {me: false, body: 'thank you ori thank you ori thank you ori thank you ori', type: 'text',author:'gilad'},
                        {me: true, body: 'hello to gilad from ori', type: 'text',author:'me'},
                        {me: false, body: 'thank you ori thank you ori thank you ori thank you ori', type: 'text',author:'gilad'},
                        {me: true, body: 'hello to gilad from ori', type: 'text',author:'me'},
                        {me: false, body: 'thank you ori thank you ori thank you ori thank you ori', type: 'text',author:'gilad'},
                        {me: true, body: 'hello to gilad from ori', type: 'text',author:'me'},
                        {me: false, body: 'thank you ori thank you ori thank you ori thank you ori', type: 'text',author:'gilad'},
                        {me: true, body: 'hello to gilad from ori', type: 'text',author:'me'},
                        {me: false, body: 'thank you ori thank you ori thank you ori thank you ori', type: 'text',author:'gilad'},
                        {me: true, body: 'hello to gilad from ori', type: 'text',author:'me'},
                        {me: false, body: 'thank you ori thank you ori thank you ori thank you ori', type: 'text',author:'gilad'},
                        {me: true, body: 'hello to gilad from ori', type: 'text',author:'me'},
                        {me: false, body: 'thank you ori thank you ori thank you ori thank you ori', type: 'text',author:'gilad'},
                        {me: true, body: 'hello to gilad from ori', type: 'text',author:'me'},
                        {me: false, body: 'thank you ori thank you ori thank you ori thank you ori', type: 'text',author:'gilad'},
                        {me: true, body: 'hello to gilad from ori', type: 'text',author:'me'},
                        {me: false, body: 'thank you ori thank you ori thank you ori thank you ori', type: 'text',author:'gilad'},
                        {me: true, body: 'hello to gilad from ori', type: 'text',author:'me'},
                        {me: false, body: 'thank you ori thank you ori thank you ori thank you ori', type: 'text',author:'gilad'},
                        {me: true, body: 'hello to gilad from ori', type: 'text',author:'me'},
                        {me: false, body: 'thank you ori thank you ori thank you ori thank you ori', type: 'text',author:'gilad'},
                        {me: true, body: 'hello to gilad from ori', type: 'text',author:'me'},
                        {me: false, body: 'thank you ori thank you ori thank you ori thank you ori', type: 'text',author:'gilad'},
                        {me: true, body: 'hello to gilad from ori', type: 'text',author:'me'},
                        {me: false, body: 'thank you ori thank you ori thank you ori thank you ori', type: 'text',author:'gilad'},
                        {me: true, body: 'hello to gilad from ori', type: 'text',author:'me'},
                        {me: false, body: 'thank you ori thank you ori thank you ori thank you ori', type: 'text',author:'gilad'},
                        {me: true, body: 'hello to gilad from ori', type: 'text',author:'me'},
                        {me: false, body: 'thank you ori thank you ori thank you ori thank you ori', type: 'text',author:'gilad'},
                        {me: true, body: 'hello to gilad from ori', type: 'text',author:'me'},
                        {me: false, body: 'thank you ori thank you ori thank you ori thank you ori', type: 'text',author:'gilad'},
                        {me: true, body: 'hello to gilad from ori', type: 'text',author:'me'},
                        {me: false, body: 'thank you ori thank you ori thank you ori thank you ori', type: 'text',author:'gilad'},
                        {me: true, body: 'hello to gilad from ori', type: 'text',author:'me'},
                        {me: false, body: 'thank you ori thank you ori thank you ori thank you ori', type: 'text',author:'gilad'},
                        {me: true, body: 'hello to gilad from ori', type: 'text',author:'me'},
                        {me: false, body: 'thank you ori thank you ori thank you ori thank you ori', type: 'text',author:'gilad'},
                        {me: true, body: 'hello to gilad from ori', type: 'text',author:'me'},
                        {me: false, body: 'thank you ori thank you ori thank you ori thank you ori', type: 'text',author:'gilad'},
                        {me: true, body: 'hello to gilad from ori', type: 'text',author:'me'},
                        {me: false, body: 'thank you ori thank you ori thank you ori thank you ori', type: 'text',author:'gilad'},
                        {me: true, body: 'hello to gilad from ori', type: 'text',author:'me'},
                        {me: false, body: 'thank you ori thank you ori thank you ori thank you ori', type: 'text',author:'gilad'},
                        {me: true, body: 'hello to gilad from ori', type: 'text',author:'me'},
                        {me: false, body: 'thank you ori thank you ori thank you ori thank you ori', type: 'text',author:'gilad'},
                        {me: true, body: 'hello to gilad from ori', type: 'text',author:'me'},
                        {me: false, body: 'thank you ori thank you ori thank you ori thank you ori', type: 'text',author:'gilad'},
                        {me: true, body: 'hello to gilad from ori', type: 'text',author:'me'},
                        {me: false, body: 'thank you ori thank you ori thank you ori thank you ori', type: 'text',author:'gilad'},
                        {me: true, body: 'hello to gilad from ori', type: 'text',author:'me'},
                        {me: false, body: 'thank you ori thank you ori thank you ori thank you ori', type: 'text',author:'gilad'},
                        {me: true, body: 'hello to gilad from ori', type: 'text',author:'me'},
                        {me: false, body: 'thank you ori thank you ori thank you ori thank you ori', type: 'text',author:'gilad'},
                        {me: true, body: 'hello to gilad from ori', type: 'text',author:'me'},
                        {me: false, body: 'thank you ori thank you ori thank you ori thank you ori', type: 'text',author:'gilad'},
                        {me: true, body: 'hello to gilad from ori', type: 'text',author:'me'},
                        {me: false, body: 'thank you ori thank you ori thank you ori thank you ori', type: 'text',author:'gilad'},
                        {me: true, body: 'hello to gilad from ori', type: 'text',author:'me'},
                        {me: false, body: 'thank you ori thank you ori thank you ori thank you ori', type: 'text',author:'gilad'},
                        {me: true, body: 'hello to gilad from ori', type: 'text',author:'me'},
                        {me: false, body: 'thank you ori thank you ori thank you ori thank you ori', type: 'text',author:'gilad'},
                        {me: true, body: 'hello to gilad from ori', type: 'text',author:'me'},
                        {me: false, body: 'thank you ori thank you ori thank you ori thank you ori', type: 'text',author:'gilad'},
                        {me: true, body: 'hello to gilad from ori', type: 'text',author:'me'},
                        {me: false, body: 'thank you ori thank you ori thank you ori thank you ori', type: 'text',author:'gilad'},
                        {me: true, body: 'hello to gilad from ori', type: 'text',author:'me'},
                        {me: false, body: 'thank you ori thank you ori thank you ori thank you ori', type: 'text',author:'gilad'},
                        {me: true, body: 'hello to gilad from ori', type: 'text',author:'me'},
                        {me: false, body: 'thank you ori thank you ori thank you ori thank you ori', type: 'text',author:'gilad'},
                        {me: true, body: 'hello to gilad from ori', type: 'text',author:'me'},
                    ]
                },
                {id:2 , isClicked: false, name:"bob" , image:bobImg ,isgroup:false, unreadMark: 0, unread: 0, messages:
                    [
                        {me: true, body: 'hello to bob from ori', type: 'text',author:'me'},
                        {me: false, body: 'thank you ori', type: 'text',author:'bob'}
                    ]
                },
                {id:3 , isClicked: false, name:"alice" , image:aliceImg ,isgroup:false, unreadMark: 2, unread: 2, messages:
                    [
                        {me: true, body: 'hello to alice from ori', type: 'text',author:'me'},
                        {me: false, body: 'thank you ori', type: 'text',author:'alice'}
                    ]
                },
                {id:4 , isClicked: false, name:"hemi" , image:hemiImg ,isgroup:false, unreadMark: 10, unread: 10, messages:
                    [
                        {me: true, body: 'hello to hemi from ori', type: 'text',author:'me'},
                        {me: false, body: 'thank you ori', type: 'text',author:'hemi'}
                    ]
                },
                {id:5 , isClicked: false, name:"group" , image:defualtImg ,isgroup:true, unreadMark: 3, unread: 0, messages:
                    [
                        {me: true, body: 'hello to everyone from ori', type: 'text',author:'me'},
                        {me: false, body: 'thank you ori from gilad', type: 'text',author:'gilad'},
                        {me: false, body: 'thank you ori from alice', type: 'text',author:'alice'},
                        {me: false, body: 'thank you ori from bob', type: 'text',author:'bob'},
                        {me: true, body: 'good talk guys!', type: 'text',author:'me'}
                    ]
                },
                {id:6 , isClicked: false, name:"bob" , image:bobImg ,isgroup:false, unreadMark: 0, unread: 0, messages:
                    [
                        {me: true, body: 'hello to bob from ori', type: 'text',author:'me'},
                        {me: false, body: 'thank you ori', type: 'text',author:'bob'}
                    ]
                },
                {id:7 , isClicked: false, name:"alice" , image:aliceImg ,isgroup:false, unreadMark: 2, unread: 2, messages:
                    [
                        {me: true, body: 'hello to alice from ori', type: 'text',author:'me'},
                        {me: false, body: 'thank you ori', type: 'text',author:'alice'}
                    ]
                },
                {id:8 , isClicked: false, name:"hemi" , image:hemiImg ,isgroup:false, unreadMark: 10, unread: 10, messages:
                    [
                        {me: true, body: 'hello to hemi from ori', type: 'text',author:'me'},
                        {me: false, body: 'thank you ori', type: 'text',author:'hemi'}
                    ]
                },
                {id:9 , isClicked: false, name:"gilad" , image:giladImg ,isgroup:false, unreadMark: 300, unread: 0, messages:
                    [
                        {me: true, body: 'hello to gilad from ori', type: 'text',author:'me'},
                        {me: false, body: 'thank you ori', type: 'text',author:'gilad'}
                    ]
                },
                {id:10 , isClicked: false, name:"bob" , image:bobImg ,isgroup:false, unreadMark: 0, unread: 0, messages:
                    [
                        {me: true, body: 'hello to bob from ori', type: 'text',author:'me'},
                        {me: false, body: 'thank you ori', type: 'text',author:'bob'}
                    ]
                },
                {id:11 , isClicked: false, name:"alice" , image:aliceImg ,isgroup:false, unreadMark: 2, unread: 2, messages:
                    [
                        {me: true, body: 'hello to alice from ori', type: 'text',author:'me'},
                        {me: false, body: 'thank you ori', type: 'text',author:'alice'}
                    ]
                },
                {id:12 , isClicked: false, name:"hemi" , image:hemiImg ,isgroup:false, unreadMark: 10, unread: 10, messages:
                    [
                        {me: true, body: 'hello to hemi from ori', type: 'text',author:'me'},
                        {me: false, body: 'thank you ori', type: 'text',author:'hemi'}
                    ]
                }
            ]
        }
    ],
    ["gilad517",
        { image:giladImg , groups:
            [
                {id:1 , isClicked: false, name:"ori" , image:oriImg ,isgroup:false, unreadMark: 300, unread: 0, messages:
                    [
                        {me: true, body: 'hello to ori from gilad', type: 'text',author:'me'},
                        {me: false, body: 'thank you gilad', type: 'text',author:'ori'}
                    ]
                }
            ]
        }
    ]
]);

export default chat_db;