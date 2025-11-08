# Quantumedge Software

🔗 Live Links
[GitHub Repository](https://github.com/meshal10613/Quantumedge-Software)
[Frontend Live Demo](https://quantumedge-77a74.web.app/)

## 📌 Project Setup Instructions

### ⚙️ Clone Repository
```bash
git clone https://github.com/meshal10613/Quantumedge-Software

cd Quantumedge-Software
```

### 🖥️ Frontend Setup (client/)

1. goto the client folder and install dependencies
```bash
cd Quantumedge-Client

npm install
```

2. create ```.env ```/ ```.env.local ``` file in the client side and set the variables
```bash
VITE_apiKey=AIzaSyA9ktcfFOLUKfnmjyPonySU5PxV6igGFG4
VITE_authDomain=quantumedge-77a74.firebaseapp.com
VITE_projectId=quantumedge-77a74
VITE_storageBucket=quantumedge-77a74.firebasestorage.app
VITE_messagingSenderId=39654861398
VITE_appId=1:39654861398:web:f1498d31d43aa0d93ce9f7
```

3. and then run the client on local computer
```bash
npm run dev
```

### ⚙️ Backend Setup (server/)

1. goto the server folder and install dependencies
```bash
cd Quantumedge-Server

npm install
```

2. create ```.env ``` file in the server side and set the variables
```bash
VITE_USERNAME=quantumedge
VITE_PASSWORD=IvrzkpsCsAkgIlAb

MONGODB_URI=mongodb+srv://quantumedge:IvrzkpsCsAkgIlAb@meshal10613.mbbtx0s.mongodb.net/?retryWrites=true&w=majority&appName=meshal10613

JWT_ACCESS_TOKEN=fdb6a37d486b5126ed8f5e42b98263570e21863d544d0263304b04be535a22cf36975b6f15e86da872c87316c2450e5ffca39fa59d4af81ff4222b2c3efc4c01

PORT=3000
CORS_ORIGINS=http://localhost:5173, https://quantumedge-77a74.web.app
```

3. and then run the server on local computer
```bash
nodemon index.js / node index.js
```