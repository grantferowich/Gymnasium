/* 

Building has many elevators (at least one)


Nouns:
1. person, button, elevator, direction, floor origin
2. elevator, floor, person
3. person, elevator, weight, destination


Verbs
1. invite, record
2. arrives, open
3. enters

Notes:
elevator 2 states: stopped, moving, doors open/closed
floor is attribute of building
Building is associated with Elevator in a has-a relationship


Elevator:
  Attributes: 
    invitations: (origin level, direction)
      [{origin: level,
        direction: }]
    destinations: set
    direction: string [up, down, none]
    
  Methods: 
    moveToLevel (invitations, destination) 
    add_destination(value)
    remove_destination()
    add_direction()
    update_direction() 


Person:
  Attribute:
    currentLevel:
    destinationLevel:
  Methods:
    addInvitation:
 */