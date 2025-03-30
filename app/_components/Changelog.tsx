import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import React from "react";

export default function Changelog() {
  return (
    <div className="py-28 min-h-screen">
      <div className="flex flex-col items-center max-w-4xl mx-auto">
        <Card className="max-w-xl w-full mt-8 border-none shadow-none">
          <CardHeader>
            <CardTitle>
              <h1 className="text-4xl font-bold">Changelog</h1>
            </CardTitle>
            <CardDescription>
              Here are the latest changes and updates to Droplet.
            </CardDescription>
          </CardHeader>
        </Card>
        <Separator className="max-w-xl w-full my-4" />

        <Card className="max-w-xl w-full border-none shadow-none">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Version 1.0.0</CardTitle>
            <CardDescription className="text-sm text-gray-500">
              11.20.2024
            </CardDescription>
            <CardContent>
              <ul className="list-disc">
                <li>
                  <span className="font-bold">New Feature:</span> Added a new
                  feature to Droplet.
                </li>
              </ul>
            </CardContent>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
