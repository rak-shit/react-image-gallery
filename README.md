This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

## Firebase Configuration

In the project directory, you can run: 

### `npm i firebase` <br />

Go to : https://firebase.google.com/ and sign-in using your google account. Click on 'Go to console' on the top right corner.  <br />

Click on add a new project and create a new project in firebase. Then go to the project settings. Scroll down to the App section and replace the `const firebaseConfig` in 'src/firebase/index.js' with the below shown code.

![Configuration Setup](https://github.com/rak-shit/react-image-gallery/blob/master/Screenshot%202019-12-14%20at%201.17.52%20PM.png)

After fiishing the above step, click on the 'Database' option on the left side of the window. Then scroll down to the section of Realtime Database and the click on create database. Enable it in test mode to add data into your database. This will configure your firebase Realtime Database settings.

Then to add images into the firebase cloud storage, we need to click on the storage option on the left side of the window. Then go to the rules section of the storage database and make the required changes to make sure the rules of the storage database looks like below : 

![Storage Database Configuration](https://github.com/rak-shit/react-image-gallery/blob/master/Screenshot%202019-12-14%20at%201.17.14%20PM.png)

### To run project go to the project directory and run `npm start`.

The App looks like below :

![Notes App](https://github.com/rak-shit/react-image-gallery/blob/master/Screenshot%202019-12-14%20at%201.16.32%20PM.png)
