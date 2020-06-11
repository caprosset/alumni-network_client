# Alumni Network

## Description

This app allows ex-students to quickly find other students in the alumni directory and connect with them through the main professional platforms (Linkedin, Github, Medium...), as well as find job opportunities shared by the community, and events to keep in touch with fellow Ironhackers!

<br>

## User Stories

-  **Signup:** As an anon I can sign up in the platform so that I can start searching for alumni/jobs/events
-  **Login:** As a user I can login to the platform so that I can search for alumni/jobs/events
-  **Logout:** As a user I can logout from the platform so no one else can use it
-  **List of Alumni** As a user I can see the list of all alummi
-  **Search Alumni** As a user I can search alumni by name, or filter the list of alumi by bootcamp, campus and cohort
-  **List of Jobs** As a user I can see the list of all jobs
-  **Search Jobs** As a user I can search jobs by keyword or filter the list of jobs by city and bootcamp (job type) 
-  **List of Events** As a user I can see the list of events
-  **Search Events** As a user I can search events by keyword or filter the list of events by city and bootcamp (job type) 
-  **User profile** As a user I can see, edit or delete my profile, and see other alumni profiles
-  **Job offer** As a user I can look up the details of a job offer and save a job offer in my dashboard. As an admin, I can also edit or delete a job offer.
-  **Event offer** As a user I can look up the details of an event and save an event in my dashboard. As an admin, I can also edit or delete an event.
-  **Dashboard** As a user I can see the events and offers that I saved so that I can come back to them later. As an admin, I can add job offers or events.
-  **Add a job offer** As an admin only, I can add a job offer to the list of job offers
-  **Add an event** As an admin only, I can add an event to the list of events
-  **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist

<br>

## Backlog

Admin features
- approve or decline the newly registered users (user would have to wait for validation before being able to access the app)
- approve or decline the events and job offers submitted by alumni
- get notifications whenever there is a new user/job/event to review

User features
- submit job offers or events through a form (instead of just sending an email like in the MVP), and display it on the admin dashboard (for the admin to review it and add it)
- display saved events on a calendar in the dashboard

Other features:
- Add a map on event details page

<br>

# Client / Front-end

## Routes (React App)
| Path                      | Component            | Permissions | Behavior                                                     |
| ------------------------- | -------------------- | ----------- | ------------------------------------------------------------ |
| `/`                       | SplashPage           | anon only   | Home page                                                           |
| `/signup`            | SignupPage           | anon only   | Signup form, link to login, navigate to edit alumni profile after signup |
| `/login`             | LoginPage            | anon only   | Login form, link to signup, navigate to home directory after login  |
| `/logout`            | n/a                  | anon only   | Navigate to public homepage after logout, expire session            |
| `/alumni`                 | ListAlumni           | user and admin   | Show all alumni in a list                                           |
| `/alumni/:id`             | ShowAlumni           | user and admin   | Show details of an alumni                                           |
| `/alumni/edit/:id`             | EditAlumni           | user and admin   | Edit details of an alumni                                           |
| `/jobs`                   | ListJobs             | user and admin  | Shows all jobs in a list                                            |
| `/jobs/:id`               | ShowJob              | user and admin  | Show details of a job offer                                         |
| `/jobs/edit/:id`               | EditJob              | admin only   | Edit details of a job offer                                         |
| `/jobs/:id`               | n/a                  | admin only   | Delete job offer                                                    |
| `/jobs/add`               | CreateJob            | admin only   | Add new job offer                                                   |
| `/events`                 | ListEvents           | user and admin  | Shows all events in a list                                          |
| `/events/:id`             | ShowEvent            | user and admin  | Show details of an event                                            |
| `/events/edit/:id`             | EditEvent            | admin only   | Edit details of an event                                            |
| `/events/:id`             | n/a                  | admin only   | Delete event from the app                                           |
| `/events/add`             | CreateEvent          | admin only   | Add new event                                                       |  
| `/dashboard`          | DashboardPage        | user and admin  | Show dashboard with saved jobs and events                           |  

<br>

## Components

- SplashPage
- SignupPage
- LoginPage
- SearchBar
- SearchFilter (filter by...)
- Navbar (people/events/jobs)
- BottomNav (bottom menu)
- TopNav (back to previous page)
- ListAlumni
- AlumniCard
- ShowAlumni
- EditAlumni
- ListJobs
- JobCard
- ShowJob
- EditJob
- CreateJob
- ListEvents
- EventCard
- ShowEvent
- EditEvent
- CreateEvent
- DashboardPage
- SavedEventCard
- SavedJobCard
- 404Page 

<br>

## Services

- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()
  - auth.me()
- User Service
  - user.getAll()
  - user.getByFilter()
  - user.getOne(id)
  - user.updateOne(id, body)
  - user.saveJob(id, jobId)
  - user.removeSavedJob(id, jobId)
  - user.getAllSavedJobs(id)
  - user.saveEvent(id, eventId)
  - user.removeSavedEvent(id, eventId)
  - user.getAllSavedEvents(id)
- Job Service
  - job.getAll()
  - job.getByFilter()
  - job.getOne(id)
  - job.create(body)
  - job.updateOne(id, body)
  - job.delete(id)
- Event Service
  - event.getAll()
  - event.getByFilter()
  - event.getOne(id)
  - event.create(body)
  - event.updateOne(id, body)
  - event.delete(id)

<br>
<br>

# Server / Back-end

## Models

User model

```javascript
{
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  bootcamp: {type: String, enum: [ "Web Development", "UX Design", "Data Analytics" ], required: true},
  campus: {type: String, enum: [ "Madrid", "Barcelona", "Lisbon", "Amsterdam", "Paris", "Berlin", "Mexico City", "Sao Paulo", "Miami" ], required: true},
  cohort: {type: String, enum: [ "jan-18", "apr-18", "jul-18", "oct-18", "jan-19", "apr-19", "jul-19", "oct-19" ], required: true},
  phone: {type: String},
  image: {type: String},
  currentCity: {type: String},
  currentRole: {type: String},
  linkedinUrl: {type: String},
  githubUrl: {type: String},
  mediumUrl: {type: String},
  savedEvents: [{  type: mongoose.Schema.Types.ObjectId, ref: "Event"}],
  savedJobs: [{  type: mongoose.Schema.Types.ObjectId, ref: "JobOffer"}],
  isAdmin: { type: Boolean, default: false },
  publishedEvents: [{  type: mongoose.Schema.Types.ObjectId, ref: "Event"}],
  publishedJobOffers: [{  type: mongoose.Schema.Types.ObjectId, ref: "JobOffer"}]
}
```

Event model

```javascript
 {
  author: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
  title: {type: String, required: true},  
  description: {type: String, required: true},
  date: {type: Date, required: true},
  image: {type: String},
  bootcamp: {type: String, enum: [ "Web Development", "UX Design", "Data Analytics" ], required: true},
  streetAddress: {type: String, required: true},
  city: {type: String, enum: [ "Madrid", "Barcelona", "Lisbon", "Amsterdam", "Paris", "Berlin", "Mexico City", "Sao Paulo", "Miami" ], required: true},
  attendingAlumni: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  eventURL: {type: String, required: true}
 }
``` 

JobOffer model

```javascript
{
  author: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
  dateOfPublication: {type: String, required: true},
  title: {type: String, required: true},
  description: {type: String, required: true},
  companyName: {type: String, required: true},
  image: {type: String},
  bootcamp: {type: String, enum: [ "Web Development", "UX Design", "Data Analytics" ], required: true},
  city: {type: String, enum: [ "Madrid", "Barcelona", "Lisbon", "Amsterdam", "Paris", "Berlin", "Mexico City", "Sao Paulo", "Miami" ], required: true},
  jobOfferUrl: {type: String, required: true}
}, 
{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
}
```

<br>

## API Endpoints (back-end routes)

| HTTP Method | URL                         | Request Body                 | Success status | Error Status | Description                                                  |
| ----------- | --------------------------- | ---------------------------- | -------------- | ------------ | ------------------------------------------------------------ |
| GET         | `/auth/me    `           | Saved session                | 200            | 404          | Check if user is logged in and return profile page           |
| POST        | `/auth/signup`                | {firstName,lastName,email,password,bootcamp,campus,cohort}      | 201            | 404          | Checks if fields not empty (422) and user not exists (409), then create user with encrypted password, and store user in session |
| POST        | `/auth/login`                 | {username, password}         | 200            | 401          | Checks if fields not empty (422), if user exists (404), and if password matches (404), then stores user in session |
| POST        | `/auth/logout`                | (empty)                      | 204            | 400          | Logs out the user                                            |
| GET         | `/user`                     |                              | 200              | 400          | Show all alumni                                         |
| GET         | `/user/:id`                 | {id}                         | 200                | 400             | Show specific alumni                                     |
| PUT         | `/user/edit/:id`            | {id,firstName,lastName,phone,image,currentCity,currentRole,linkedinUrl,githubUrl,mediumUrl}           | 200            | 400          | edit alumni                                              |
| PUT        | `/user/:id/save-job/:jobId`             | {id, jobId} |                |              | save job offer in user dashboard                                                    |
| PUT        | `/user/:id/remove-job/:jobId`             | {id, jobId} |                |              | remove job offer from user dashboard                                              || PUT        | `/user/:id/save-event/:eventId`             | {id, jobId} |                |              | save event in alumni profile                                                    |
| PUT        | `/user/:id/remove-event/:jobId`             | {id, jobId} |                |              | remove event offer from user dashboard                                        |
| GET         | `/job`                    |                              |                | 404          | show jobs offers                                                 |
| GET         | `/job/:id`                | {id}                         |                |              | show specific job offer                                         |
| POST        | `/job/create`         | {author,title,description,dateOfPublication,companyName,image,bootcamp,city,jobOfferUrl}      | 200            | 404          | add job offer                                                   |
| PUT         | `/job/edit/:id`           | {id,author,title,description,dateOfPublication,companyName,image,bootcamp,city,jobOfferUrl}                   | 201            | 400          | edit job offer                                                        |
| DELETE      | `/job/delete/:id`         | {id}                         | 200            | 400          | delete specific job offer                                                      |
| GET         | `/event`                      | {}                           | 201            | 400          | show events                                                   |
| GET         | `/event/:id`                  | {id}            |                |              | show specific event                                           |
| POST        | `/events/save`             | {id} |                |              | save event                                                     |
| POST        | `/event/create`             | {author,title,description,date,hour,image,bootcamp,streetAdress,city,eventUrl} |                |              | add event                                                     |
| PUT         | `/event/edit/:id`             | {title,description...}           |                |              | edit event                                                    |
| DELETE      | `/event/delete/:id`         | {id}                         | 200            | 400          | delete specific event                                             |

<br>

## Links

### Trello/Kanban

[Link to your trello board](https://trello.com/invite/b/h04VXbg4/59e7b33e9cf97ad86dd35ea30b7ed298/ironhack-project-3) or picture of your physical board

### Git

The url to your repository and to your deployed project

[Client repository Link](https://github.com/caprosset/alumni-network_client)
[Server repository Link](https://github.com/caprosset/alumni-network_server)

[Deploy Link](http://heroku.com)

### Slides

The url to your presentation slides

[Slides Link](http://slides.com)