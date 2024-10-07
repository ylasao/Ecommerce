"use client";
import * as z from "zod";
import { useStoreModal } from "@/app/hooks/use-store-modal";
import { Modal } from "@/components/ui/modal";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormItem,
  FormLabel,
  FormField,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
const formSchema = z.object({
  name: z.string().min(1),
});

export const StoreModal = () => {
  const storeModal = useStoreModal();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };
  return (
    <>
      <div className="w-[400px] m-auto border p-4 rounded-md">
        <Modal
          title="Create Store"
          description="Add a new store to manage product and category"
          isOpen={storeModal.isOpen}
          onClose={() => storeModal.onClose}
        >
          <div>
            <div className="space-y-4 py-2 pb-4">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="E-commerce" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex pt-6 space-x-2 items-center justify-evenly">
                    <Button variant="outline" onClick={storeModal.onClose}>
                      Cancel
                    </Button>
                    <Button type="submit">Continue</Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
          Future create Store Form
        </Modal>
      </div>
    </>
  );
};
