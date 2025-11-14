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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
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

      <div className="flex-1 flex flex-col items-center">
        <div className="flex-1 overflow-y-auto p-4 space-y-4 w-1/2">
          <div className="text-sm p-4 text-center text-gray-500">
            This is the start of your chat.
          </div>

          <div className="flex justify-start">
            <div className="p-3 bg-gray-200 rounded-lg max-w-[70%]">
              Hello! How does this chat layout look?
            </div>
          </div>

          <div className="flex justify-end">
            <div className="p-3 bg-blue-500 text-white rounded-lg max-w-[70%]">
              This is an AI response, aligned to the right.
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-gray-200 w-1/2">
          <div>
            <InputGroup className="h-14 text-lg px-4">
              <InputGroupInput placeholder="Type your message..." />
              <InputGroupAddon align="inline-end">
                <InputGroupButton variant="secondary">Send</InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playground;
