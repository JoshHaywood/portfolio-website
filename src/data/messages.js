const messages = [
  {
    path: "/message-sent",
    heading: "Thank you",
    message:
      "Your message has been sent successfully. You will receive a reply to the email you provided as soon as possible.",
    redirect: "/",
  },
  {
    path: "*",
    heading: "This page does not exist",
    message:
      "The page you were looking for does not exist or has been removed.",
    redirect: -1,
  },
];

export default messages;
