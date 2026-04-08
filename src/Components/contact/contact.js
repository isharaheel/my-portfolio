import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { AiOutlineSend } from "react-icons/ai";
import emailjs from '@emailjs/browser';

export default function Contact(params) {
  const [alert, setAlert] = useState(null);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_rcpedei', 'template_tx5h856', form.current, {
        publicKey: 'IEy7OCEX-ZDVgtpw1',
      })
      .then(
        () => {
          // --- 1. Clear the form fields immediately after success ---
          form.current.reset();

          // --- 2. Show the success alert ---
          setAlert(
            <Alert
              sx={{
                position: 'fixed',
                bottom: 20,
                right: 50,
                width: 300,
                zIndex: 9999,
                borderRadius: '8px',
                boxShadow: '0 0 10px rgba(0,0,0,0.3)'
              }}
              onClose={() => setAlert(null)}
              severity="success"
            >
              Email has been sent
            </Alert>
          );

          // --- 3. Hide the alert automatically after 3 seconds ---
          setTimeout(() => setAlert(null), 3000);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setAlert(<Alert severity="error">Fail to send message</Alert>);
          
          // Hide error alert after 3 seconds too
          setTimeout(() => setAlert(null), 3000);
        }
      );
  };

  return (
    <>
      <Box sx={{ width: { xs: 'auto', sm: 'auto', md: 'auto', lg: '80%' }, height: 'auto', margin: '70px auto' }}>
        <Typography className='project' sx={{ color: 'var(--color1)', fontSize: '35px', textAlign: 'center' }}>
          Get In Touch ☎
        </Typography>
        
        <Box sx={{ width: { xs: '80%', sm: "80%", md: '90%', lg: '100%' }, height: 'auto', margin: '70px auto', display: 'flex', flexDirection: { xs: 'column', sm: 'column', md: 'row', lg: 'row' }, gap: '25px' }}>
          
          {/* Left Side: Contact Info */}
          <Box sx={{ width: { xs: 'auto', sm: 'auto', md: 'auto', lg: '50%' }, height: 'auto', borderRadius: '10px', padding: '20px', display: 'flex', flexDirection: "column", gap: '20px', boxShadow: '0 0 10px rgba(229, 224, 224, 0.5)' }}>
            <Typography sx={{ fontSize: '35px', color: 'var(--color)', fontWeight: 'bold', fontFamily: '"Bricolage Grotesque", sans-serif' }}>
              We'd Love to Hear From You
            </Typography>
            <Typography sx={{ color: 'var(--color1)', fontSize: '20px', fontFamily: 'sans-serif' }}>
              Weather it's feedback, ideas, or just a hello we're here 💡
            </Typography>
            
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'column', md: 'row', lg: 'row' }, gap: '15px', alignItems: "center" }}>
              <Box sx={{ width: '40px', height: '40px', textAlign: 'center', borderRadius: '100%', padding: '10px', boxShadow: '0 0 10px rgba(229, 224, 224, 0.5)' }}>
                <FaEnvelope style={{ color: "var(--color1)", fontSize: '30px', marginTop: '5px' }} />
              </Box>
              <Typography sx={{ fontSize: '20px', color: 'var(--color)', fontFamily: 'sans-serif' }}>
                isharaheel555@gmail.com
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'column', md: 'row', lg: 'row' }, gap: '15px', alignItems: "center" }}>
              <Box sx={{ width: '40px', height: '40px', textAlign: 'center', borderRadius: '100%', padding: '10px', boxShadow: '0 0 10px rgba(229, 224, 224, 0.5)' }}>
                <FaPhone style={{ color: "var(--color1)", fontSize: '30px', marginTop: '5px' }} />
              </Box>
              <Typography sx={{ fontSize: '20px', color: 'var(--color)', fontFamily: 'sans-serif' }}>
                (+92) 324-616 4307
              </Typography>
            </Box>
          </Box>

          {/* Right Side: Form */}
          <Box sx={{ width: { xs: 'auto', sm: 'auto', md: 'auto', lg: '50%' }, borderRadius: '10px', boxShadow: '0 0 10px rgba(229, 224, 224, 0.5)', padding: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <form
              ref={form}
              onSubmit={sendEmail}
              style={{ margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}
            >
              <TextField
                required
                name="from_name"
                label="Name"
                variant="outlined"
                fullWidth
                sx={{
                  '& .MuiInputLabel-root': { color: 'var(--color1)', fontSize: '18px' },
                  '& .MuiOutlinedInput-input': { color: 'var(--color)', fontSize: '18px' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: 'var(--color)' },
                    '&:hover fieldset': { borderColor: 'var(--color)' },
                    '&.Mui-focused fieldset': { borderColor: 'var(--color)' },
                  },
                }}
              />

              <TextField
                required
                name="from_email"
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                sx={{
                  '& .MuiInputLabel-root': { color: 'var(--color1)', fontSize: '18px' },
                  '& .MuiOutlinedInput-input': { color: 'var(--color)', fontSize: '18px' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: 'var(--color)' },
                    '&:hover fieldset': { borderColor: 'var(--color)' },
                    '&.Mui-focused fieldset': { borderColor: 'var(--color)' },
                  },
                }}
              />

              <TextField
                required
                name="message"
                label="Message"
                variant="outlined"
                fullWidth
                multiline
                rows={6}
                sx={{
                  '& .MuiInputLabel-root': { color: 'var(--color1)', fontSize: '18px' },
                  '& .MuiOutlinedInput-input': { color: 'var(--color)', fontSize: '18px' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: 'var(--color)' },
                    '&:hover fieldset': { borderColor: 'var(--color)' },
                    '&.Mui-focused fieldset': { borderColor: 'var(--color)' },
                  },
                }}
              />

              <Button
                type="submit"
                sx={{
                  width: '200px',
                  height: '50px',
                  margin: '30px auto 0',
                  textTransform: 'none',
                  boxShadow: '0 0 10px rgba(229, 224, 224, 0.5)',
                  fontSize: '20px',
                  fontFamily: 'serif',
                  color: 'var(--color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                }}
              >
                Send Message <AiOutlineSend size={15} />
              </Button>
            </form>
          </Box> 
        </Box>
        {alert}
      </Box>
    </>
  );
}