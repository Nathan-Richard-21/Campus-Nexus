import React, { useState, useEffect, useRef } from 'react';
import './Chatbot.css';

// Sample suggestions to help users get started
const SAMPLE_QUESTIONS = [
  "How do I apply for NSFAS?",
  "What documents do I need for a bursary?",
  "How can I get a fee statement?",
  "I forgot my student email password",
  "When are exam results released?",
  "How do I replace a lost student card?"
];

// OpenAI API integration configuration
const OPENAI_API_ENDPOINT = 'https://api.openai.com/v1/chat/completions';
const API_KEY = process.env.REACT_APP_OPENAI_API_KEY || 'your_api_key_here'; // Use environment variable

// OpenAI API function
const queryOpenAI = async (query: string): Promise<string> => {
  try {
    // System instruction to limit responses to academic and campus-related questions
    const systemPrompt = `You are a helpful campus assistant for WSU (Walter Sisulu University). 
    Only answer questions related to academic matters, campus facilities, or student services.
    If asked about non-academic topics, politely decline and redirect to academic topics.
    Keep responses concise and informative.`;
    
    const response = await fetch(OPENAI_API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: query }
        ],
        max_tokens: 150,
        temperature: 0.7
      })
    });

    if (!response.ok) {
      throw new Error(`API request failed with status: ${response.status}`);
    }

    const data = await response.json();
    return data.choices[0].message.content.trim();
  } catch (error) {
    console.error('OpenAI API Error:', error);
    return "I'm having trouble connecting to my knowledge base at the moment. Please try asking a specific question about campus services, finances, or academic matters.";
  }
};

// Define message interface
interface Message {
    text: string;
    sender: 'user' | 'bot';
    timestamp: Date;
    isLoading?: boolean;
    category?: Category;
}

// Knowledge base categories
enum Category {
    Finance = "Finance",
    StudentFees = "Student Fees",
    Admin = "Administrative",
    ICT = "ICT",
    Examination = "Examination",
    Consultation = "General Consultation",
    Unknown = "Unknown"
}

const Chatbot: React.FC = () => {
    const [userInput, setUserInput] = useState('');
    const [messages, setMessages] = useState<Message[]>([]);
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    
    // Welcome message on component mount
    useEffect(() => {
        const welcomeMessage: Message = {
            text: "Hello! I'm WSU Campus Assistant. How can I help you today? You can ask me about finances, student fees, admin processes, ICT services, or examination matters.",
            sender: 'bot',
            timestamp: new Date(),
            category: Category.Consultation
        };
        
        setTimeout(() => {
            setMessages([welcomeMessage]);
        }, 1000);
    }, []);

    // Auto-scroll to bottom of chat
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserInput(event.target.value);
    };

    // Handle "Enter" key press
    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSendMessage();
        }
    };

    // Determine the category of the user's question
    const determineCategory = (message: string): Category => {
        message = message.toLowerCase();
        
        if (message.includes('nsfas') || 
            message.includes('allowance') || 
            message.includes('bursary') || 
            message.includes('financial aid')) {
            return Category.Finance;
        }
        
        if (message.includes('fee') || 
            message.includes('payment') ||
            message.includes('balance') ||
            message.includes('pay online')) {
            return Category.StudentFees;
        }
        
        if (message.includes('portal') || 
            message.includes('student card') || 
            message.includes('personal details') ||
            message.includes('registration')) {
            return Category.Admin;
        }
        
        if (message.includes('password') || 
            message.includes('moodle') || 
            message.includes('email') ||
            message.includes('wifi') ||
            message.includes('office 365') ||
            message.includes('log in')) {
            return Category.ICT;
        }
        
        if (message.includes('exam') || 
            message.includes('transcript') || 
            message.includes('result') ||
            message.includes('remark') ||
            message.includes('graduate') ||
            message.includes('modules')) {
            return Category.Examination;
        }
        
        return Category.Unknown;
    };

    // Get bot response based on user input and category
    const getBotResponse = (userMessage: string, category: Category): string => {
        const normalizedMessage = userMessage.toLowerCase();
        
        // Finance category responses
        if (category === Category.Finance) {
            if (normalizedMessage.includes('apply for nsfas') || normalizedMessage.includes('how do i apply for nsfas')) {
                return "To apply for NSFAS, visit the NSFAS website and apply online. You'll need a valid email, phone number, certified ID copy, and proof of income. WSU does not handle applications directly.";
            }
            if (normalizedMessage.includes('nsfas allowance') || normalizedMessage.includes('when will allowance') || normalizedMessage.includes('allowance')) {
                return "NSFAS allowances are usually paid monthly after registration and funding confirmation. Check your student email for payment schedules or contact the WSU Financial Aid Office.";
            }
            if (normalizedMessage.includes('bursary application') || normalizedMessage.includes('documents for bursary') || normalizedMessage.includes('bursary documents')) {
                return "For bursary applications, you'll need certified ID, academic transcript, proof of registration, proof of income, and a motivational letter. Some bursaries may have extra requirements.";
            }
            if (normalizedMessage.includes('banking details') || normalizedMessage.includes('update bank')) {
                return "To update banking details, log in to the WSU student portal or visit the Financial Aid Office with your bank confirmation letter and student card. In-person verification is often required.";
            }
            if (normalizedMessage.includes('allowance not showing')) {
                return "If your allowance is not showing, confirm that your registration is complete, banking details are correct, and there are no holds on your account. Contact the Financial Aid Office if the issue persists.";
            }
            if (normalizedMessage.includes('appeal') || normalizedMessage.includes('financial aid appeal')) {
                return "Yes, you can appeal for financial aid. Appeals must be submitted with valid reasons, supporting documents, and within the official appeal period. Visit the campus finance office for guidance.";
            }
            if (normalizedMessage.includes('bursary deadline') || normalizedMessage.includes('deadline for bursary')) {
                return "Bursary application deadlines vary depending on the specific bursary. It's best to regularly check your student email, the WSU website, or campus notice boards for current deadlines.";
            }
            
            // Default finance response
            return "For financial matters including NSFAS, bursaries, and allowances, I recommend contacting the Financial Aid Office directly. They can provide you with the most accurate and up-to-date information specific to your situation.";
        }
        
        // Student Fees category responses
        if (category === Category.StudentFees) {
            if (normalizedMessage.includes('outstanding balance') || normalizedMessage.includes('how much do i owe')) {
                return "To check your outstanding balance, log in to the WSU Student Portal or request a fee statement at the Student Accounts Office.";
            }
            if (normalizedMessage.includes('payment plan')) {
                return "To apply for a payment plan, visit the Student Fees Office. You'll need to complete a payment arrangement form and provide proof of income.";
            }
            if (normalizedMessage.includes('fee statement')) {
                return "You can download your fee statement from the student portal or request one from the Student Accounts section on campus.";
            }
            if (normalizedMessage.includes('miss payment') || normalizedMessage.includes('miss deadline')) {
                return "If you miss the payment deadline, you may face registration holds or exam access restrictions. Visit the finance office to discuss your options as soon as possible.";
            }
            if (normalizedMessage.includes('pay online') || normalizedMessage.includes('pay in person')) {
                return "Both online and in-person payment options are available. Use WSU's banking details to pay via EFT or visit campus cashiers.";
            }
            if (normalizedMessage.includes('financial clearance') || normalizedMessage.includes('clearance letter')) {
                return "Once your fees are paid or a payment plan is in place, visit the Student Fees Office for a financial clearance letter.";
            }
            if (normalizedMessage.includes('separat') || normalizedMessage.includes('separate tuition') || normalizedMessage.includes('residence payment')) {
                return "Yes, you can separate tuition and residence payments. Make sure to use the correct reference for each when paying and indicate the purpose in your payment proof.";
            }
            
            // Default fees response
            return "For questions about student fees, payments, or financial clearance, please visit the Student Fees Office with your student card. They can access your specific account information and advise accordingly.";
        }
        
        // Admin category responses
        if (category === Category.Admin) {
            if (normalizedMessage.includes('unblock') || normalizedMessage.includes('portal block')) {
                return "To unblock your portal, contact the ICT Helpdesk or Admin Office. If the block is due to financial reasons, you'll need to clear those issues first.";
            }
            if (normalizedMessage.includes('update personal') || normalizedMessage.includes('surname') || normalizedMessage.includes('change name')) {
                return "To update personal details (e.g., surname), visit the Admin Office with a certified ID and official documents (e.g., marriage certificate or affidavit).";
            }
            if (normalizedMessage.includes('student card') || normalizedMessage.includes('lost card')) {
                return "To replace a lost student card, report the loss at Admin, bring an affidavit, certified ID, and pay the replacement fee.";
            }
            if (normalizedMessage.includes('proof of registration')) {
                return "You can download proof of registration from the student portal or request it at Admin.";
            }
            if (normalizedMessage.includes('academic letter') || normalizedMessage.includes('certified academic')) {
                return "For a certified academic letter, submit a request at the Admin Office or via the official WSU student portal if that option is available.";
            }
            if (normalizedMessage.includes('contact details') || normalizedMessage.includes('update contact')) {
                return "Yes, you can update your contact details. Visit Admin with your student card and certified ID or email them using your student email.";
            }
            if (normalizedMessage.includes('study permit') || normalizedMessage.includes('permit letter')) {
                return "To request a study permit letter, visit Admin with your passport, student card, and proof of registration.";
            }
            
            // Default admin response
            return "For administrative issues, I recommend visiting the Admin Office with your student card and explaining your situation. For specific questions about student cards, personal details updates, or registration documents, please provide more details.";
        }
        
        // ICT category responses
        if (category === Category.ICT) {
            if (normalizedMessage.includes('forgot password') || normalizedMessage.includes('email password')) {
                return "If you forgot your student email password, contact ICT Helpdesk or email helpdesk@wsu.ac.za. You'll need to verify your identity.";
            }
            if (normalizedMessage.includes('moodle')) {
                return "If Moodle isn't working, check your login credentials and browser. If the issue persists, contact Moodle support via your student email.";
            }
            if (normalizedMessage.includes('log in') || normalizedMessage.includes('login') || normalizedMessage.includes('can\'t log')) {
                return "If you can't log in to the student portal, double-check your username and password. If locked out, contact ICT for a password reset.";
            }
            if (normalizedMessage.includes('wifi') || normalizedMessage.includes('internet')) {
                return "To access the university WiFi, use your student credentials to connect to the WSU-Student network. Ask ICT for setup help if needed.";
            }
            if (normalizedMessage.includes('email address') || normalizedMessage.includes('login info')) {
                return "You should receive your email address and login info upon registration. If you missed it, visit ICT or Admin.";
            }
            if (normalizedMessage.includes('office 365') || normalizedMessage.includes('activate office')) {
                return "To activate Office 365 as a student, go to office.com, log in using your WSU student email, and follow the prompts.";
            }
            if (normalizedMessage.includes('online class') || normalizedMessage.includes('access class')) {
                return "If you can't access online classes, check your WiFi, Moodle access, and device compatibility. Contact ICT or your lecturer if it's a Moodle link issue.";
            }
            
            // Default ICT response
            return "For ICT-related issues like password resets, Moodle access, or WiFi connectivity, please contact the ICT Helpdesk at helpdesk@wsu.ac.za or visit them in person.";
        }
        
        // Examination category responses
        if (category === Category.Examination) {
            if (normalizedMessage.includes('academic transcript') || normalizedMessage.includes('get transcript')) {
                return "To get your academic transcript, apply online through the student portal or visit the Exams Office. Proof of payment is required.";
            }
            if (normalizedMessage.includes('exam results') || normalizedMessage.includes('when results')) {
                return "Exam results are usually released 2–4 weeks after exams. Check the academic calendar or student portal for exact dates.";
            }
            if (normalizedMessage.includes('remark') || normalizedMessage.includes('apply for remark')) {
                return "To apply for a remark, visit the Exams Office within 14 days of results release. Proof of payment is required for this service.";
            }
            if (normalizedMessage.includes('graduate') || normalizedMessage.includes('graduation require')) {
                return "To graduate, you need all modules passed, fees paid, and documentation completed. Check with Exams & Admin offices for specific requirements.";
            }
            if (normalizedMessage.includes('graduation clearance')) {
                return "To request graduation clearance, visit the Exams Office for clearance forms. You must clear all academic and financial obligations.";
            }
            if (normalizedMessage.includes('qualification') || normalizedMessage.includes('confirmation letter')) {
                return "For a qualification confirmation letter, submit a request at the Exams or Admin office. Provide your ID and student number.";
            }
            if (normalizedMessage.includes('missing module') || normalizedMessage.includes('incorrect mark')) {
                return "If you have missing modules or incorrect marks, contact your lecturer immediately. If the issue remains unresolved, go to the Exams Office with evidence.";
            }
            
            // Default examination response
            return "For examination-related inquiries about transcripts, results, or graduation requirements, please visit the Examinations Office with your student card. Each request may have specific requirements and waiting periods.";
        }
        
        // Consultation category responses
        if (category === Category.Consultation) {
            if (normalizedMessage.includes('which office') || normalizedMessage.includes('where to go')) {
                return "If you don't know which office to visit, briefly explain your issue to a student assistant or admin staff on campus—they'll guide you to the right place.";
            }
            if (normalizedMessage.includes('lost student card')) {
                return "If you lost your student card, report it at Admin, bring an affidavit, and pay for a new card.";
            }
            if (normalizedMessage.includes('financial') && normalizedMessage.includes('academic')) {
                return "Financial issues are handled by the Finance/Student Fees office. Academic issues go to Faculty Admin or Academic Advisors.";
            }
            if (normalizedMessage.includes('book consultation') || normalizedMessage.includes('appointment')) {
                return "To book a consultation with the right office, use the WSU portal, email the office directly, or visit them in person. Some offices may not require bookings.";
            }
            if (normalizedMessage.includes('deadline') && normalizedMessage.includes('miss')) {
                return "If you missed a deadline, visit Admin or the relevant office as soon as possible. Late appeals or extensions may be allowed under valid circumstances.";
            }
            if (normalizedMessage.includes('query') && (normalizedMessage.includes('no feedback') || normalizedMessage.includes('no response'))) {
                return "If you submitted a query but got no feedback, follow up via email or visit the office in person. Always keep a copy or screenshot of your original submission.";
            }
            if (normalizedMessage.includes('escalate') || normalizedMessage.includes('unresolved')) {
                return "To escalate unresolved issues, speak to the office supervisor, faculty officer, or Student Support Services. Escalations should be formal and documented.";
            }
            
            // Default consultation response
            return "For general inquiries or if you're not sure who to contact, the Admin Office or Student Support Services can direct you to the appropriate department. Be sure to bring your student card.";
        }
        
        // For questions not related to school
        if (normalizedMessage.includes('movie') || 
            normalizedMessage.includes('sport') || 
            normalizedMessage.includes('politics') ||
            normalizedMessage.includes('dating') ||
            normalizedMessage.includes('game') ||
            normalizedMessage.includes('weather')) {
            return "I'm designed to help with campus-related questions only. For questions about finances, fees, administrative matters, ICT services, or examination issues, I'm happy to assist.";
        }
        
        // For any other cases or unknown
        return "I'm not sure I understand your question. Could you rephrase it or specify if it's about finances, fees, administrative matters, ICT services, or examination issues?";
    };

    const handleSendMessage = async () => {
        if (userInput.trim() && !isTyping) {
            const userMessage: Message = {
                text: userInput,
                sender: 'user',
                timestamp: new Date()
            };
            
            setMessages(prev => [...prev, userMessage]);
            setUserInput('');
            setIsTyping(true);
            
            // Add temporary "typing" indicator message
            setMessages(prev => [...prev, { 
                text: '...',
                sender: 'bot' as const,
                timestamp: new Date(),
                isLoading: true
            }]);
            
            // Determine category and get response
            const category = determineCategory(userInput);
            let botResponse = getBotResponse(userInput, category);
            
            // If we don't have a specific answer in our knowledge base
            // and it's a valid academic question, use OpenAI (disabled by default)
            const useAI = false; // Set to true to enable OpenAI integration
            
            if (botResponse.includes("I'm not sure I understand") && useAI) {
                try {
                    botResponse = await queryOpenAI(userInput);
                } catch (error) {
                    console.error("Error querying OpenAI:", error);
                    // Keep the default response if OpenAI fails
                }
            }
            
            // Simulate reasonable response time
            setTimeout(() => {
                // Remove typing indicator and add real response
                setMessages(prev => {
                    const filtered = prev.filter(msg => !msg.isLoading);
                    return [...filtered, {
                        text: botResponse,
                        sender: 'bot' as const,
                        timestamp: new Date(),
                        category
                    }];
                });
                setIsTyping(false);
            }, Math.min(1000 + botResponse.length * 10, 3000)); // Dynamic timing based on response length
        }
    };

    // Function to handle clicking on a suggested question
    const handleSuggestionClick = (question: string) => {
        setUserInput(question);
        // Optional: Automatically send after selecting a suggestion
        // setTimeout(() => handleSendMessage(), 500);
    };

    return (
        <div className="chatbot-page">
            <div className="chatbot-page-content">
                {/* Left side - Campus Information */}
                <div className="campus-info">
                    <div className="info-card welcome-card">
                        <h3>Welcome to WSU Virtual Assistant</h3>
                        <p>
                            Get instant answers to your campus-related questions. Our virtual assistant is here to help you navigate campus services, finance matters, administrative processes, and more!
                        </p>
                    </div>
                    
                    <div className="info-card">
                        <h3>Office Hours</h3>
                        <p><strong>Admin Office:</strong> Mon-Fri 8:00-16:00</p>
                        <p><strong>Finance Office:</strong> Mon-Fri 8:30-15:30</p>
                        <p><strong>ICT Support:</strong> Mon-Fri 8:00-17:00</p>
                        <p><strong>Exam Office:</strong> Mon-Fri 8:00-16:00</p>
                    </div>
                    
                    <div className="info-card quick-links">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="#">Student Portal Login</a></li>
                            <li><a href="#">Academic Calendar</a></li>
                            <li><a href="#">Fee Structure</a></li>
                            <li><a href="#">NSFAS Information</a></li>
                            <li><a href="#">Campus Map</a></li>
                        </ul>
                    </div>
                </div>
                
                {/* Right side - Chatbot */}
                <div className="chatbot-container">
                    <div className="chatbot-header">
                        <div className="chatbot-avatar">
                            <div className="avatar-circle">
                                <span>WSU</span>
                            </div>
                        </div>
                        <div className="chatbot-info">
                            <h2>WSU Campus Assistant</h2>
                            <span className="online-status">
                                <span className="status-dot"></span>
                                Online
                            </span>
                        </div>
                    </div>
                    
                    <div className="chatbot-messages">
                        <div className="chatbot-banner">
                            <div className="decoration decoration-1"></div>
                            <div className="decoration decoration-2"></div>
                            <h3>WSU Student Support</h3>
                            <p>Ask questions about campus services, finances, exams, and more!</p>
                        </div>
                        
                        {messages.map((message, index) => (
                            <div 
                                key={index} 
                                className={`message ${message.sender} ${message.isLoading ? 'loading' : 'animate-in'}`}
                            >
                                {message.isLoading ? (
                                    <div className="typing-indicator">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                ) : (
                                    <React.Fragment>
                                        <div className="message-content">{message.text}</div>
                                        <div className="message-timestamp">
                                            {message.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                                        </div>
                                    </React.Fragment>
                                )}
                            </div>
                        ))}
                        
                        {/* Show suggestions if no messages yet (except the welcome message) */}
                        {messages.length <= 1 && (
                            <div className="chatbot-suggestions">
                                <p>Try asking:</p>
                                <div className="suggestion-chips">
                                    {SAMPLE_QUESTIONS.map((question, index) => (
                                        <div 
                                            key={index} 
                                            className="suggestion-chip"
                                            style={{ animationDelay: `${0.1 * index}s` }}
                                            onClick={() => handleSuggestionClick(question)}
                                        >
                                            {question}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        
                        <div ref={messagesEndRef} />
                    </div>
                    
                    <div className="chatbot-input">
                        <input
                            type="text"
                            value={userInput}
                            onChange={handleInputChange}
                            onKeyPress={handleKeyPress}
                            placeholder="Ask about finances, fees, admin, ICT or exams..."
                            disabled={isTyping}
                        />
                        <button 
                            onClick={handleSendMessage}
                            disabled={!userInput.trim() || isTyping}
                            className={isTyping ? 'disabled' : ''}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="22" y1="2" x2="11" y2="13"></line>
                                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chatbot;