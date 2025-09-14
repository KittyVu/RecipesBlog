import { NextRequest } from 'next/server';
import * as jose from 'jose';
import { secretKey as jwtSecret } from './auth';

if (!jwtSecret) throw new Error("JWT secret not defined in environment");

const jwtConfig = {
  secret: new TextEncoder().encode(jwtSecret),
};

export const isAuthenticated = async (req: NextRequest): Promise<boolean> => {
  // 1. Check Authorization header
  let token: string | null = req.headers.get('authorization') || req.headers.get('Authorization');

  // 2. If no header, check cookie
  if (!token) {
    token = req.cookies.get('token')?.value || null;
    if (!token) return false;
  }

  try {
    // Remove "Bearer " prefix if present
    if (token.startsWith('Bearer ')) {
      token = token.replace('Bearer ', '');
    }

    const { payload } = await jose.jwtVerify(token, jwtConfig.secret);

    // Check actual payload field
    if (payload && payload.id) {
      return true;
    }

    return false;
  } catch (err) {
    console.error('isAuthenticated error:', err);
    return false;
  }
};
