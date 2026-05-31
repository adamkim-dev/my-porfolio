# Deployment

This project is ready for deployment to Vercel and other modern static-hosting platforms.

## Vercel deployment

1. Create a Vercel account if you do not already have one.
2. Connect the Git repository to Vercel.
3. Set the environment variable in the Vercel dashboard:

```env
OPENAI_API_KEY=your-openai-api-key
```

4. Deploy the project.

## Production settings

- Build command: `npm run build`
- Output directory: default (handled by Next.js)
- Node version: match local Node 22+

## Domain setup

- Use Vercel to add a custom domain or a vanity domain.
- Configure HTTPS automatically through Vercel.
- Add the domain in the Vercel dashboard and verify ownership.

## Production checklist

- Confirm environment variables are configured.
- Ensure no `console.log` statements are leaking sensitive data.
- Validate the homepage loads in Chrome, Safari, and Edge.
- Confirm the API endpoint works by asking the AI assistant a sample question.
