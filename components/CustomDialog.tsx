"use client";

import { Button } from '@/shadcn-ui/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/shadcn-ui/components/ui/dialog';
import React from 'react';
import Script from 'next/script'

interface CustomDialogProps {
  buttonLabel: string;
  buttonClassName?: string;
}

const CustomDialog: React.FC<CustomDialogProps> = ({ buttonLabel, buttonClassName }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={`${buttonClassName}`}>
          {buttonLabel}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] min-h-[450px] overflow-y-hidden bg-black text-white p-0">
        <iframe
          src="https://api.leadconnectorhq.com/widget/form/waYju8ZPeXxeuLOBYQ0I"
          style={{ width: "100%", height: "100%", border: "none", borderRadius: "0px" }}
          id="inline-waYju8ZPeXxeuLOBYQ0I"
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="POPUP"
          data-height="400"
          data-layout-iframe-id="inline-waYju8ZPeXxeuLOBYQ0I"
          data-form-id="waYju8ZPeXxeuLOBYQ0I"
          title="POPUP"
        >
        </iframe>
        <Script src="https://link.msgsndr.com/js/form_embed.js" />
      </DialogContent>
    </Dialog>
  );
}

export default CustomDialog;
