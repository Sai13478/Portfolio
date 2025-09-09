import React, { useState, FormEvent, ChangeEvent } from 'react';
import { ContactFormData } from '../../types';
import styles from './Contact.module.css';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear status when user starts typing
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: '' });
    }
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim()) return false;
    if (!formData.email.trim()) return false;
    if (!formData.subject.trim()) return false;
    if (!formData.message.trim()) return false;
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(formData.email);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    
    if (!validateForm()) {
      setSubmitStatus({
        type: 'error',
        message: 'Please fill in all fields with valid information.'
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate form submission - Replace with your actual form handling
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // For now, just log the form data
      console.log('Form submitted:', formData);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setSubmitStatus({
        type: 'success',
        message: 'Message sent successfully! I\'ll get back to you soon.'
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Error sending message. Please try again or contact me directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.contactForm}>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className={styles.formInput}
          />
        </div>
        
        <div className={styles.inputGroup}>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className={styles.formInput}
          />
        </div>
        
        <div className={styles.inputGroup}>
          <input
            type="text"
            name="subject"
            placeholder="Enter Your Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className={styles.formInput}
          />
        </div>
        
        <div className={styles.inputGroup}>
          <textarea
            name="message"
            placeholder="Enter Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className={styles.formTextarea}
            rows={6}
          />
        </div>

        {submitStatus.type && (
          <div className={`${styles.statusMessage} ${styles[submitStatus.type]}`}>
            {submitStatus.message}
          </div>
        )}
        
        <button 
          type="submit" 
          className={`${styles.sendButton} ${isSubmitting ? styles.sending : ''}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <i className="fas fa-spinner fa-spin"></i>
              Sending...
            </>
          ) : (
            <>
              <i className="fas fa-paper-plane"></i>
              Send Message
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
