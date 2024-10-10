"use client";

import { cn } from "@/lib/utils";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

function AlertSection() {
  const [showAlert, setShowAlert] = useState(true);
  return showAlert ? (
    <div
      className={cn(
        "bg-primary mx-4  flex justify-between p-[12px] rounded-[12px]",
        showAlert ? "mt-4" : ""
      )}
    >
      <div />
      <div className="inline-flex gap-3 text-white font-semibold text-[12px] md:text-[16px]">
        <div>
          Hey!! Aayush here, This landing page was only possible due to Naufal Irsyad&apos;s free figma template. Do check him out!{" "}
          <Link href="https://www.figma.com/@naufalirsyad" className="underline underline-offset-4 pl-3">
            His Profile
          </Link>
        </div>
      </div>
      <div>
        <PlusIcon
          className="rotate-45 hover:cursor-pointer"
          color="#fff"
          onClick={() => setShowAlert(false)}
        />
      </div>
    </div>
  ) : (
    <div />
  );
}

export default AlertSection;
