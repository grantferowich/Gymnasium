/* 
'''

1: 16
2: "password", "PAssword"
3: a char cant be repeated more 4
4: 1 upperCase, 1 lowerCase letter
5: {"@","*","#"}
passowrd = "password"

# case sensitive {a:4,b:5} as adding, check if valuue >4: add rule 3 to result

# flagUpperCase, flaglowerCase if false, add rule 4 to result.

# spical "*","#","@" if special_flag == false, add rule 5 to result
# "aaaapassword$$"

# validate(password_1) ==> []
# validate(password_2) ==> [1]
# validate(password_3) ==> [1,2]
# validate(password_4) ==> [2,3]
# validate(password_5) ==> [2,3,4]
# validate(password_6) ==> [1,2,3,4,5]
# validate(password_7) ==> [1,4]
# validate(password_8) ==> [1,2]

print(authenticate_password(password_1))
print(authenticate_password(password_2))
print(authenticate_password(password_3))
print(authenticate_password(password_4))
print(authenticate_password(password_5))
print(authenticate_password(password_6))
print(authenticate_password(password_7))
print(authenticate_password(password_8))


# case sensitive {a:4,b:5} as adding, check if valuue >4: add rule 3 to result

# flagUpperCase, flaglowerCase if false, add rule 4 to result.

# spical "*","#","@" if special_flag == false, add rule 5 to result
# "aaaapassword$$"

password_1 = "Strongpwd9999#abc"
password_2 = "Less10#"
password_3 = "Password@"
password_4 = "#PassWord011111112222223x"
password_5 = "password#1111111"
password_6 = "aaaapassword$$"
password_7 = "LESS10#"
password_8 = "SsSSSt#passWord"





FOLLOW UP:

you are working on an accounting program for an event's ticketing system.

At the end of the day, all the payments received from the payment gateway have to be
matched with the users who bought the tickets. There is always a 1-to-1 match between 
the users and the payments.

Write a function that, given the payment, pricing, and user data, returns a data
structure that matches the names of the users to their payment IDs.

Use the emails to match the payments. If the emails don't match,
use the payment amounts. For each payment amount, there will
be at most one payment that cannot be matched via the email.

For this problem, we can assume the names are unique.

Users:
---------------------------------------------------------
| Name        | Email            | Purchase  | Quantity |
---------------------------------------------------------
| John A.     |  john.a@mail.com | Top       |        3 |
| James S.    |     j.s@mail.com | Economy   |        2 |
| Stacy C.    | stacy.c@test.com | Economy   |        2 |
| Bobby B.    |     bob@mail.com | Medium    |       10 |
| Michelle X. |     mix@test.com | Medium    |       10 |
| Linda F.    |     l.f@mail.com | Top       |       10 |
| Betty T.    |     b.t@mail.com | ThreeEco  |        1 |
| Nancy L.    |     n.l@test.com | TwoEco    |        1 |
| Daniel O.   |     d.o@mail.com | OneEco    |        1 |
| Mike E.     |     m.e@mail.com | FourEco   |        1 |
| Matthew R.  |      mr@test.com | OneEco    |        5 |
| Albert K.   |  albert@test.com | OneEco    |        5 |
---------------------------------------------------------

Payment Gateway:
-----------------------------------
| ID | Email             | Amount |
-----------------------------------
|  1 |    john2@mail.com |     33 |
|  2 | michelle@mail.com |     60 |
|  3 |  stacy.c@test.com |      8 |
|  4 |    james@mail.com |      8 |
|  5 |      bob@mail.com |     60 |
|  6 |   email not found |    110 |
|  7 |   email not found |      1 |
|  8 |   email not found |      2 |
|  9 |   email not found |      3 |
| 99 |   email not found |      4 |
| 10 |       mr@test.com |      5 |
| 11 |        a@mail.com |      5 |
-----------------------------------

Ticket Prices:
--------------------
| Ticket   | Price |
--------------------
| Economy  |     4 |
| Top      |    11 |
| Medium   |     6 |
| OneEco   |     1 |
| TwoEco   |     2 |
| ThreeEco |     3 |
| FourEco  |     4 |
--------------------


Expected result:

matching(users,payments,prices) 

Payment ID -> Name

1  -> John A.      # John's the amount matches, it's the only payment for 33.
2  -> Michelle X.  # It's the only payment for 60 without a matching email.
3  -> Stacy C.     # Stacy C.'s email matches.
4  -> James S.     # James S. because it's the only other payment for 8.
5  -> Bobby B.     # The email matches.
6  -> Linda F.     # The amount matches.
7  -> Daniel O.    # The amount matches.
8  -> Nancy L.     # The amount matches.
9  -> Betty T.     # The amount matches.
10 -> Matthew R.   # The email matches.
11 -> Albert K.    # It's the only other payment for 5 without a matching email.
99 -> Mike E.      # The amount matches.

 '''

 */



