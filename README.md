# Auth Route
To get the token
 - post:- http://localhost:3000/auth/v1

    - body:-
    {
	"username":"admin",
	"password":"password"
    }
    - return :-
    {
    "token": <your Token>
    }

to check the token
- post :- http://localhost:3000/auth/v1/isAuthenticated
- body :- NA
- header :- {"key":"Authorization","value":"Bearer <your token>"}