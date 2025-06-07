### 🎮 **IF Block Exercise: Candy Collection Game in **

#### **Instructions:**

You will write code that checks if the player has a certain number of candies, and prints different messages depending on the number.

### 1. **Scenario 1:**

You have **15 candies**. Write a program that checks if you have **10 or more candies**. If you do, the program should print **"You win a prize!"**.

#### **Hint:**

* Use an `if` block to check if the candies are greater than or equal to 10.
* Print the message if true.


---

### 2. **Scenario 2:**

Now, you have **5 candies**. Write a program that checks if you have **less than 10 candies**. If you do, the program should print **"Keep trying!"**.

#### **Hint:**

* Use an `if` block to check if candies are **less than 10**.
* Print the message if true.


---

### 3. **Scenario 3:**

You have **20 candies**. Write a program that checks if you have **exactly 20 candies**. If true, the program should print **"You are the candy master!"**.

#### **Hint:**

* Use `==` to check if you have exactly 20 candies.


---

### 4. **Bonus Scenario:**

Now, let's combine everything! You have **10 candies**. Write a program that checks:

* If you have **10 or more candies**, print **"You win a prize!"**
* If you have **less than 10 candies**, print **"Keep trying!"**

#### **Hint:**

* Use an `else` block to handle the second condition.


* Experiment with different numbers for `candies` to see how the program behaves.
* Add more conditions like checking for more than 50 candies or having exactly 0 candies.





### LISTS EXERCISES

### 🎮 1. You Have Some Game Scores

You played 3 levels in a game. Your scores were 100, 200, and 150.
Write a program that stores these scores in a list and prints the second score.

**Hint:**

* Use a list to store the scores.
* Use indexing to print the second item (remember: Python starts counting at 0).

---

### 🏆 2. Add a New High Score

You just got a new score of 250 in your game.
Add it to your existing score list: `[100, 200, 150]`.

**Hint:**

* Use the `.append()` method to add the score.
* Print the updated list.

---

### 🎒 3. Your Inventory

Your inventory has: `"sword"`, `"potion"`, and `"shield"`.
You find a `"bow"` and want to add it to your inventory.
Then, you use the `"potion"` and want to remove it.

**Hint:**

* Use `.append()` to add.
* Use `.remove()` to take something out.

---

### 🧠 4. Is the Game on the List?

You have these games: `["Minecraft", "Roblox", "Among Us"]`
Ask the user to type the name of a game.
If the game is in the list, print `"Yes, it's in your library!"`

**Hint:**

* Use `input()` to get the game.
* Use the `in` keyword in an `if` statement.

---

### 🧱 5. Build a Level List

Create a list of 3 levels: `"Level 1"`, `"Level 2"`, `"Boss Level"`.
Print each level one by one.

**Hint:**

* Use a `for` loop to go through the list.

---

### 🎲 6. Random Game Picker

You can't decide what to play!
You have: `["Mario", "Zelda", "Pokemon"]`
Write a program to randomly pick one.

**Hint:**

* Use `import random`
* Use `random.choice()` to select a game from the list.

---

### CONSOLE READLINE
### ------------------


### 🟢 **1. Rectangle Area Calculator**

**Challenge**: Ask the user for the width and height of a rectangle. Then calculate and display the area.

**Hint**: Use `int.Parse()` or `Convert.ToInt32()` to turn the input into numbers. Area = width × height.

---

### 🟢 **2. Age in 5 Years**

**Challenge**: Ask the user how old they are, then display how old they’ll be in 5 years.

**Hint**: Add 5 to the user's age. You’ll need to convert the input to an integer.

---

### 🟢 **3. Add Two Numbers**

**Challenge**: Ask the user for two numbers and print the total.

**Hint**: Remember to convert both inputs before adding them.

---

### 🟢 **4. Celsius to Fahrenheit Converter**

**Challenge**: Ask the user for a temperature in Celsius, then convert it to Fahrenheit.

**Hint**: Use this formula: Fahrenheit = (Celsius × 9 ÷ 5) + 32.

---

### 🟢 **5. Triangle Area**

**Challenge**: Ask the user for the base and height of a triangle. Then calculate the area.

**Hint**: Area = 0.5 × base × height.

---

### 🟢 **6. Multiplication Quiz**

**Challenge**: Ask the user, "What is 6 × 7?" and check if they answered correctly.

**Hint**: Use `if` to check if their answer equals 42.

---

### 🟢 **7. Repeat My Name**

**Challenge**: Ask the user for their name and how many times they want it repeated. Then print it that many times.

**Hint**: Use a `for` loop and make sure to convert the number input.

---

### 🟢 **8. Even or Odd Checker**

**Challenge**: Ask the user for a number and tell them whether it's even or odd.

**Hint**: Use the `%` (modulo) operator to see if the number has a remainder when divided by 2.

---

### 🟢 **9. Simple Calculator**

**Challenge**: Ask the user for two numbers and an operator (+, -, \*, /). Then perform that operation and show the result.

**Hint**: Use `if` or `switch` to pick the correct operation based on the user’s input.

---

### 🟢 **10. Days to Seconds Converter**

**Challenge**: Ask the user how many days they want to convert into seconds.

**Hint**: 1 day = 24 hours, 1 hour = 60 minutes, 1 minute = 60 seconds.

## LOOPS

---

### **1. Scenario 1:**

You are sending out invitations to your 3 best friends for a sleepover.

**Write a program that prints "You're invited!" 3 times.**

💡 **Hint:**

* Use a `for` loop to repeat something 3 times.
* Inside the loop, print `"You're invited!"`.

---

### **2. Scenario 2:**

Now, you have 5 candies. Write a program that checks if you have less than 10 candies.
If you do, the program should print `"Keep trying!"`.

💡 **Hint:**

* Use an `if` block to check if candies are less than 10.
* Print the message if true.

---

### **3. Scenario 3:**

You are practicing your dance moves. You want to repeat your favorite dance move 5 times.

**Write a program that uses a `for` loop to print "Twirl!" five times.**

💡 **Hint:**

* Use a `for` loop to repeat something 5 times.
* Inside the loop, print `"Twirl!"`.

---

### **4. Scenario 4:**

You're helping your little brother count his toy cars. He has 1 to 5 cars.

**Write a program that prints the numbers from 1 to 5.**

💡 **Hint:**

* Use a `for` loop that goes from 1 to 5.
* Print the number inside the loop.

---

### **5. Scenario 5:**

You are making bracelets for your friends. You want to make one for each friend in a list: `["Amy", "Bella", "Chloe"]`.

**Write a program that prints "Making a bracelet for \<name>" for each friend.**

💡 **Hint:**

* Use a `for` loop to go through the list of names.
* Use the name in the print statement.


---

### **6. Scenario 6:**

You are opening surprise boxes, one by one.
You find a puppy in box 3! You should stop opening more boxes when you find it.

**Write a program that checks boxes 1 to 5 and prints "Opening box \<number>" until it finds box 3. When it does, print "Puppy found!" and stop.**

💡 **Hint:**

* Use a `for` loop from 1 to 5.
* Use an `if` to check if it's box 3.
* Use `break` to stop the loop when the puppy is found.

---

### **7. Scenario 7:**

You are guessing a number in a game. The correct number is 4.

**Write a program that loops through guesses 1 to 5 and prints "Guessing \<number>...". If the guess is 4, print "You got it!" and stop guessing.**

💡 **Hint:**

* Use a `for` loop from 1 to 5.
* Use an `if` to check if the guess is 4.
* Use `break` when the correct guess is found.

---

### **8. Scenario 8:**

You’re baking cupcakes. You want to bake 10, but your oven only fits 6.
So, stop after cupcake number 6.

**Write a program that prints "Baking cupcake \<number>" and stops after 6 cupcakes.**

💡 **Hint:**

* Use a `for` loop from 1 to 10.
* Use `if` and `break` to stop at 6.

---

### **9. Scenario 9:**

You’re reading pages of your favorite comic. You get sleepy on page 4.

**Write a program that loops from page 1 to 7 and prints "Reading page \<number>". If the page is 4, print "Too sleepy... stopping now!" and stop reading.**

💡 **Hint:**

* Use a `for` loop from 1 to 7.
* Use `if` and `break` when page 4 is reached.

---

### **10. Scenario 10:**

You are picking apples. You pick 1 apple at a time.
If you find a worm in an apple (on apple number 5), you stop picking.

**Write a program that prints "Picked apple \<number>". If it's number 5, print "Eww, a worm! Stop picking." and break the loop.**

💡 **Hint:**

* Use a `for` loop from 1 to 10.
* Use an `if` and `break` when you reach apple 5.

---






### Challenge 1: How old will you be in 5 years?

**Challenge:**
Ask the user how old they are, then display how old they’ll be in 5 years.

**Hint:**
Add 5 to the user's age. You’ll need to convert the input to an integer.

---

### Challenge 2: Are you a Ninja or a Pirate?

**Challenge:**
Ask the user if they prefer *Naruto* (ninja) or *One Piece* (pirate). If they say "Naruto", display "You’re a ninja!"
If they say "One Piece", display "You’re a pirate!"
If they type anything else, display "You are something else entirely!"

**Hint:**
Use an `if`, `elif`, and `else` block to check what they type.

---

### Challenge 3: Can you enter the Demon Slayer Corps?

**Challenge:**
Ask the user how old they are. If they are **13 or older**, display "You can join the Demon Slayer Corps!"
Otherwise, display "You are too young to join."

**Hint:**
Use an `if` block to check if age >= 13.

---

### Challenge 4: Saiyan Power Level Check

**Challenge:**
Ask the user to enter their "power level" (a number).
If it’s over **9000**, display "It’s over 9000!!!"
If it’s **9000 or below**, display "Keep training!"

**Hint:**
Compare the number with 9000 using an `if` block.

---

### Challenge 5: What’s your favorite anime character’s mood?

**Challenge:**
Ask the user to type a mood: "happy", "angry", or "sad".
Display different messages:

* If "happy", display "Your favorite character is smiling!"
* If "angry", display "Your favorite character is powering up!"
* If "sad", display "Your favorite character needs a hug."

**Hint:**
Use `if`, `elif`, and `else` to handle different moods.

---









