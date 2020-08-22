# How to create a reusable TabView Component with LazyLoading Tabs in Anguar

When I started to learn Angular, I was wondering myself how to create reusable Components like Tables, Accordion Panel and TabViews. In this article I want to show you, how I created a TabView Component. As a beginner it was a bit hard to understand the templating system in Angular and how to create something reusable out of it. I always think to use components is good, but to know how to create your own ones is much more worth. Before we implement this component, lets look at the requirements we have in our TabView:

1. The TabView should be reusable. That means, the content of any Tab must be defined outside of the Tab.
2. Large content should be created lazy to save loading time.
3. The Header should be either defined as string or as a template.
4. The first Tab should be selected, if needed.

# Setup

I'm using Angular 9 and that the TabView looks beautiful, I use the Bulma CSS Framework. So to setup our project I used the following command.

ng new custom-tab-component -p custom --inlineStyle=true --style=scss --routing=false

Next we install Bulma with the following command.

npm i bulma

After it has been installed, you need to link it to styles.scss, in order to use it.

@import "./../node_modules/bulma/bulma.sass";

Perfect, now we can start creating our TabView Component.

For that, create two component via cli with the following two commands

ng g c tabview

ng g c tabview/tab

Let's start with the Tab Component and bring some life into it.
