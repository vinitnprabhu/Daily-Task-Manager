## Daily Task Manager REST API
A Node.js and MongoDB-based task manager app is developed, adhering to RESTful API principles. Upon user registration or deactivation, the application sends email notifications. It's meticulously crafted using a straightforward scientific approach and industry-best practices for API design.

### Functions
* JWT based authentication
* Sendgrid API for emailing user about their task updates
* Filtering, Sorting, Pagination
* Uploading profile picture

###  API Endpoints
* POST 	/users (Sign up)
* POST	/users/login	(Login)
* POST	/users/logout	(Logout)
* POST	/users/logoutall (Logout of all accounts)
* POST	/users/me/avatar (Upload Profile Picture)
* POST	/users/tasks	(Create Task)
* PATCH	/users/me	(Update Profile)
* PATCH	/users/tasks/taskID	(Update Task)
* GET	/users/userID/avataar	(View Profile Picture)
* GET	/users/tasks/taskID	(View Task)
* GET	/users/tasks	(View all Tasks)
* GET	/users/tasks?limit=2	(Limit tasts to 2)
* GET	/users/tasks?sortBy=createdAt:desc	(sort tasks descending order)
* GET	/users/tasks?sortBy=createdAt:asc	(sort tasks ascending order)
* GET	/users/me	(Profile)
* DELETE	/users/tasks/taskID	(Delete a Task)
* DELETE	/users/me/avatar	(Delete Profile Picture)
* DELETE	/users/me	Private	(Delete Account)
