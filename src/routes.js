import Questions from "views/questions/Questions";
import Login from "views/auth/Login";
import Editor from "views/editor/Editor";
import QuestionDetails from "views/questions/QuestionDetails";
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
    name: "Editor",
    icon: "ni ni-key-25",
    component: QuestionDetails,
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
