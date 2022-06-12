import blog from "https://deno.land/x/blog/blog.tsx";

blog({
  title: "Brandon Manke",
  author: "Brandon Manke",
  favicon: "./static/images/favicon.ico",
  avatar: "./static/images/avatar.png",
  avatarClass: "rounded-full",
  links: [
    { title: "Email", url: "mailto:me@brandonmanke.com" },
    { title: "GitHub", url: "https://github.com/brandonmanke" },
    { title: "LinkedIn", url: "https://www.linkedin.com/in/brandonmanke" },
    { title: "Flickr", url: "https://www.flickr.com/photos/bnm_/" },
  ],
});
