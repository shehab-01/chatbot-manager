"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import React, { useState } from "react";
import { ModelComboBox } from "@/components/ModelComboBox";
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
import PlaygroundLeftSide from "@/components/PlaygroundLeftSide";

const Playground = () => {
  const [temperature, setTemperature] = useState([0.6]);

  return (
    <div className="flex">
      <div className="w-100 flex-none border-r-1 border-black h-screen">
        <div className="px-2 py-5 pr-6">
          <PlaygroundLeftSide />
        </div>
      </div>
      <div className="flex-1">chat</div>
    </div>
  );
};

export default Playground;
