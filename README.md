### `Run the project:`
1. Clone the project to the wanted path
2. Create another react app (with the "npx create-react-app (name)" command
3. Copy the "node_modules" folder to the cloned project (couldn't upload to github because of memory size)
4. Navigate back to the cloned project
5. Activate the next commands: 1. (npm install bootstrap) 2. (npm i jquery) 3. (npm i bootstrap-icons), those are the packages (bootstrap, bootstrap icons, jquery)
6. Write "npm start"
7. Open google chrome and navigate (in the url) to "http://localhost:3000"


### `Existing users:`
1. user name: shoshani777 , password: ori123321
2. user name: gilad517 , password: gilad123321
3. user name: student1024 , password: student123321


### `Features:`
1. Login and registration pages with midtype confirmation and validation
2. Add chat to user
3. Responsive chat list, when sending a message the current chat will top, unread feature, last message sent in chat and more...
4. Chat with voice records, images and text supported messages
5. Support in group chats (not in creation, but an example is set)
6. Project is written in react framework, which also means all data remain until refresh!
7. And more to discover...

### `How?`
The App component navigates you on first enterance (hence on refresh also) based on the url, then based on buttons and link pressed between 3 main components:
1. Login: designed login page with basic login logic and some features mentioned above
2. Register: designed registration page with basic registration logic and some features mentioned above
3. WebPage: the heart, the WebPage component contains the chats list and the chat (components as well) for each uniqe user
