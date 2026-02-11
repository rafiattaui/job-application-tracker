"use client";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signUp } from "@/lib/auth/auth-client"
import Link from "next/dist/client/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    async function handleSubmit(e: React.FormEvent){
        e.preventDefault();

        setLoading(true);
        setError("");

        try {
            const result = await signUp.email({ name, email, password});

            if (result.error) {
                setError(result.error.message ?? "An error occurred during sign up.");
            } else {
                router.push("/dashboard");
            }
        } catch (err) {
            setError("Failed to create an account. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
        <Card>
            <CardHeader>
                <CardTitle>Sign Up</CardTitle>
                <CardDescription>Create a new account to get started.</CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
                <CardContent>
                { error && <p className="mb-4 text-sm text-red-600">{error}</p> }
                <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" type="text" placeholder="John Doe" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" placeholder="********" minLength={8} value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                </CardContent>
                <CardFooter>
                    <Button type="submit" disabled={loading}>
                        {loading ? "Signing Up..." : "Sign Up"}
                    </Button>
                    <p>Already have an account? <Link href="/sign-in">Sign In</Link></p>
                </CardFooter>
            </form>
        </Card>
    </div>
    );
}