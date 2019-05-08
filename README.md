# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) React Context Lightbulb Deliverable

## Getting Started

**FIRST** Use `create-react-app` to create a new react app. Name it whatever you want.

**NEXT** cd into the directory you just created. Open it up in your favorite code editor then run `npm start` to start your server up.

* Make sure that as you go, you frequently check the site to ensure your changes are all reflecting accurately!

## Objectives

We're going to be making a fairly simple app using React Context. From the [React Docs](https://reactjs.org/docs/context.html):
> Context is designed to share data that can be considered “global” for a tree of React components, such as the **current authenticated user**, **theme**, or **preferred language**.

In this deliverable, we'll be focusing mainly on the **theme** aspect.

There are two parts to this deliverable, the first part is very similar to the code-along done earlier, the second part is putting it to use as a theme.

#### Part One Objectives
* Create a "lightbulb" that changes colors when a button is pressed. This should determined by a boolean passed down to it via the consumer
* Create a button or switch that turns the light on/off. Have the button change based on whether the lightbulb is turned on or off.

#### Part Two Objectives
* Create at least one page with some styling. When the lightbulb is on, change the syling to light mode, and when it is off, have the styling in dark mode.

## Part One

#### LightContext
Add a `LightContext.js` to your `src` file. Use `React.createContext` to create a context with two values: 
* `on: boolean`
* `toggleSwitch: function`
Make sure to export it

#### Bulb and Switch
Create two new components, `Bulb` and `Switch`. Make them functional components. For now, just make them static components and give them basic styling (ie. make your `Bulb` component round).

#### Start Building
Clear out the contents of your `App.js` and make it a class component so you can construct state that mirrors your `LightContent` Context. 
* Import your `Bulb` and `Switch`, and `LightContext`
* set your state and define your `toggleSwitch` function.
> NOTE: if you are defining your `toggleSwitch` function outside of your state, you must use the constructor when defining state.

* Wrap your `Bulb` and `Switch` components in a Provider and give it the value of state.

#### Consume!
In your `Bulb` component, wrap your node in a Consumer and open up an anonymous function, you should only need one argument—`on`. Use a ternary statement to determine the color of your light based on the value of the argument.

In your `Switch` component, wrap your switch in a Consumer and pass in both the `toggleSwitch` function and the status of the the light. Assign your function to "onClick" and change something about your switch based on whether the light is on or off.

#### Test it out!
You should have a working on/off switch for your light now! You can use this basis to toggle your light/dark mode! 
#### **COMMIT**

## Part Two (Bonus)

This section is all about applying the principles that you've been practicing! Make a branch of your project if you want to keep your part one nice and clean/functional, or just carry on. This section is all about you!

Create a basic page; you can do a contact page, a blog page, or some other basic information page. If you want to really push yourself, implement `react-router-dom` and do multiple pages! Place your bulb and toggle switch somewhere on the page and use it to change between light and dark modes in your styling.
