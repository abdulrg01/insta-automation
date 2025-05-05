interface TriggerProps {
    automationId: string
    type?: 'smartAI' | 'message'
}
interface ListenerProps {
    automationId: string
    type?: 'smartAI' | 'message'
    prompt?: string
    commentReply?: string
    dmCount?: number
    commentCount?: number
}
interface PostsProps {
    postsId: string
    caption?: string
    media?: string
    prompt?: string
    mediaType?: string
    automationId?: string
}
interface DmsProps {
    senderId: string
    receiver?: string
    message?: string
    prompt?: string
    createdAt?: string
    automationId?: string
}
interface KeywordProps {
    word: string
    automationId?: string
}

export interface AutomationProps {
    userId: string
    name: string
    createdAt?: string;
    active: boolean
    trigger: TriggerProps | null
    listenersP: ListenerProps | null
    posts: PostsProps | null
    dms: DmsProps | null
    keyword: KeywordProps| null
}