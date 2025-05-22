# Feature to Requirements Mapping

## Feature: AI Chatbot for Student Inquiries
**Functional Requirements:**
- Must respond to general student inquiries (info, fees, timetable)
- Must escalate complex queries to human staff
- Should maintain conversation history

**Non-Functional Requirements:**
- Response time < 2 seconds for 95% of queries
- System availability 24/7 (99% uptime SLA)
- Support 500 concurrent chatbot sessions

## Feature: Bursary Updates & Q&A Assistant
**Functional Requirements:**
- Display NSFAS and other bursary deadlines
- Provide application status updates
- Connect students to bursary officers via ticketing system

**Non-Functional Requirements:**
- Bursary data updated every 24 hours
- Support 10,000 concurrent users during peak periods
- Secure encryption of financial data (AES-256)

## Feature: Campus Navigation System
**Functional Requirements:**
- Provide turn-by-turn building directions
- Show accessible routes for disabled students
- Display key landmarks and facilities

**Non-Functional Requirements:**
- Maps load within 3 seconds on 4G connections
- Offline mode with pre-downloaded maps
- GPS accuracy within 5 meters

## Feature: Online Course Registration/Removal
**Functional Requirements:**
- Allow adding/dropping courses with 1 click
- Show real-time seat availability
- Prevent timetable conflicts

**Non-Functional Requirements:**
- Registration changes reflect within 5 minutes
- Handle 2,000 concurrent registrations
- Multi-factor authentication required

## Feature: Module Selection Assistant
**Functional Requirements:**
- Display complete yearbook modules
- Recommend based on academic history
- Show career pathway impacts

**Non-Functional Requirements:**
- Generate recommendations in <1 second
- Store selection history with encryption
- Mobile-friendly interface

## Feature: Food Ordering Platform (Should Have)
**Functional Requirements:**
- Browse cafeteria menus
- Pre-order and pay digitally
- Receive collection notifications

**Non-Functional Requirements:**
- Process orders within 30 seconds
- Integrate with campus payment system
- Support dietary filters (halal, vegan etc.)

## Feature: Special Case Workflow (Should Have)
**Functional Requirements:**
- Automatically triage routine cases
- Flag complex cases for admin review
- Maintain complete audit trails

**Non-Functional Requirements:**
- Load case files within 10 seconds
- Role-based access control
- 7-year records retention