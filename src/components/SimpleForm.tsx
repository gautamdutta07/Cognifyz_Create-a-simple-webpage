import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const SimpleForm = () => {
  const [inputValue, setInputValue] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      toast({
        title: "Form Submitted!",
        description: `You entered: ${inputValue}`,
      });
      setInputValue("");
    } else {
      toast({
        title: "Please enter some text",
        description: "The input field cannot be empty.",
        variant: "destructive",
      });
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto shadow-soft">
      <CardHeader>
        <CardTitle className="text-center text-primary">Simple Form</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="textInput" className="text-foreground">
              Enter some text:
            </Label>
            <Input
              id="textInput"
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type something here..."
              className="border-border focus:ring-primary"
            />
          </div>
          <Button 
            type="submit" 
            className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-button transition-smooth"
          >
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default SimpleForm;