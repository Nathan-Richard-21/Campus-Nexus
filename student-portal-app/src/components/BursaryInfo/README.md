# Bursary Information Component

This component provides a modern, visually appealing interface for South African university bursaries, with a focus on Walter Sisulu University students.

## Features

- **Modern UI Design**: Clean layout with card-based design and subtle animations
- **Comprehensive Filters**: Search, filter by university, field of study, and degree level
- **Visual Status Indicators**: Color-coded deadline indicators to show urgency
- **Responsive Design**: Adapts to different screen sizes for optimal viewing on all devices
- **Detailed Bursary Information**: Complete information including amounts, requirements, and deadlines
- **Animation Effects**: Smooth transitions and loading states using Framer Motion
- **Direct Application Links**: Links to apply for each bursary

## Usage

Import and use the component in your React application:

```jsx
import BursaryInfo from '../components/BursaryInfo';

function App() {
  return (
    <div className="App">
      <BursaryInfo />
    </div>
  );
}
```

## Data Structure

Each bursary contains the following information:

- **id**: Unique identifier
- **name**: Bursary name
- **description**: Detailed description
- **university**: University or institutions where the bursary can be used
- **faculty** (optional): Specific faculty if applicable
- **amount** (optional): Monetary value or coverage
- **applicationLink**: URL to apply for the bursary
- **logo** (optional): Logo image URL
- **deadline**: Application deadline date
- **requirements**: Array of eligibility requirements
- **field**: Field of study
- **degree**: Degree level (Undergraduate, Postgraduate, etc.)
- **isFeatured** (optional): Boolean to mark featured bursaries

## API Integration

In the current implementation, mock data is used. For production:

1. Replace the mock data with an actual API call
2. Update the `fetchBursaryInfo` function to use your API endpoint
3. Ensure your API returns data in the format expected by the component

## Design Considerations

- **Colors**: Uses a purple/blue gradient for buttons and accents
- **Typography**: Uses Poppins font family for a modern look
- **Animation**: Subtle fade-in and rise animations for a dynamic feel
- **Accessibility**: Includes proper ARIA labels and semantic HTML
