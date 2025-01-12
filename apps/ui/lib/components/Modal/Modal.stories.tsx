import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from './Modal';
import { Text } from '../Typography';
import { Button } from '../Button';
import { Label } from '../Label';
import { TextField } from '../Textfield';
import { withGlobalStyles } from '../../../.storybook/decorator';

export default {
  title: 'Components/Modal',
  component: Dialog,
  decorators: [withGlobalStyles],
};

const BasicDialog = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button className="grv-btn grv-btn-primary">Open Dialog</Button>
    </DialogTrigger>

    <DialogContent className="grv-p-4">
      <DialogClose />
      <DialogHeader>
        <DialogTitle>Dialog Title</DialogTitle>
        <DialogDescription>
          This is a description for the dialog content.
        </DialogDescription>
      </DialogHeader>

      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar
        risus non rikus.
      </Text>
    </DialogContent>
  </Dialog>
);

export const Basic = () => <BasicDialog />;

const ModalWithFooter = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button className="grv-btn grv-btn-primary">Open Dialog</Button>
    </DialogTrigger>

    <DialogContent className="grv-p-4">
      <DialogClose />
      <DialogHeader>
        <DialogTitle>Dialog Title</DialogTitle>
        <DialogDescription>
          This is a description for the dialog content.
        </DialogDescription>
      </DialogHeader>

      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar
        risus non rikus.
      </Text>

      <DialogFooter>
        <Button className="grv-btn grv-btn-primary">Save</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

export const WithFooter = () => <ModalWithFooter />;

const ModalWithImage = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button className="grv-btn grv-btn-primary">Open Greeting Card</Button>
    </DialogTrigger>

    <DialogContent className="grv-p-4">
      <DialogHeader>
        <DialogTitle>Hello 2025</DialogTitle>
      </DialogHeader>
      <DialogClose />

      <img
        className="grv-w-full grv-h-64 grv-object-cover grv-rounded-md"
        src="https://images.unsplash.com/photo-1709884732297-4b3c1a3f725b?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Random Image"
      />

      <Text>
        Wish you a very happy new year. May this year bring you joy and
        happiness.
      </Text>
    </DialogContent>
  </Dialog>
);

export const WithImage = () => <ModalWithImage />;

const LoginModal = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="default">Login</Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[425px] grv-flex">
      <DialogClose className="grv-bg-error-300" />
      <DialogHeader>
        <DialogTitle>Login</DialogTitle>
        <DialogDescription>
          Please enter your credentials to login.
        </DialogDescription>
      </DialogHeader>
      <form className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="email" className="text-right">
            Email
          </Label>
          <TextField
            variant="outlined"
            id="email"
            type="email"
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="password" className="text-right">
            Password
          </Label>
          <TextField
            variant="outlined"
            id="password"
            type="password"
            className="col-span-3"
          />
        </div>
        <Button type="submit" className="mt-4">
          Login
        </Button>
      </form>
    </DialogContent>
  </Dialog>
);

export const Login = () => <LoginModal />;
