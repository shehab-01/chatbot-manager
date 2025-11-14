"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import React, { useState } from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const invoices = [
  {
    invoice: "01",
    paymentStatus: "Paid.pdf",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "02",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "03",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "04",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "05",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "06",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "07",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

const Playground = () => {
  const [temperature, setTemperature] = useState([0.6]);
  const [agentValue, setAgentValue] = useState("");

  const dummyKnowledge = [
    { id: 1, title: "Knowledge 1" },
    {
      id: 2,
      title: "Knowledge 2",
    },
    {
      id: 3,
      title: "Knowledge 3",
    },
    {
      id: 4,
      title: "Knowledge 4",
    },
  ];

  return (
    <div className="flex min-h-screen">
      {/* --- Sidebar --- */}
      <div className="w-96 flex-none border-r border-black ">
        <div className="px-1 py-5 pr-6 flex flex-col h-full">
          <div className="text-2xl font-semibold">Knowledge Base</div>
          <div className="py-2">
            <Separator />
          </div>

          <div className="py-2"></div>

          <div className="text-sm p-4 space-y-2 flex-1 flex flex-col overflow-hidden border rounded-md">
            <p className="font-semibold">Knowledge List</p>

            <div className="py-4">
              <Button className="w-full">Add New Knowledge</Button>
            </div>

            <div className="space-y-2 overflow-y-auto">
              {dummyKnowledge.map((chat) => (
                <div
                  key={chat.id}
                  className="p-2 border rounded-md hover:bg-gray-50 cursor-pointer"
                >
                  <p className="font-semibold truncate">{chat.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --- Main Chat Area --- */}

      <div className="flex-1">
        <div className="flex flex-col items-center py-10">
          <div className="w-[90%] flex justify-end mb-4">
            <Button className="">Import new file</Button>
          </div>
          <div className="w-[90%]">
            <Table className="border">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">ID</TableHead>
                  <TableHead>File name</TableHead>
                  <TableHead className="w-[100px]">Size</TableHead>
                  <TableHead className="text-right">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.map((invoice) => (
                  <TableRow key={invoice.invoice}>
                    <TableCell className="font-medium">
                      {invoice.invoice}
                    </TableCell>
                    <TableCell>{invoice.paymentStatus}</TableCell>
                    <TableCell>{invoice.paymentMethod}</TableCell>
                    <TableCell className="text-right">
                      {invoice.totalAmount}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playground;
