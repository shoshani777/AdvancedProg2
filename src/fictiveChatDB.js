import oriImg from "./images/ori.jpg";
import giladImg from "./images/gilad.jpg";
import bobImg from "./images/bob.jpg";
import aliceImg from "./images/alice.jpg";
import hemiImg from "./images/hemi.png";
import rickRoll from './images/rickRoll.mp3';
import longCoolImg from "./images/LongCoolImage"; 
import long100Img from "./images/Long100Image";
import bellCurveImg from "./images/bellCurve.png";
import booksImg from "./images/books.jpg";


const chat_db = new Map([
    ["shoshani777",
        { image:oriImg , groups:
            [
                {id:1 , isClicked: false, name:"gilad" , image:giladImg ,isgroup:false, unreadMark: 4, unread: 4, messages:
                    [
                        {me: true, body: 'hello to gilad from ori', type: 'text',author:'me'},
                        {me: false, body: 'thank you ori, I think we did a great job', type: 'text',author:'gilad'},
                        {me: true, body: 'I agree', type: 'text',author:'me'},
                        {me: false, body: 'Look! The new lecture was just uploaded to moodle in mp3 format!', type: 'text',author:'gilad'},
                        {me: false, body: rickRoll, type: 'audio',author:'gilad'},
                        {me: true, body: "You rick rolled me!", type: 'text',author:'me'},
                        {me: true, body: longCoolImg, type: 'img',author:'me',date:new Date("April 28, 2022 00:03:30")}
                    ]
                },
                {id:2 , isClicked: false, name:"bob" , image:bobImg ,isgroup:false, unreadMark: 0, unread: 0, messages:
                    [
                        {me: true, body: 'hello to bob from ori', type: 'text',author:'me'},
                        {me: false, body: 'thank you ori, I love what you did with the place', type: 'text',author:'bob'},
                        {me: true, body: 'thanks', type: 'text',author:'me'},
                        {me: false, body: 'Look! The new lecture was just uploaded to moodle in mp3 format!', type: 'text',author:'bob'},
                        {me: false, body: rickRoll, type: 'audio',author:'bob'},
                        {me: true, body: "You rick rolled me!", type: 'text',author:'me'},
                        {me: true, body: longCoolImg, type: 'img',author:'me',date:new Date("April 27, 2022 23:15:30")}
                    ]
                },
                {id:3 , isClicked: false, name:"alice" , image:aliceImg ,isgroup:false, unreadMark: 7, unread: 7, messages:
                    [
                        {me: true, body: 'hello to alice from ori', type: 'text',author:'me'},
                        {me: false, body: 'thank you ori, I love what you did with the place', type: 'text',author:'alice'},
                        {me: true, body: 'thanks', type: 'text',author:'me'},
                        {me: false, body: 'Look! The new lecture was just uploaded to moodle in mp3 format!', type: 'text',author:'alice'},
                        {me: false, body: rickRoll, type: 'audio',author:'alice'},
                        {me: true, body: "You rick rolled me!", type: 'text',author:'me'},
                        {me: true, body: longCoolImg, type: 'img',author:'me',date:new Date("April 27, 2021 23:15:30")}
                    ]
                },
                {id:4 , isClicked: false, name:"hemi" , image:hemiImg ,isgroup:false, unreadMark: 8, unread: 8, messages:
                    [
                        {me: true, body: 'hemi please give me a good grade', type: 'text',author:'me'},
                        {me: false, body: 'no problem, this is your grade', type: 'text',author:'hemi'},
                        {me: false, body: rickRoll, type: 'audio',author:'hemi'},
                        {me: true, body: "You rick rolled me!", type: 'text',author:'me'},
                        {me: true, body: longCoolImg, type: 'img',author:'me'},
                        {me: true, body: "wait... so what is my grade?", type: 'text',author:'me'},
                        {me: false, body: 'okay, okay, this is your grade', type: 'text',author:'hemi'},
                        {me: false, body: rickRoll, type: 'audio',author:'hemi'}
                    ]
                },
                {id:5 , isClicked: false, name:"grading students" , image:bellCurveImg ,isgroup:true, unreadMark: 9, unread: 9, messages:
                    [
                        {me: true, body: "hello everyone, we have to decide on gilad's and ori's score", type: 'text',author:'me'},
                        {me: false, body: 'I say we fail them', type: 'text',author:'uriel'},
                        {me: false, body: 'do you really mean that?', type: 'text',author:'hemi'},
                        {me: false, body: rickRoll, type: 'audio',author:'uriel'},
                        {me: false, body: 'oh, you were just kidding', type: 'text',author:'hemi'},
                        {me: false, body: 'yes, but I know just how much we should give them!', type: 'text',author:'uriel'},
                        {me: false, body: long100Img, type: 'img',author:'uriel'},
                        {me: false, body: 'correct!', type: 'text',author:'hemi'},
                        {me: true, body: 'good talk guys!', type: 'text',author:'me'}
                    ]
                }
            ]
        }
    ],
    ["gilad517",
        { image:giladImg , groups:
            [
                {id:1 , isClicked: false, name:"ori" , image:oriImg ,isgroup:false, unreadMark: 4, unread: 4, messages:
                    [
                        {me: true, body: 'hello to ori from gilad', type: 'text',author:'me'},
                        {me: false, body: 'thank you gilad, I think we did a great job', type: 'text',author:'ori'},
                        {me: true, body: 'I agree', type: 'text',author:'me'},
                        {me: false, body: 'Look! The new lecture was just uploaded to moodle in mp3 format!', type: 'text',author:'ori'},
                        {me: false, body: rickRoll, type: 'audio',author:'ori'},
                        {me: true, body: "You rick rolled me!", type: 'text',author:'me'},
                        {me: true, body: longCoolImg, type: 'img',author:'me'}
                    ]
                },
                {id:2 , isClicked: false, name:"bob" , image:bobImg ,isgroup:false, unreadMark: 0, unread: 0, messages:
                    [
                        {me: true, body: 'hello to bob from gilad', type: 'text',author:'me'},
                        {me: false, body: 'thank you gilad, I love what you did with the place', type: 'text',author:'bob'},
                        {me: true, body: 'thanks', type: 'text',author:'me'},
                        {me: false, body: 'Look! The new lecture was just uploaded to moodle in mp3 format!', type: 'text',author:'bob'},
                        {me: false, body: rickRoll, type: 'audio',author:'bob'},
                        {me: true, body: "You rick rolled me!", type: 'text',author:'me'},
                        {me: true, body: longCoolImg, type: 'img',author:'me'}
                    ]
                },
                {id:3 , isClicked: false, name:"alice" , image:aliceImg ,isgroup:false, unreadMark: 7, unread: 7, messages:
                    [
                        {me: true, body: 'hello to alice from gilad', type: 'text',author:'me'},
                        {me: false, body: 'thank you gilad, I love what you did with the place', type: 'text',author:'alice'},
                        {me: true, body: 'thanks', type: 'text',author:'me'},
                        {me: false, body: 'Look! The new lecture was just uploaded to moodle in mp3 format!', type: 'text',author:'alice'},
                        {me: false, body: rickRoll, type: 'audio',author:'alice'},
                        {me: true, body: "You rick rolled me!", type: 'text',author:'me'},
                        {me: true, body: longCoolImg, type: 'img',author:'me'}
                    ]
                },
                {id:4 , isClicked: false, name:"hemi" , image:hemiImg ,isgroup:false, unreadMark: 8, unread: 8, messages:
                    [
                        {me: true, body: 'hemi please give me a good grade', type: 'text',author:'me'},
                        {me: false, body: 'no problem, this is your grade', type: 'text',author:'hemi'},
                        {me: false, body: rickRoll, type: 'audio',author:'hemi'},
                        {me: true, body: "You rick rolled me!", type: 'text',author:'me'},
                        {me: true, body: longCoolImg, type: 'img',author:'me'},
                        {me: true, body: "wait... so what is my grade?", type: 'text',author:'me'},
                        {me: false, body: 'okay, okay, this is your grade', type: 'text',author:'hemi'},
                        {me: false, body: rickRoll, type: 'audio',author:'hemi'}
                    ]
                },
                {id:5 , isClicked: false, name:"grading students" , image:bellCurveImg ,isgroup:true, unreadMark: 9, unread: 9, messages:
                    [
                        {me: true, body: "hello everyone, we have to decide on gilad's and ori's score", type: 'text',author:'me'},
                        {me: false, body: 'I say we fail them', type: 'text',author:'uriel'},
                        {me: false, body: 'do you really mean that?', type: 'text',author:'hemi'},
                        {me: false, body: rickRoll, type: 'audio',author:'uriel'},
                        {me: false, body: 'oh, you were just kidding', type: 'text',author:'hemi'},
                        {me: false, body: 'yes, but I know just how much we should give them!', type: 'text',author:'uriel'},
                        {me: false, body: long100Img, type: 'img',author:'uriel'},
                        {me: false, body: 'correct!', type: 'text',author:'hemi'},
                        {me: true, body: 'good talk guys!', type: 'text',author:'me'}
                    ]
                }
            ]
        }
    ],
    ["student1024",
        { image:booksImg , groups:
            [
                {id:1 , isClicked: false, name:"gilad" , image:giladImg ,isgroup:false, unreadMark: 4, unread: 4, messages:
                    [
                        {me: true, body: 'hello to gilad from student', type: 'text',author:'me'},
                        {me: false, body: 'thank you student, I think we did a great job', type: 'text',author:'gilad'},
                        {me: true, body: 'I agree', type: 'text',author:'me'},
                        {me: false, body: 'Look! The new lecture was just uploaded to moodle in mp3 format!', type: 'text',author:'gilad'},
                        {me: false, body: rickRoll, type: 'audio',author:'gilad'},
                        {me: true, body: "You rick rolled me!", type: 'text',author:'me'},
                        {me: true, body: longCoolImg, type: 'img',author:'me'}
                    ]
                },
                {id:2 , isClicked: false, name:"ori" , image:oriImg ,isgroup:false, unreadMark: 4, unread: 4, messages:
                    [
                        {me: true, body: 'hello to ori from student', type: 'text',author:'me'},
                        {me: false, body: 'thank you student, I think we did a great job', type: 'text',author:'ori'},
                        {me: true, body: 'I agree', type: 'text',author:'me'},
                        {me: false, body: 'Look! The new lecture was just uploaded to moodle in mp3 format!', type: 'text',author:'ori'},
                        {me: false, body: rickRoll, type: 'audio',author:'ori'},
                        {me: true, body: "You rick rolled me!", type: 'text',author:'me'},
                        {me: true, body: longCoolImg, type: 'img',author:'me'}
                    ]
                },
                {id:3 , isClicked: false, name:"bob" , image:bobImg ,isgroup:false, unreadMark: 0, unread: 0, messages:
                    [
                        {me: true, body: 'hello to bob from student', type: 'text',author:'me'},
                        {me: false, body: 'thank you student, I love what you did with the place', type: 'text',author:'bob'},
                        {me: true, body: 'thanks', type: 'text',author:'me'},
                        {me: false, body: 'Look! The new lecture was just uploaded to moodle in mp3 format!', type: 'text',author:'bob'},
                        {me: false, body: rickRoll, type: 'audio',author:'bob'},
                        {me: true, body: "You rick rolled me!", type: 'text',author:'me'},
                        {me: true, body: longCoolImg, type: 'img',author:'me'}
                    ]
                },
                {id:4 , isClicked: false, name:"hemi" , image:hemiImg ,isgroup:false, unreadMark: 8, unread: 8, messages:
                    [
                        {me: true, body: 'hemi please give me them good grade', type: 'text',author:'me'},
                        {me: false, body: 'no problem, this is their grade', type: 'text',author:'hemi'},
                        {me: false, body: rickRoll, type: 'audio',author:'hemi'},
                        {me: true, body: "You rick rolled me!", type: 'text',author:'me'},
                        {me: true, body: longCoolImg, type: 'img',author:'me'},
                        {me: true, body: "wait... so what is their grade?", type: 'text',author:'me'},
                        {me: false, body: 'okay, okay, this is their grade', type: 'text',author:'hemi'},
                        {me: false, body: rickRoll, type: 'audio',author:'hemi'}
                    ]
                },
                {id:5 , isClicked: false, name:"grading students" , image:bellCurveImg ,isgroup:true, unreadMark: 9, unread: 9, messages:
                    [
                        {me: true, body: "hello everyone, we have to decide on gilad's and ori's score", type: 'text',author:'me'},
                        {me: false, body: 'I say we fail them', type: 'text',author:'uriel'},
                        {me: false, body: 'do you really mean that?', type: 'text',author:'hemi'},
                        {me: false, body: rickRoll, type: 'audio',author:'uriel'},
                        {me: false, body: 'oh, you were just kidding', type: 'text',author:'hemi'},
                        {me: false, body: 'yes, but I know just how much we should give them!', type: 'text',author:'uriel'},
                        {me: false, body: long100Img, type: 'img',author:'uriel'},
                        {me: false, body: 'correct!', type: 'text',author:'hemi'},
                        {me: true, body: 'good talk guys!, they deserve it', type: 'text',author:'me'}
                    ]
                }
            ]
        }
    ]
]);

export default chat_db;