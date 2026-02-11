"use client";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/dist/client/link";

export default function SignIn() {
    return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
        <Card>
            <CardHeader>
                <CardTitle>Sign In</CardTitle>
                <CardDescription>Enter your credentials to sign in to your account.</CardDescription>
            </CardHeader>
            <form>
                <CardContent>
                <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                </div>
                <div>
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" placeholder="********" required />
                </div>
                </CardContent>
                <CardFooter>
                    <Button type="submit">
                        Sign In
                    </Button>
                    <p>Don't have an account? <Link href="/sign-up">Sign Up</Link></p>
                </CardFooter>
            </form>
        </Card>
    </div>
    );
}