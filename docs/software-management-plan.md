"Software Management Plan" 
# Software Product Management Plan: Campusnexus

## Team Members & Roles
| Name              | Role               | Responsibilities                          |
|-------------------|--------------------|-------------------------------------------|
| Thalaga Makwela   | Product Owner      | - Prioritizes backlog <br> - Stakeholder communication |
| Welcome Molefe    | Scrum Master       | - Facilitates ceremonies <br> - Removes blockers |
| Nathan Chinoma    | Backend Developer  | - API development <br> - Database integration |
| Brilliant Matome  | Frontend Developer | - UI implementation <br> - Responsive design |
| Bunono Mhlakaza   | QA & Documentation | - Test cases <br> - Technical documentation |

## Project Timeline
| Milestone         | Key Deliverables                     | Deadline   | Status      |
|-------------------|--------------------------------------|------------|-------------|
| Sprint 1          | - Core chatbot functionality <br> - Student dashboard UI | 25/04/2023 | In Progress |
| Sprint 2          | - Campus navigation system <br> - Food ordering API | 02/05/2023 | Planned     |
| Sprint 3          | - Module selection feature <br> - Course registration API | 09/05/2023 | Planned     |
| Pilot Launch      | - Admin module deployment            | 23/05/2023 | Future      |

## Risk Management Plan
| Risk                          | Likelihood | Impact | Mitigation Strategy                          |
|-------------------------------|------------|--------|-----------------------------------------------|
| API integration delays        | Medium     | High   | Daily standup tracking <br> Pair programming |
| UI responsiveness issues      | High       | Medium | Cross-device testing early in sprints        |
| Low student adoption          | Medium     | High   | Conduct user surveys <br> Beta testing group |
| Data security concerns        | Low        | Critical | Implement OAuth2 <br> Regular audits        |

## Technology Stack
We followed a MERN stack which consists of an ecosystem using MongoDB, Expressjs, React and Node js
### Backend
- **Expressjs**: Chosen for rapid development and robust ORM capabilities
- **sql-lite and mongo stack**: Selected for ACID compliance in bursary transactions

### Frontend
- **React.js**: Enables reusable components and responsive design


### DevOps
- **GitHub Actions**: CI/CD pipeline for automated testing


### AI Components
- **Dialogflow**: Natural language processing for chatbot
- **Recommendation Engine**: Python-based for module suggestions

## Agile Implementation
### Sprint Cycle
- **Duration**: 2 weeks
- **Ceremonies**:
  - Daily standups (async via WhatsApp)
  - Bi-weekly planning/review (Microsoft Teams)

### Artifacts
- **Product Backlog**: Prioritized in GitHub Projects
- **Sprint Burndown**: Tracked via GitHub Issues
