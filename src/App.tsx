import { ChangeEvent} from "react";
import "./App.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

function App() {
  const formSchema = z.object({
    username: z.string().min(2).max(20),
    email: z.string().min(5).email(),
    image: z.custom((files: FileList) => files.length > 0, {
      message: "Select a file",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      image: undefined,
    },
  });
  const errors = form.formState.errors;
  const register = form.register;

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }


  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    return e
  }

  return (
    <>
   
      <div className=" mx-auto min-h-56 h-full">
        <Carousel
          className=" mx-auto h-full  max-w-md p-7"
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[Autoplay({delay:3000,stopOnInteraction:true})]}
        >
          <CarouselContent className="">
            <CarouselItem className="ml-1 ">
              <Card>
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                  <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Card Content</p>
                </CardContent>
                <CardFooter>
                  <p>Card Footer</p>
                </CardFooter>
              </Card>
            </CarouselItem>
            <CarouselItem className="">
            <Card>
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                  <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Card Content</p>
                </CardContent>
                <CardFooter>
                  <p>Card Footer</p>
                </CardFooter>
              </Card>
            </CarouselItem>
            <CarouselItem className="">
            <Card>
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                  <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Card Content</p>
                </CardContent>
                <CardFooter>
                  <p>Card Footer</p>
                </CardFooter>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div>
        <h1 className="text-center text-3xl font-semibold">Signup Form</h1>
        <div className="form_container p-10 ">
          <Form {...form} >
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-3/4 mx-auto">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem className="my-2">
                    <FormLabel className="text-2xl ">Username</FormLabel>
                    <FormControl>
                      <Input placeholder="enter username..." {...field} />
                      
                    </FormControl>
                    {errors.username && <span className="text-sm italic font-normal text-red-500">{errors.username?.message}</span>}
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
                    {/* <FormMessage /> */}
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="my-2">
                    <FormLabel className="text-2xl ">Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="enter email..."
                        {...field}
                        type="email"
                      />
                    </FormControl>
                    {errors.email && <span className="text-sm italic font-normal text-red-500">{errors.email?.message}</span>}
                    {/* <FormMessage /> */}
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem className="my-2">
                    <FormLabel className="text-2xl ">File</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="file"
                        {...register("image")}
                        onChange={(e) => handleChange(e)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="my-2">Submit</Button>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
}

export default App;
