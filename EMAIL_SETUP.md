# Email Setup Instructions

To make the contact form functional, you need to configure email settings. Follow these steps:

## 1. Create Environment Variables

Create a `.env.local` file in the root directory of your project with the following content:

```env
# Email Configuration
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

## 2. Gmail Setup

### Step 1: Enable 2-Factor Authentication
1. Go to your Google Account settings
2. Navigate to Security
3. Enable 2-Step Verification if not already enabled

### Step 2: Generate App Password
1. In your Google Account settings, go to Security
2. Under "2-Step Verification", click on "App passwords"
3. Select "Mail" as the app
4. Generate a new app password
5. Copy the generated password (it will look like: `abcd efgh ijkl mnop`)

### Step 3: Update Environment Variables
Replace the values in your `.env.local` file:
- `EMAIL_USER`: Your Gmail address (e.g., `julianthegroot@gmail.com`)
- `EMAIL_PASS`: The app password you generated (remove spaces: `abcdefghijklmnop`)

## 3. Test the Setup

1. Start your development server: `npm run dev`
2. Navigate to the contact page
3. Fill out and submit the contact form
4. Check your email (julianthegroot@gmail.com) for the message

## Troubleshooting

- **"Invalid login" error**: Make sure you're using an App Password, not your regular Gmail password
- **"Less secure app access" error**: This shouldn't happen with App Passwords, but if it does, make sure 2FA is enabled
- **No emails received**: Check your spam folder and verify the EMAIL_USER is set correctly

## Security Notes

- Never commit your `.env.local` file to version control
- The `.env.local` file is already in `.gitignore`
- App passwords are more secure than regular passwords for this use case
