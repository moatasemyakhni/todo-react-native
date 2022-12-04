# MyTodos: React Native

>## Introduction
<br>

MyTodos logs user using [facebook login api](https://developers.facebook.com/docs/facebook-login/). It allows the user to view pre-assigned todo list.
<br><br>
**:loudspeaker: Note**
<br>

MyTodos has no backend, it uses a [fake api](https://my-json-server.typicode.com/moatasemyakhni/mockjson/db) generated using [mockend](https://mockend.com/).
<br><br>
<details>
    <summary> Implementation</summary> -->
| Login | Signup| Setting
| -----------------| -----| ----|
| <img src="./readme/Login.jpg" height="500" width="250" alt="RunCode" />| <img src="./readme/Signup.jpg" height="500" width="250" alt="RunCode" />|<img src="./readme/Setting.jpg" height="500" width="250" alt="RunCode" />|

| Todo List | Details
| -----------------| -----|
| <img src="./readme/Todo.jpg" height="500" width="250" alt="RunCode" />| <img src="./readme/Details.jpg" height="500" width="250" alt="RunCode" />|

</details>
<br><br>

>## Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```
* expo CLI
   ```sh
   npm install -g expo-cli
   ```
* eas builder
    ```sh
    npm install -g eas-cli
    ```

>## Installation
1. clone repo
    ```sh
    git clone https://github.com/moatasemyakhni/todo-react-native.git
    ```
2. npm install
    ```sh
    npm install
    ```
3. include in app.json
    ```json
    ...

    "plugins": [
      [
        "react-native-fbsdk-next",
        {
          "appID": "xxxxxxxx",
          "clientToken": "xxxxxxxxxxxxxx",
          "displayName": "your-fb-project-name",
          "scheme": "fbxxxxxxxx",
          "advertiserIDCollectionEnabled": false,
          "autoLogAppEventsEnabled": false,
          "isAutoInitEnabled": true,
          "iosUserTrackingPermission": "This identifier will be used to deliver personalized ads to you."
        }
      ],
      [
        "expo-image-picker",
        {
          "photosPermission": "The app accesses your photos to change profile picture."
        }
      ]
    ],

    ...
    "android": {
        ...
        "package": "com.packagename.todos"
        ...
    }
    ...
    "extra": {
      "eas": {
        "projectId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx"
      }
      ...
    ```
