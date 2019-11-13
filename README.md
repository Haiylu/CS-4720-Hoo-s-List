# CS-4720-Hoo-s-List
Allows college student to buy and sell products

# Setup Instructions

1) Clone repo
2) cd into the app folder
3) Run 'npm install' to install all the dependencies
4) Try 'expo start' to see if expo will spin up a development server
5) You may need to reinstall/update expo cli, fresh install is 'npm install -g expo-cli'

# Development Instructions

I think the best practice is going to be having master always be a building, working, no errors version of the app. So only push to master if your code works completely and you can sucessfully merge the code with any other changes. 

We should each create our own 'branch' for doing development, this way we can easily push and merge code. I recommend using Git Kraken (https://www.gitkraken.com/) for github file managing. Its really easy to use and setup, and has a lot of tools to merge and see changes in files. 

# Design Thoughts

So for how we structure the app, I currently have 3 'screens' set up [Profile, Search, Add Listing]. These will be the main files that you edit the JSX of the 'return' statement to modify which components are displayed on which screens. Any components you create should go into the 'components' folder, and be imported to the screen files.

As for data flow, We should decide on what database/hosting to use so that we can get the dataflow up and running. This will be the main thing that holds development back since it is critical for how we display components. At the moment it will likely be necessary to create some dummy object in the 'screens' file you are working on, and use that to pass data to your components.

# Misc

Feel free to update this README with any changes/updates/weird things in the project just so we have a log of what needs fixing, adding, changing, etc.

# Color Palette
https://coolors.co/fb3640-605f5e-1d3461-1f487e-247ba0
Main: #1D3461 - Space Cadet

## Helpful Links
 - https://ionicons.com/
 - https://docs.google.com/document/d/1VnJXDyeujRImqZfhIHzo5I-0_W2QPP_d3TdCj6qW0Nw/edit

## CHANGELOG


