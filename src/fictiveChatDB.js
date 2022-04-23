import oriImg from "./images/ori.jpg";
import giladImg from "./images/gilad.jpg";
import bobImg from "./images/bob.jpg";
import aliceImg from "./images/alice.jpg";
import hemiImg from "./images/hemi.png";

const chat_db = new Map([
    ["shoshani777",
        { image:oriImg , groups:
            [
                {id:1 , isClicked: false, name:"gilad" , image:giladImg , unreadMark: 300, unread: 0, messages:
                    [
                        {me: true, body: 'hello to gilad from ori', type: 'text'},
                        {me: false, body: 'thank you ori', type: 'text'}
                    ]
                },
                {id:2 , isClicked: false, name:"bob" , image:bobImg , unreadMark: 0, unread: 0, messages:
                    [
                        {me: true, body: 'hello to bob from ori', type: 'text', author: 'me'},
                        {me: false, body: 'thank you ori', type: 'text', author: 'bob'}
                    ]
                },
                {id:3 , isClicked: false, name:"alice" , image:aliceImg , unreadMark: 2, unread: 2, messages:
                    [
                        {me: true, body: 'hello to alice from ori', type: 'text'},
                        {me: false, body: 'thank you ori', type: 'text'}
                    ]
                },
                {id:4 , isClicked: false, name:"hemi" , image:hemiImg , unreadMark: 10, unread: 10, messages:
                    [
                        {me: true, body: 'hello to hemi from ori', type: 'text'},
                        {me: false, body: 'thank you ori', type: 'text'}
                    ]
                }
            ]
        }
    ],
    ["gilad517",
        { image:giladImg , groups:
            [
                {id:1 , isClicked: false, name:"ori" , image:oriImg , unreadMark: 300, unread: 0, messages:
                    [
                        {text:"hello to gilad from ori"}
                    ]
                }
            ]
        }
    ]
]);

export default chat_db;