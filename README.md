order of nesting
app.js->restaurantCard.js->RestaurantMenu->restaurantCategory->itemList.js

in Link tag
To will determine the target url which will go up once the link is clicked

episode 11:
useContext
loggedInUser context is tied to setUserName state and setUserName is forwarded to the input in body.js
so whenever input changes -> setUserName changes -> loggedInUser changes->entire context changes

redux Toolkit flow-
-Install @reduxjs/toolkit and react-redux
-build our store
-connect our store to our app
-slice(cartSlice)
-dispatch(action)
-selector(read)

# types of testing (developer)

-unit testing
-integration testing
-end to end testing

# setting up testing in our app

(note all packages are in dev dependency mode)
-install react testing library
-install jest
-install babel dependencies
-configure babel in babel.config.js
-use parcel config file to disable default babel transpilation
-writing jest configuration (npx jest --init)
-install jsdom
-install @babel/preset-react (to make jsx work in test cases)
-include @babel/preset-react in our babel config
-install @testing-library/jest-dom (for functions like these-> toBeInTheDocument() )
