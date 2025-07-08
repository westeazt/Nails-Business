import { NextResponse } from "next/server";
import db from "@/lib/db";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    const user = await db.User.findOne({ where: { email } });

    if (!user) {
      return NextResponse.json(
        { message: "Invalid email or password." },
        { status: 401 }
      );
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return NextResponse.json(
        { message: "Invalid email or password." },
        { status: 401 }
      );
    }

    const token = jwt.sign(
        { userId: user.id, name: user.name },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
    );

    const response = NextResponse.json({
      message: "Login successful.",
      name: user.name
    });

    // Set the token in an HTTP-Only cookie for security
    response.cookies.set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 3600, // 1 hour
      path: '/',
    });

    return response;

  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "An error occurred." },
      { status: 500 }
    );
  }
}