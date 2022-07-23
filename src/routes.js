import Questions from "views/questions/Questions";
import Login from "views/auth/Login";
import Discussions from "views/discussions/Discussions";
import Ask from "views/questions/Ask";
import Ans from "views/answers/Ans";
import Comment from "views/comments/Comment";
var routes = [
  {
    path: "/questions",
    name: "Questions",
    icon: "ni ni-tv-2",
    component: Questions,
    layout: "/admin",
  },
  {
    path: "/questions/:id",
    name: "Discusions",
    icon: "ni ni-key-25",
    component: Discussions,
    layout: "/admin",
    sideDeactivate: true,
  },
  {
    path: "/ask",
    name: "Ask a question",
    icon: "ni ni-sound-wave",
    component: Ask,
    layout: "/admin",
    sideDeactivate: true,
  },
  {
    path: "/ans/:id",
    name: "Ask a question",
    icon: "ni ni-sound-wave",
    component: Ans,
    layout: "/admin",
    sideDeactivate: true,
  },
  {
    path: "/comment/post/:id",
    name: "Ask a question",
    icon: "ni ni-sound-wave",
    component: Comment,
    layout: "/admin",
    sideDeactivate: true,
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25",
    component: Login,
    layout: "/auth",
    sideDeactivate: true,
  },
];
export default routes;
