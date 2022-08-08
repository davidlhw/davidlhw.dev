import theme from "./theme";
import landing from "./landing";
import error404 from "./error404";
import viewport from "./viewport";
import articles from "./articles";
import headerNav from "./headerNav";
import pageTitle from "./pageTitle";

export default {
  viewport,
  theme,
  headerNav,
  dateFormat: {
    parse: "dd/MM/yyyy",
    format: "MMM d, yyyy",
  },
  twitterUsername: "davidlhw_",
  cta: {
    github: "https://github.com/DavidLHW",
    twitter: "https://twitter.com/davidlhw_",
    linkedin: "https://www.linkedin.com/in/davidlhw/",
  },
  articles,
  landing,
  error404,
  pageTitle,
};
