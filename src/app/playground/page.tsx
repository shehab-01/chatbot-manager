"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import React, { useState } from "react";
import { AgentComboBox } from "@/components/AgentComboBox";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
// import PlaygroundLeftSide from "@/components/PlaygroundLeftSide"; // Uncomment if you use it

const Playground = () => {
  const [temperature, setTemperature] = useState([0.6]);
  const [agentValue, setAgentValue] = useState("");

  const dummyChats = [
    { id: 1, title: "Chat with AI", preview: "Hello, how can I help you..." },
    {
      id: 2,
      title: "Project Discussion",
      preview: "Let's review the new specs...",
    },
    {
      id: 3,
      title: "Support Ticket #123",
      preview: "The issue seems to be resolved.",
    },
    {
      id: 4,
      title: "Long Chat Title That Might...",
      preview: "This is a very long message preview...",
    },
  ];

  return (
    <div className="flex min-h-screen">
      {/* --- Sidebar --- */}
      {/* Corrected: 'w-100' to 'w-96' and 'border-r-1' to 'border-r' */}
      <div className="w-96 flex-none border-r border-black ">
        <div className="px-1 py-5 pr-6 flex flex-col h-full">
          {/* <PlaygroundLeftSide /> */}

          {/* --- Top Section --- */}
          <div className="text-2xl font-semibold">Playground</div>
          <div className="py-2">
            <Separator />
          </div>
          <p className="text-sm">Agents</p>
          <div className="py-2">
            <AgentComboBox value={agentValue} onValueChange={setAgentValue} />
          </div>

          {/* Spacer div */}
          <div className="py-2"></div>

          {/* --- Chat List Section (Grows) --- */}
          <div className="text-sm p-4 space-y-2 flex-1 flex flex-col overflow-hidden border rounded-md">
            <p className="font-semibold">Chat List</p>

            {/* New Chat Button (Fixed) */}
            <div className="py-4">
              <Button className="w-full">New Chat</Button>
            </div>

            {/* Scrollable Chat List */}
            <div className="space-y-2 overflow-y-auto">
              {dummyChats.map((chat) => (
                <div
                  key={chat.id}
                  className="p-2 border rounded-md hover:bg-gray-50 cursor-pointer"
                >
                  <p className="font-semibold truncate">{chat.title}</p>
                  <p className="text-xs text-gray-600 truncate">
                    {chat.preview}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --- Main Chat Area --- */}
      <div className="flex-1">chat</div>
    </div>
  );
};

export default Playground;
