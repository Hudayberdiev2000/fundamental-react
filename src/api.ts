import { type PostItemType } from "./components/postItem";

export const fetchPosts = () =>
  new Promise<PostItemType[]>((resolse, reject) => {
    setTimeout(() => {
      resolse([
        { id: 1, title: "JavaScript", body: "Description of JavaScript" },
        { id: 2, title: "TypeScript", body: "Description of TypeScript" },
        { id: 3, title: "React", body: "Description of React" },
      ]);
    }, 300);
  });
