"use client"

import { useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";

export default function ImageTabs() {
    const [activeTab, setActiveTab] = useState("organize"); // organize, hired, boardslt function ImageTabs() {
    return (            
        <section>
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              {/* Tabs */}
              <div className="flex gap-2 justify-center mb-8">
                <Button onClick={() => setActiveTab("organize")} className={`rounded-lg px-6 py-3 text-sm font-medium transition-colors ${activeTab === "organize" ? "bg-primary text-white" : "bg-gray-100 text-gray-500"}`}>Organize Applications</Button>
                <Button onClick={() => setActiveTab("hired")} className={`rounded-lg px-6 py-3 text-sm font-medium transition-colors ${activeTab === "hired" ? "bg-primary text-white" : "bg-gray-100 text-gray-500"}`}>Get Hired</Button>
                <Button onClick={() => setActiveTab("boards")} className={`rounded-lg px-6 py-3 text-sm font-medium transition-colors ${activeTab === "boards" ? "bg-primary text-white" : "bg-gray-100 text-gray-500"}`}>Manage Boards</Button>
              </div>
              <div className="relative mx-auto max-w-5xl overflow-hidden rounded-lg border border-gray-200 shadow-xl mb-8">
                
                {activeTab === "organize" && (<Image 
                src="/hero-images/hero1.png" 
                alt="Organize Applications"
                width={1200}
                height={800}
                />)}

                {activeTab === "hired" && (<Image 
                src="/hero-images/hero2.png" 
                alt="Get Hired"
                width={1200}
                height={800}
                />)}

                {activeTab === "boards" && (<Image 
                src="/hero-images/hero3.png" 
                alt="Manage Boards"
                width={1200}
                height={800}
                />)}
              </div>
            </div>
          </div>
        </section>
    )
} 