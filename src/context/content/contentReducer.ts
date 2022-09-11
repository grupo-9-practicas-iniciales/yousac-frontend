import { PostInterface, UserInterface } from "../../api"
import { ContentState } from "./content.types"

type ContentActionType =
    | {
        type: 'CONTENT-SET-LOADING',
        payload: boolean
    }
    | {
        type: 'CONTENT-SET-POSTS',
        payload: PostInterface[]
    }
    | {
        type: 'CONTENT-SET-SELECTED-POST',
        payload: PostInterface
    }
    | {
        type: 'CONTENT-SET-SELECTED-USER',
        payload: UserInterface
    }
    | {
        type: 'CONTENT-SET-USERS',
        payload: UserInterface[]
    } | {
        type: 'CONTENT-SET-SELECTED-ID-SECTION',
        payload: string
    }


export const contentReducer = (state: ContentState, action: ContentActionType): ContentState => {
    switch (action.type) {
        case 'CONTENT-SET-LOADING':
            return {
                ...state,
                loading: action.payload
            }

        case 'CONTENT-SET-POSTS':
            return {
                ...state,
                posts: action.payload,
                users: []
            }

        case 'CONTENT-SET-SELECTED-POST':
            return {
                ...state,
                selectedPost: action.payload
            }

        case 'CONTENT-SET-SELECTED-USER':
            return {
                ...state,
                selectedUser: action.payload
            }

        case 'CONTENT-SET-USERS':
            return {
                ...state,
                users: action.payload,
                posts: []
            }

        case 'CONTENT-SET-SELECTED-ID-SECTION':
            return {
                ...state,
                selectedIdSection: action.payload
            }

        default:
            return state;
    }
}