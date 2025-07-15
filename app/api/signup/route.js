import { NextResponse } from "next/server";
import db from "@/lib/db";
import { hashStr } from "@/lib/helpers";

export async function POST(req) {
  try {
    const { name, email, password, encryption_key } = await req.json();

    const existingUser = await db.User.findOne({ where: { email } });
    if (existingUser) {
      return NextResponse.json(
        { message: "This email already exists.", sys_message: "email_exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await hashStr(password);
    const hashedKey = await hashStr(encryption_key);

    await db.User.create({
      name,
      email,
      password: hashedPassword,
      encryption_key: hashedKey,
    });

    return NextResponse.json({ message: "Signup is successful." }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "An error occurred.", error: error.message },
      { status: 500 }
    );
  }
}