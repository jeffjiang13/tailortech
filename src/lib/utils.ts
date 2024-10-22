import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getStripeOAuthLink(
  accountType: 'agency' | 'subaccount',
  state: string
) {
  const baseUrl = process.env.NEXT_PUBLIC_URL ?? 'https://jj-tailortech.vercel.app/subaccount'; // Provide a fallback URL here
  const redirectUri = `${baseUrl}${baseUrl.endsWith('/') ? '' : '/'}${accountType}`;

  return `https://connect.stripe.com/oauth/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_STRIPE_CLIENT_ID}&scope=read_write&redirect_uri=${redirectUri}&state=${state}`;
}
