import { Button } from "@/components/ui/button";
import { useSubscription } from "@/hooks/useSubscription";
import { CreditCardIcon, Loader2 } from "lucide-react";
import React from "react";
// youtube 7:40:40
const PaymentButton = () => {
  const { onSubscribe, isProcessing } = useSubscription();

  return (
    <Button
      disabled={isProcessing}
      onClick={onSubscribe}
      className="bg-gradient-to-br
     text-white 
     rounded-full 
     from-[#9685DB] 
     font-bold 
     via-[#9434E6] 
     to-[#CC3BD4]"
    >
      {isProcessing ? <Loader2 className="animate-spin" /> : <CreditCardIcon />}
      Upgrade
    </Button>
  );
};

export default PaymentButton;
