interface ListenerProps {
  automationId: string;
  type: "SMARTAI" | "MESSAGE";
  prompt: string;
  commentReply: string;
  dmCount: number;
  commentCount: number;
}
interface PostsProps {
  postsId: string;
  caption: string;
  media: string;
  prompt: string;
  mediaType: string;
  automationId: string;
}
interface DmsProps {
  senderId: string;
  receiver: string;
  message: string;
  prompt: string;
  createdAt: string;
  automationId: string;
}
export interface KeywordProps {
  word: string;
  _id: string
}

export interface EditAutomationProps {
  name?: string;
  active?: boolean;
}

export interface AutomationPropsType {
  trigger?: {
    type?: "COMMENT" | "DM";
    keyword?: string;
    types?: string[];
    keywords: string[];
  };
}

interface TriggerProps {
  automationId: string;
  type: "COMMENT" | "DM";
}

export interface SavePostsProps {
  postId: string;
  caption?: string;
  media: string;
  mediaType: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
}

export interface AutomationProps {
  _id: string;
  userId: string;
  name: string;
  createdAt: string;
  active: boolean;
  trigger: TriggerProps[];
  listener: ListenerProps;
  posts: PostsProps[];
  dms: DmsProps;
  keywords: KeywordProps[];
}
