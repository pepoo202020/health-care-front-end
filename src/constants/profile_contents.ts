interface ProfileLinks {
  name: string;
  path: string;
}

interface ProfileContents {
  name: string;
  email: string;
  content: ProfileLinks[];
}

export const profileContents: ProfileContents = {
  name: "John Doe",
  email: "johndoe@example.com",
  content: [
    {
      name: "Information",
      path: "/information",
    },
    {
      name: "Orders",
      path: "/orders",
    },
    {
      name: "Addresses",
      path: "/addresses",
    },
    {
      name: "Settings",
      path: "/settings",
    },
    {
      name: "Logout",
      path: "/logout",
    },
    {
      name: "Login",
      path: "/login",
    },
    {
      name: "Create Account",
      path: "/signup",
    },
  ],
};
