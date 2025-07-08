import React, { useState } from 'react';
import './PhishingDemo.css';

// Animated confetti using styled divs
function Confetti() {
  return (
    <div className="confetti">
      {Array.from({ length: 40 }).map((_, i) => (
        <div
          key={i}
          className="confetti-piece"
          style={{
            left: `${Math.random() * 100}%`,
            backgroundColor: getRandomColor(),
            animationDelay: `${Math.random()}s`,
            width: `${Math.random() * 8 + 8}px`,
            height: `${Math.random() * 16 + 8}px`,
          }}
        />
      ))}
      <div className="confetti-message">
        
      </div>
    </div>
  );
}

function getRandomColor() {
  const colors = ['#0ff', '#f0f', '#ff0', '#0f0', '#f06', '#09f', '#fff'];
  return colors[Math.floor(Math.random() * colors.length)];
}

// 10 total questions
const allExamples = [
  {
    id: 1,
    subject: "Account Verification Required",
    body: "Dear user, your account will be suspended unless you verify your information. Click here: http://suspicious-link.com",
    isPhishing: true,
    explanation: "Urgency and a suspicious link are classic phishing tactics."
  },
  {
    id: 2,
    subject: "Your Receipt from Amazon",
    body: "Thank you for your purchase! View your order details in your Amazon account.",
    isPhishing: false,
    explanation: "No suspicious links or urgent requests. Looks legitimate."
  },
  {
    id: 3,
    subject: "Password Expiry Notification",
    body: "Your password expires today! Reset it now: http://fake-reset.com",
    isPhishing: true,
    explanation: "Fake urgency and a non-official reset link."
  },
  {
    id: 4,
    subject: "Unusual Login Attempt",
    body: "We detected an unusual login attempt from a new device. If this was not you, please secure your account here: http://security-alert.com",
    isPhishing: true,
    explanation: "Unusual login alerts with suspicious links are common phishing tactics."
  },
  {
    id: 5,
    subject: "Company Policy Update",
    body: "Please review the updated company policy attached to this email. If you have any questions, contact HR.",
    isPhishing: false,
    explanation: "No suspicious links or urgent requests. Looks like a normal internal email."
  },
  {
    id: 6,
    subject: "Invoice Attached",
    body: "Please see the attached invoice and remit payment immediately to avoid late fees.",
    isPhishing: true,
    explanation: "Unexpected invoices and urgent payment requests are common phishing tactics."
  },
  {
    id: 7,
    subject: "Congratulations! You've Won a Gift Card",
    body: "Click here to claim your $500 Amazon gift card: http://amaz0n-prizes.com",
    isPhishing: true,
    explanation: "Too-good-to-be-true offers and suspicious links are classic phishing."
  },
  {
    id: 8,
    subject: "Team Meeting Reminder",
    body: "This is a reminder for our team meeting tomorrow at 10am. See you there!",
    isPhishing: false,
    explanation: "No suspicious links or urgent requests. Looks like a normal internal email."
  },
  {
    id: 9,
    subject: "Security Alert: Suspicious Activity Detected",
    body: "We noticed suspicious activity on your account. Please login here to review: http://secure-login.com",
    isPhishing: true,
    explanation: "Fake security alerts with login links are common phishing attempts."
  },
  {
    id: 10,
    subject: "Lunch Order Confirmation",
    body: "Your lunch order has been received and will be delivered at noon.",
    isPhishing: false,
    explanation: "No suspicious links or urgent requests. Looks like a normal service email."
  }
];

// Utility to get a random set of 5 questions
function getRandomQuestions() {
  const shuffled = [...allExamples].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 5);
}

export default function PhishingDemo() {
  const [questions, setQuestions] = useState(getRandomQuestions());
  const [answers, setAnswers] = useState({});
  const [showConfetti, setShowConfetti] = useState(false);

  const handleSelect = (id, guess, isPhishing) => {
    if (answers[id] !== undefined) return;
    const newAnswers = { ...answers, [id]: guess === isPhishing };
    setAnswers(newAnswers);

    // Check if all questions have been answered and all are correct
    if (Object.keys(newAnswers).length === questions.length) {
      const allCorrect = questions.every(ex => newAnswers[ex.id]);
      if (allCorrect) {
        setTimeout(() => setShowConfetti(true), 400);
      }
    }
  };

  const handleReset = () => {
    setQuestions(getRandomQuestions());
    setAnswers({});
    setShowConfetti(false);
  };

  const allAnswered = Object.keys(answers).length === questions.length;
  const allCorrect = allAnswered && questions.every(ex => answers[ex.id]);

  return (
    <section className={`phishing-demo-section${allCorrect ? ' completed' : ''}`}>
      <h2>Phishing Detection Demo</h2>
      <p>Can you spot the phishing emails? Click "Phishing" or "Safe" for each example.</p>
      <ul className="phishing-list">
        {questions.map(example => (
          <li key={example.id} className="phishing-example">
            <strong>Subject:</strong> {example.subject}
            <br />
            <span>{example.body}</span>
            <div className="phishing-actions">
              <button
                onClick={() => handleSelect(example.id, true, example.isPhishing)}
                disabled={answers[example.id] !== undefined || allCorrect}
              >
                Phishing
              </button>
              <button
                onClick={() => handleSelect(example.id, false, example.isPhishing)}
                disabled={answers[example.id] !== undefined || allCorrect}
              >
                Safe
              </button>
            </div>
            {answers[example.id] !== undefined && (
              <div className={`phishing-feedback ${answers[example.id] ? 'correct' : 'incorrect'}`}>
                {answers[example.id] ? "Correct!" : "Incorrect."} {example.explanation}
              </div>
            )}
          </li>
        ))}
      </ul>
      {allAnswered && !allCorrect && (
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <button className="reset-btn" onClick={handleReset}>Reset</button>
        </div>
      )}
      {allCorrect && (
        <div className="congrats-overlay">
          <div>
            <span>Congratulations you have caught all of the phish!</span>
            <div style={{ marginTop: '2rem', textAlign: 'center', pointerEvents: 'auto' }}>
              <button
                className="reset-btn"
                onClick={handleReset}
                style={{ pointerEvents: 'auto' }}
                tabIndex={0}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      )}
      {showConfetti && <Confetti />}
    </section>
  );
}