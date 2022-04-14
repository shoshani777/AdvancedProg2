import oriImg from "./images/ori.jpg";
import giladImg from "./images/gilad.jpg";
import bobImg from "./images/bob.jpg";
import aliceImg from "./images/alice.jpg";
import hemiImg from "./images/hemi.png";

const chat_db = new Map([
    ["shoshani777",
        { image:oriImg , groups:
            [
                {id:1 , name:"gilad" , image:giladImg , unreadMark: 300, unread: 0, messages:
                    [
                        {text:"hello to ori from gilad"}
                    ]
                },
                {id:2 , name:"bob" , image:bobImg , unreadMark: 0, unread: 0, messages:
                    [
                        {text:"hello to ori from bob"}
                    ]
                },
                {id:3 , name:"alice" , image:aliceImg , unreadMark: 2, unread: 2, messages:
                    [
                        {text:"hello to ori from bob"}
                    ]
                },
                {id:4 , name:"hemi" , image:hemiImg , unreadMark: 10, unread: 10, messages:
                    [
                        {text:"hello to ori from bob"}
                    ]
                }
            ]
        }
    ],
    ["gilad517",
        { image:giladImg , groups:
            [
                {id:1 , name:"ori" , image:oriImg , unreadMark: 300, unread: 0, messages:
                    [
                        {text:"hello to gilad from ori"}
                    ]
                }
            ]
        }
    ]
]);

export default chat_db;