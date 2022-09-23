export interface IGameStatus {
	status: 'start' | 'option' | 'end' | 'quiz';
	reset?: boolean;
	error?: boolean;
}

export type IQuestionDB = {
	question: string;
	category:string;
	correct_answer: string;
	difficulty: string;
	allAnswers: string[]
	incorrect_answers: string[]
}[]

export type CategoriesObj = {
	id: number;
	name: string
}[]

export interface IOptions{
	catID: number
	difficulty: 'easy' | 'medium' | 'hard',
	quantity: number
	minQuestion: number
	maxQuestion:  number
}

export interface PropsQuestions {
	questionDB: IQuestionDB;
	status: 'quiz' | 'end';
	formData: IOptions;
	changeStatus: () => void;
}

export interface IAnswerState {
	answer: string;
	correctAnswer: string;
	questionID: string;
	answerID: string;
	isSelected: boolean;
	isCorrect: boolean;
}


export interface IPropsStart
{
	changeStatus: (event: React.SyntheticEvent) => void;
	handleChange: <T>(event: T extends React.FormEvent<HTMLInputElement> ? T: React.ChangeEvent) => void;
	formData: IOptions;
	categories: CategoriesObj;
	toOptions: (React.MouseEventHandler<HTMLButtonElement>);
	status: IGameStatus;
	handlePlus: () => void;
	handleMinus: () => void;
	minQuestion: number;
	maxQuestion: number;
	spinner: boolean;
}

export interface PropsAnswers {
	correctAnswer: string;
	allAnswers: string[];
	questionID: string;
	saveToLocalStorage: (questionID: string, answerState: any) => {}[];
	status: string;
	savedAnswersDetails: [];
}