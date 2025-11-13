"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
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

const PlaygroundLeftSide = ({}) => {
  return (
    <div>
      <div className="text-2xl font-semibold">Playground</div>
      <div className="flex justify-between pt-8">
        <p className="text-sm">Agent Status</p>
        <p className="text-sm text-green-700">Trained</p>
      </div>
      <div className="py-4">
        <Button className="w-full">Save to Agent</Button>
      </div>
      <div className="py-2">
        <Separator />
      </div>
      <p className="text-sm">Model</p>
      <div className="py-2">{/* <AgentComboBox /> */}</div>
      <div className="py-2">
        <Separator />
      </div>
      <div className="flex justify-between pt-8 pb-5">
        <p className="text-sm">Temperature</p>
        {/* <p className="text-sm text-black font-semibold">{temperature}</p> */}
      </div>
      <Slider
        // value={temperature}
        // onValueChange={setTemperature}
        max={1.0}
        min={0.0}
        step={0.01}
      />
      <div className="flex justify-between pt-2">
        <p className="text-sm">Reserved</p>
        <p className="text-sm ">Creative</p>
      </div>
      <div className="py-4">
        <Separator />
      </div>
      <p className="text-sm pt-4">Instructions (System prompt)</p>
      <div className="py-2">
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <p className="text-sm pt-4">Instructions</p>
      <div className="py-4">
        <Textarea className="h-80  " />
      </div>
    </div>
  );
};

export default PlaygroundLeftSide;
