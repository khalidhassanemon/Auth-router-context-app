/*
-------------------------------
Basic context Api setup
-------------------------------
1.context API:Share auth state with other component(across the application)
2.Create an userContext.
3.ContextProvider with past children.
4.set the context provider in the index.js
5.Now to consume the context:export the AuthContext from UserContext.
6.Now at header or anywhere else:useContext hook.
7.Now at home or anywhere else :use UseContext hooks to get the info in the context.
*/

/*

Auth integration
1.use getAuth by passing the app form firebase config 
create a function named createUser to return createUserWithEmailAndPassword ;
*/