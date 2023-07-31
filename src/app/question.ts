export interface Question {
    id: number,
    text: string,
    image?: string,
    choice: Choice[],
}
export interface Choice {
    id: number,
    text: string,
    isAnswer: boolean,
}