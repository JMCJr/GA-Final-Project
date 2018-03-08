# GA-Final-Project

Better formatted doc:  https://docs.google.com/document/d/12rtOuBYyw03o9JfdTYKVIwZtPPJTOQ9s3-OTeXa_mqk/edit?usp=sharing

Proposal:

Description:
On The Lookout is a scavenger hunt organizer that allows for custom group activities for any occasion (except funerals).
Users are divided into two groups: organizers and hunters. An organizer can create a custom scavenger hunt by inputting clues in the app. The clues lead to something that hunters need to find and photograph.
The organizer can set up teams, members of which can upload images to answer a clue. If there are no teams, and only individuals, their use case will look just like a team member’s. Clues can be skipped and returned to.


User Story 1:

George is in his 30’s, he has a quasi-creative job in a creative field, but it rarely satisfies his need to make interesting things. His birthday is coming up.

After close to 10 years of drunk birthdays at a bar, George is bored with the idea that this is the de facto way to celebrate his birth. Besides, most of his friends are married or living with a partner, so no one is anxious to raid a White Castle at 3 in the morning after the bar, then sleep until 2pm the next day. Everyone has chores to do.

While searching for interesting birthday party ideas on “hip” blogs, George comes across On The Lookout. On The Lookout is a scavenger hunt app that lets George create a scavenger hunt then invite his friends to participate in it. His friends can seek out answers to clues George set up and upload pictures of what they find. George can see these pictures and check off “right” or “wrong”, while the app keeps track of each person or team’s score.

His birthday at the MET museum is the most fun he or any of his friends have ever had. George is crowned the coolest person EVER.


User story 2:

Yvette is a recently-promoted manager at a “hip” company. She was never considered cool, whatwith her obsession with books and watching re-runs of “Gilmore Girls” and “Golden Girls”. She basically only watches shows with “girls” in the title, except for “Girls”, ironically.

Her supervisor, Madison, has tasked her with coming up with an idea for a team-building exercise that is also fun, in order to get these ‘gram-obsessed millennials to better work together.
Madison is a Gen-Xer and doesn’t really get anything. So Yvette sets out to find the perfect activity that will appeal to both Madison’s need for a more unified team and Yvette’s underlings’ inability to exist without taking pictures of themselves and/or whatever they’re doing.

Yvette, being the budding superstar she is, finds and suggests On The Lookout. She can create her own custom scavenger hunt, or find a pre-made one on the app. She can designate teammates and set teams against each other in an epic battle of wills and photo filters. Everyone loves the worldly, interesting idea. Her company sees a 1265% leap in productivity the next quarter and this “hip” start up becomes the “Uber” of “Facebooks”.

———————

MVP:

For Organizers:

A “login” for an organizer - not full Auth (yet)
A profile with a collection of hunts, past and current
A form where a hunt can be created
A hunt start and end time - probably using Moment
A hunter page, where the organizer can see a list of teams/individuals who are hunting
An “active” Scavenger Hunt page where the organizer can see answers and check off “right” or “wrong”


For Hunters:

An entry code for hunters - (access-code-generator npm package, perhaps)
Could be manually created by the organizer and entered by the hunter...
A page view of the scavenger hunt and each clue
A button to upload and submit an image to answer the clue (using imgur API)


Technologies:

React
Rails (get that CRU(d?) going up quickly)
Imgur API to upload and render photos
Moments npm package
?? access-code-generator npm package?? - not sure if this is a good package, the docs are sparse.
Auth (reach)

Challenges:

Getting Auth working in rails…
Building out a React app that can display info from Rails
Passing data from fields in React to Rails/the DB
Getting the Imgur API to play nicely with React AND Rails
Figuring out an access code so hunters don’t have to login… Might have to resort to a manual code written by the Organizer and entered by the hunter

Reach Goals:

A few pre-loaded Scavenger Hunts for an Organizer to choose from
On-mobile access to photos/camera-roll for hunters to upload images
A button where hunts/clues can be edited
An automatically generated access code for Hunters to input
Groups with Hunter-members
Auth for the Organizer

Timeline:


Friday

Figure out the schema and tables/relationships for the DB

Get the rails app started

Models/Controllers for organizers, hunters

Establish routes

Test routes with Postman

Get the React app on my machine… render “Final Project will be here one day” when I run ‘npm run start’ on it


Saturday

Get pages/views/components list organized and planned out

Begin creating each component from the checklist I create (above)

Create the forms that I’ll need for inputting data

Start writing all the functions and methods in React I’ll need to connect to my Rails server

Hang out at the SRC


Sunday

Repent

Try to finish connecting React app to Rails app

test to see if I can create a scavenger hunt

IF Rails and React are playing nice and there’s a Hunt afoot:

Work on Hunter’s view

Render the list of clues

Start incorporating Imgur API

Incorporate a manual Hunter CODE created by the Organizer

Store the code and conditionally render the scavenger hunt when entered on the Hunter home view


Monday

Make sure that a Hunter can upload an image and that an Organizer can see it

If pictures are rendering for Organizers, then add a “right/wrong” toggle

Display if a Hunter answer is “right” or “wrong” in hunter view

WE ARE AT DESIGN-FREE-MVP

Make sure everything is working remotely well


Tuesday: Start FULL MVP & Stretch

Incorporate AUTH?

Design implementation

CSS on Hunter views

CSS on Organizer views


Wednesday

CSS on Hunter views

CSS on Organizer views

TRUE MVP hit


Thursday

Iron out any bugs

AFTER BUGS ARE KILLED:

Edit clues for Organizer

Automatically generate ACCESS CODE for Hunters

Groups of Hunters

Deploy


Friday

Pray
