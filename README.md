----- addTodo -----
use method : post
link : http://localhost:3000/listAllTodo
body raw (JSON) :
{
    "todo" : "Learn docker" 
}

----- deleteTodo -----
use method : post
link : http://localhost:3000/deleteTodo
body raw (JSON) :
{
    "todo" : "Learn docker" 
}

----- readTodo -----
use method : get
link : http://localhost:3000/readTodo
body raw (JSON) :
{
    "todo" : "Learn docker" 
}

----- listAllTodo -----
use method : get
link : http://localhost:3000/listAllTodo
