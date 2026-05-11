---

## 🌓 Mission: The Great Theme Toggle

Your goal is to build a "Light Switch" for your website. Instead of just having a plain white page, you’re going to give your users the power to choose between **Light Mode** and **Dark Mode**.


 [example](https://darker.oneapp.dev/)
 
### Phase 1: The Skeleton (HTML)

Before we can write any logic, we need the physical buttons on the page.

* **Create two buttons:** One for "Light" and one for "Dark."
* **Give them IDs:** In HTML, an `id` is like a person's name. You need to give each button a unique name so that JavaScript can find them later. If you don't name them, JavaScript won't know which button is being clicked!

### Phase 2: The Brain (JavaScript)

Now, we need to write the instructions. Think of this in three simple steps:

1. **The "Pointing" Step:** You need to tell JavaScript to go look at your HTML and find those buttons you just named. You’ll save these "locations" into variables.
2. **The "Eavesdropping" Step:** You need to tell the buttons to listen for a **click**. In coding, we call this an **Event Listener**. It’s like telling the button, *"Stay alert! If someone clicks you, I want you to do something immediately."*
3. **The "Magic Action" Step:** Inside that click listener, you need to write a command that talks to the **document body**. You’ll want to change its **style**—specifically the **background color**.



## 🔮 Challenge 2: The Fortune Teller

Instead of changing the color of the page, this challenge is about changing the **text**.

 [example](https://fortuneteller.oneapp.dev/)

* **The Goal:** Create a button that, when clicked, changes a piece of text (like an `<h1>` or `<p>`) into a random fortune (e.g., "You will find a cool rock today!").
* **The Logic:**
* Create a text element with a placeholder like "Click for your fortune..."
* Create a button.
* In JS, tell the button to "listen" for a click.
* When clicked, have the function change the `.innerText` of your text element to something new.



## 🔎 Challenge 3: The Secret Spy Decoder

This one teaches them about **Visibility**.

* **The Goal:** Create a "Top Secret" message that is invisible when the page loads. When the user clicks a "Reveal" button, the message appears. When they click "Hide," it vanishes again.
* **The Logic:**
* Write a secret message and use CSS to set its `display` to `none` (so it's hidden).
* Make two buttons: "Show" and "Hide."
* The "Show" button should change the style back to `block` or `inline`.
* The "Hide" button sets it back to `none`.
 [example](https://spydecoder.oneapp.dev/)


## 🍪 Challenge 4: The Clicker Game (Level 1)

This introduces the idea of **Variables** and **Math**.

* **The Goal:** Create a "Cookie Clicker" clone. Every time a button is clicked, a number on the screen goes up by 1.
* **The Logic:**
* Create a variable in JavaScript (like `let score = 0;`).
* Create a text element that displays the number `0`.
* Every time the button is clicked, tell JS to do two things:
1. Add 1 to the `score` variable.
2. Update the text on the screen to show the new number.

 [example](https://clickerg.oneapp.dev/)



## 🪄 Challenge 5: The Growth Ray

This focuses on **CSS Property manipulation** beyond just colors.

* **The Goal:** Put an image or a giant emoji on the screen. Create two buttons: "Shrink" and "Grow."
* **The Logic:**
* The "Grow" button should change the `width` of the image to be larger (e.g., 500px).
* The "Shrink" button should change the `width` to be smaller (e.g., 50px).
 [example](https://rayg.oneapp.dev/)
