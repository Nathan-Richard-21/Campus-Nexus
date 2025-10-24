# Student Portal App

build by infinity cyberetech

## Overview
The Student Portal App is designed to streamline various student services and improve communication between students and administration. The application features an AI-powered chatbot, bursary information access, campus navigation, online food ordering, special case handling, module selection, and course registration functionalities.

## Features
1. **AI-Powered Chatbot**: Provides instant responses to student inquiries regarding their information and connects them with relevant personnel if needed.
2. **Bursary Information**: Offers easy access to bursary details and application processes, including updates on NSFAS and other bursaries.
3. **Campus Navigation**: Assists new students in navigating the campus with building-by-building directions.
4. **Food Ordering System**: Allows students to order food online and collect it at designated locations, reducing wait times.
5. **Special Cases Management**: Streamlines the handling of special cases for admin staff, allowing them to focus on critical tasks.
6. **Online Module Selection**: Provides a platform for students to browse and select modules, with recommendations based on academic history.
7. **Course Registration and Removal**: Enables students to manage their course selections online, with real-time updates and notifications.

## Project Structure
```
student-portal-app
├── public
│   ├── index.html
│   ├── styles
│   │   └── main.css
│   └── scripts
│       └── main.js
├── src
│   ├── components
│   │   ├── Chatbot
│   │   │   ├── Chatbot.tsx
│   │   │   └── Chatbot.css
│   │   ├── BursaryInfo
│   │   │   ├── BursaryInfo.tsx
│   │   │   └── BursaryInfo.css
│   │   ├── CampusNavigation
│   │   │   ├── CampusNavigation.tsx
│   │   │   └── CampusNavigation.css
│   │   ├── FoodOrdering
│   │   │   ├── FoodOrdering.tsx
│   │   │   └── FoodOrdering.css
│   │   ├── SpecialCases
│   │   │   ├── SpecialCases.tsx
│   │   │   └── SpecialCases.css
│   │   ├── ModuleSelection
│   │   │   ├── ModuleSelection.tsx
│   │   │   └── ModuleSelection.css
│   │   ├── CourseRegistration
│   │   │   ├── CourseRegistration.tsx
│   │   │   └── CourseRegistration.css
│   │   └── Shared
│       ├── Header.tsx
│       ├── Footer.tsx
│       └── NavigationMenu.tsx
│   ├── App.tsx
│   └── index.tsx
├── package.json
├── tsconfig.json
└── README.md
```

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd student-portal-app
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Start the application:
   ```
   npm start
   ```

## Usage Guidelines
- Access the chatbot for quick inquiries.
- Navigate to the bursary section for information and applications.
- Use the campus navigation feature for assistance in finding buildings.
- Order food through the food ordering system.
- Manage modules and courses through the respective sections in the app.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.
