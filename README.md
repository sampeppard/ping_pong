# Ping-Pong

#### An application that that returns conditional output depending on the number entered, 08.19.2016

#### By **Samuel Peppard**

## Description

This is an application that takes a number a user enters and returns a list of number up to and including that number with the following exceptions.

If the number is divisible by 3, the program returns "ping" for that particular number.

If the number is divisible by 5, the program returns "pong" for that particular number.

If the number is divisible by 15, the program returns "PING-PONG!!!" for that particular number.

If none of the above conditions are met the program returns all of the numbers up to and including the entered number with zero exceptions.

## Specifications

#### 1. Do nothing to non-numeric (i.e. letters and special characters) input.

* Example Input: "a" or "!"
* Example Output: "Please enter a number"

#### 2. Return "PING-PONG!" when a particular number is divisible by 15.

* Example Input: 15
* Example Output: 1 2 ping 4 pong ping 7 8 ping pong 11 ping 13 14 PING-PONG!!!

#### 3. Return "ping" when a particular number is divisible by 3.

* Example Input: 3
* Example Output: 1 2 ping

#### 4. Return "pong" when a particular number is divisible by 5.

* Example Input: 5
* Example Output: 1 2 ping 4 pong

#### 5. Return the list of numbers up to the entered number with zero exceptions.

* Example Input: 2
* Example Output: 1, 2

## Setup/Installation Requirements

* Clone this repository
* If editing, open project directory in Code Editor of choice
* If viewing, open index.html in a web browser

## Known Bugs

No known bugs.

## Support and contact details

For comments or questions, please email sampeppard@gmail.com

## Technologies Used

HTML
CSS
JavaScript
jQuery version 3.1.0.
Bootstrap version 3.3.7.

### License

*This application is licensed under the MIT license*

Copyright (c) 2016 **Samuel Peppard**
