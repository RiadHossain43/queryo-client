import Questions from "views/questions/Questions";
import Login from "views/auth/Login";
import Editor from "views/editor/Editor";
import Discussions from "views/discussions/Discussions";
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
    component: Editor,
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
