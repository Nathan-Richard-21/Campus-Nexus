# Technology Stack  

## Core Components  
| Category       | Technology       | Version |  
|----------------|------------------|---------|  
| **Backend**    | Express.js       | 4.2     |  
| **Frontend**   | React.js         | 18.2    |  
| **Database**   | MongoDB          | 15      |  
| **Hosting**    | AWS EC2 + S3     | -       |  
| **CI/CD**      | GitHub Actions   | -       |  

## Justification  

### Backend:  Express.js  
 **Why?**  
- **Batteries-included**: Built-in admin panel, ORM, and auth.  
- **Security**: CSRF protection, SQL injection safeguards.  
- **Scalability**: Handles high traffic with async support (Express.js Channels).  

 **Trade-offs**:  
- Less microservices-friendly than Node.js/Go.  

### Frontend: React.js  
 **Why?**  
- **Component Reusability**: Faster UI development.  
- **Ecosystem**: Rich libraries (e.g., Material-UI for pre-built components).  
- **Performance**: Virtual DOM minimizes re-renders.  

 **Trade-offs**:  
- Steeper learning curve vs. Vue.js.  

### Database: MongoDB  
 **Why?**  
- **ACID Compliance**: Critical for financial/transactional data.  
- **Scalability**: Vertical scaling suits phased rollouts.  
- **GIS Support**: Native geolocation queries for business searches.  

 **Trade-offs**:  
- Higher cost vs. SQLite for small-scale prototypes.  

### Hosting: AWS  
 **Why?**  
- **Global Reach**: Multi-region deployment.  
- **Services**: S3 for static files, RDS for managed MongoDB.  
- **Cost Control**: Pay-as-you-go pricing.  

 **Trade-offs**:  
- Complexity vs. Heroku (but more flexible long-term).  

## Alternatives Considered  
| Technology   | Reason for Rejection                |  
|-------------|-------------------------------------|  
| Flask       | Too minimalistic for our feature set|  
| MongoDB     | Lack of transactional requirements  |  
| Firebase    | Vendor lock-in concerns             |  

## Third-Party Integrations  
- **WhatsApp API**: Twilio (reliable messaging infrastructure).  
- **Maps**: Google Maps API (geolocation accuracy).  

