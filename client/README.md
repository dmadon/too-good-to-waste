# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


swapped out: "google-maps-react":"^2.0.6" for google-map-react which is the newest and best version and this code crashed:
            <Map
              google={this.props.google}
              style={style}
              className={'map'}
              initialCenter={{
                lat: 32.979167,
                lng: -96.808891
              }}
              zoom={10}
              onClick={this.onMapClicked}
            >
              <Marker
                title={'Sprouts1'}
                onClick={this.onMarkerClick}
                name={'Sprouts #101 - Plano'}
                position={{ lat: 33.07010, lng: -96.77337 }} />
              <Marker
                title={'Sprouts2'}
                onClick={this.onMarkerClick}
                name={'Sprouts #103 - Dallas (Marsh Ln.'}
                position={{ lat: 32.90867, lng: -96.85540 }} />
              <Marker
                title={'Sprouts3'}
                onClick={this.onMarkerClick}
                name={'Sprouts #106 - Richardson'}
                position={{ lat: 32.97702, lng: -96.76494 }} />
              <Marker
                title={'Current Location'}
                onClick={this.onMarkerClick}
                name={'Current Location'}
                // icon={{
                //   url: "./assets/images/icon.png",
                //   anchor: new google.maps.Point(32, 32),
                //   scaledSize: new google.maps.Size(64, 64)
                // }}
                position={{ lat: 32.99, lng: -96.88 }} />
              <InfoWindow onClose={this.onInfoWindowClose}>
                {/* <div>
                      <h1>{this.state.selectedPlace.name}</h1>
                    </div> */}
              </InfoWindow>
            </Map>
          