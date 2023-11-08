import { Button } from '@/shadcn-ui/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/shadcn-ui/components/ui/dialog';
import React from 'react';

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
      <DialogContent className="sm:max-w-[425px] min-h-[500px] overflow-y-hidden bg-black text-white pt-20">
      <iframe
                  src="https://api.leadconnectorhq.com/widget/form/FPkOIy3TIQWJSi9Gf9f4"
                  style={{ width: "100%", height: "100%", border: "none", borderRadius: "0px" }}

                  id="inline-FPkOIy3TIQWJSi9Gf9f4"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Contact Me - Dialog Form "
                  data-height="486"
                  data-layout-iframe-id="inline-FPkOIy3TIQWJSi9Gf9f4"
                  data-form-id="FPkOIy3TIQWJSi9Gf9f4"
                  title="Contact Me - Dialog Form "
                >
                </iframe>
                <script src="https://link.msgsndr.com/js/form_embed.js"></script>
      </DialogContent>
    </Dialog>
  );
}

export default CustomDialog;
