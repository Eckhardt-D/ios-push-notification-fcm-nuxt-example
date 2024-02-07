// Import the firebase app / messaging packages
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js')
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js')

// Initialize app
const app = firebase.initializeApp({
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
})

// Initialize messaging
const messaging = firebase.messaging()

// Listen to bg messages
messaging.onBackgroundMessage(payload => {
  console.log("Received a bg message: ", payload);


  const title = payload.notification.title
  const notification = {
    body: "Notification Body",
    icon: "/icon.png"
  }

  // Show notification when message received
  self.registration.showNotification(title, notification);
})

