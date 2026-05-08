---

## 🌓 Mission: The Great Theme Toggle

Your goal is to build a "Light Switch" for your website. Instead of just having a plain white page, you’re going to give your users the power to choose between **Light Mode** and **Dark Mode**.

### Phase 1: The Skeleton (HTML)

Before we can write any logic, we need the physical buttons on the page.

* **Create two buttons:** One for "Light" and one for "Dark."
* **Give them IDs:** In HTML, an `id` is like a person's name. You need to give each button a unique name so that JavaScript can find them later. If you don't name them, JavaScript won't know which button is being clicked!

### Phase 2: The Brain (JavaScript)

Now, we need to write the instructions. Think of this in three simple steps:

1. **The "Pointing" Step:** You need to tell JavaScript to go look at your HTML and find those buttons you just named. You’ll save these "locations" into variables.
2. **The "Eavesdropping" Step:** You need to tell the buttons to listen for a **click**. In coding, we call this an **Event Listener**. It’s like telling the button, *"Stay alert! If someone clicks you, I want you to do something immediately."*
3. **The "Magic Action" Step:** Inside that click listener, you need to write a command that talks to the **document body**. You’ll want to change its **style**—specifically the **background color**.

---
