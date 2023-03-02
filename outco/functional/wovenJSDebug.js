/* 
Debug a problem with data additions to a SQL database. 

Date: 3/2/2023.

**From**: You
**To**: Casey (senior engineer teammate)
**Subject**: re: User creation error

Hey Casey, I hope you are doing great man. I wanted to make a few notes on what I saw with respect to Ticket #9584. 
1. I noticed the email domains in the tests which are failing tended to be longer than the email domains in the tests which passed (e.g. "fortnitefan.com" in the test case which is not working versus "60s.com" in the test case which is passing.) It would seem really wierd the database would reject email domains greater than a certain length, however, I wanted to bring this to your attention in case there is something happening with the database entry validation logic which could be rejecting emails with domain names beyond a certain length.
2. I figured out one of the potential sources of errors consists in how the data is being passed to the PostrgreSQL database. When logging out the `result` variable from the CreateUserProfile class the error being returned states `error: 'ERROR:  invalid input syntax for integer: cc062e99d32c'` So, naturally, the next step is to look at which values being passed to the database are integers. The `id` field of the social media profiles is being passed as a string. The `id` fields for Facebook, Twitter, LinkedIn, Instagram, and Snapchat are all being passed as strings. The string noted in the error message, `cc062e99d32c`, belongs to the Instagram profile object. So the way Instagram accounts are being connected with user account creation is a place where the bug may be resolved.  (Note: The error message originated from this line `assert.deepEqual(CreateUserProfile.beforeCreate('avocado@60s.com'), true)`.)
3. One question worth exploring is, Did the users whose accounts were successfully created have Instagram accounts associated with them? If so, how was the `id` being passed in the successful database entries?  
4. What is the syntax for adding entries to the database when it comes to Instagram? Do you see any obvious errors which could be resolved? 
5. I looked at the way Instagram network ids were being passed in another example. When the input is "avocado@hipmail" the console logs the error `success: false,
  error: 'ERROR:  invalid input syntax for integer: 24ab21dd47a7'
}`. Once again, this integer is the integer associated with the Instagram network id. 
----

**Ticket #9584 Comment** to Tamara (customer support colleague)

Hey Tamara,
I hope you are doing great. The first thing users could try is to create an account without the Instagram account associated. 
Thank you, 
Grant
 */