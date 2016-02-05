# electron-prototype

Builds EFClass as a desktop app using [electron.io](http://electron.atom.io).

### Why is it interesting ?


 > #### Chromium :
 > It uses Chromium to render the web application and as we are only supporting chrome, this provides us a way to ensure our customers uses chrome.

 > #### Store the app locally:
 > The app could be bundled in the app locally so the client doesn;t have to wait for it to load and autoupdates of the app could be managed inside the app so the client doesn't need to download new versions manually.

 > #### Access to OS
 > Electron provides a bridge to interact with the OS so it could allow us to:
 >  - have read and write access to HDD
 >  - use OS features
 > 	- get away of the restrictions (eg. recorders) we are having.


### Problems found

1. Chromium is not Chrome due to this some features Chrome has are not implemented inside chromium and has to be implemented in nodeJS.
2. Chromium does not have WebSockets support and in order to support that we need to use a WebSocket library for NodeJS and bulid an interface to make our real time services use nodeJS WebSockets. ( As far as the student connects immediately to our ws server it will fail dramatically so, please use the teacher :) )
3. Now it load the app from our dev servers but in order to bundle it we need to solve some auth problems


### Installation

1. Clone the repo
2. `npm install`

### Run

- `./run.sh`

### Build the app package

- `./build.sh`
